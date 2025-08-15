import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
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
});

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
    } = parsedBody.data;

    const slug = slugify(title);

    const newPost = await db
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

    return NextResponse.json(newPost[0]);
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
