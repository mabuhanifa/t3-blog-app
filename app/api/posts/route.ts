import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { categories, posts, postsToTags } from "@/lib/db/schema";
import { eq, SQL } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";

// A simple slugify function to create a URL-friendly slug from the title
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

// Zod schema for validating the request body
const postCreateSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  categoryId: z.number(),
  coverImageUrl: z.string().url().optional(),
  date: z.string().datetime().optional(),
  content: z.string().optional(),
  description: z.string().optional(),
  readTime: z.string().optional(),
  tags: z.array(z.number()).optional(),
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get("category");

    let categoryFilter: SQL | undefined = undefined;

    if (categorySlug) {
      // Find the category ID from the slug
      const category = await db.query.categories.findFirst({
        where: eq(categories.slug, categorySlug),
        columns: { id: true },
      });

      if (!category) {
        // If category doesn't exist, return an empty array as no posts can be found.
        return NextResponse.json([]);
      }
      categoryFilter = eq(posts.categoryId, category.id);
    }

    const allPosts = await db.query.posts.findMany({
      where: categoryFilter,
      with: {
        author: {
          columns: {
            name: true,
            image: true,
          },
        },
        category: true,
        postsToTags: {
          with: {
            tag: true,
          },
        },
      },
      orderBy: (posts, { desc }) => [desc(posts.publishedAt)],
    });

    // Transform the data to create a cleaner 'tags' array
    const postsWithCleanTags = allPosts.map((post) => {
      const { postsToTags, ...rest } = post;
      return {
        ...rest,
        tags: postsToTags.map((pt) => pt.tag),
      };
    });

    return NextResponse.json(postsWithCleanTags);
  } catch (error) {
    console.error("[POSTS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const parsedBody = postCreateSchema.safeParse(body);

    if (!parsedBody.success) {
      return new NextResponse(parsedBody.error.message, { status: 400 });
    }

    const {
      title,
      categoryId,
      coverImageUrl,
      date,
      content,
      description,
      readTime,
      tags,
    } = parsedBody.data;

    const slug = slugify(title);

    const newPost = await db.transaction(async (tx) => {
      const [createdPost] = await tx
        .insert(posts)
        .values({
          title,
          slug,
          authorId: session.user.id,
          categoryId,
          coverImageUrl,
          publishedAt: date ? new Date(date) : new Date(),
          content,
          description,
          readTime,
        })
        .returning();

      if (tags && tags.length > 0) {
        const tagsToInsert = tags.map((tagId) => ({
          postId: createdPost.id,
          tagId: tagId,
        }));
        await tx.insert(postsToTags).values(tagsToInsert);
      }

      return createdPost;
    });

    return NextResponse.json(newPost);
  } catch (error) {
    // Handle potential database errors, e.g., unique constraint violation for the slug
    if (
      error instanceof Error &&
      "code" in error &&
      (error as any).code === "23505"
    ) {
      return new NextResponse("A post with this title already exists.", {
        status: 409,
      });
    }

    console.error("[POSTS_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
