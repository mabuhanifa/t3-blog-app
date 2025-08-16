"use server";

import { db } from "@/lib/db";
import { categories, posts, postsToTags, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

async function getOrCreateAuthor(
  authorName: string,
  authorAvatar?: string
): Promise<string> {
  // 1. Try to find the user by name
  const [existingUser] = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.name, authorName));

  if (existingUser) {
    return existingUser.id;
  }

  // 2. If user doesn't exist, create a new one
  const newUserId =
    authorName.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();

  const [newUser] = await db
    .insert(users)
    .values({
      id: newUserId,
      name: authorName,
      // A fake email is required by the schema, but it won't be used
      email: `${newUserId}@example.com`,
      image: authorAvatar,
    })
    .returning({ id: users.id });

  return newUser.id;
}

export async function createPost(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const categoryName = formData.get("category") as string;
    const authorName = formData.get("author") as string;
    const authorAvatar = formData.get("avatar") as string | undefined;
    const tagIds = formData.getAll("tags").map(Number);

    if (!title || !description || !categoryName || !authorName) {
      return { success: false, message: "Missing required fields." };
    }

    // Get or create the author
    const authorId = await getOrCreateAuthor(authorName, authorAvatar);

    // Generate a slug
    const slug =
      title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "") +
      "-" +
      Date.now();

    await db.transaction(async (tx) => {
      // 1. Find the category ID
      const [category] = await tx
        .select({ id: categories.id })
        .from(categories)
        .where(eq(categories.name, categoryName));

      if (!category) {
        tx.rollback();
        throw new Error(`Category "${categoryName}" not found.`);
      }

      // 2. Insert the new post
      const [newPost] = await tx
        .insert(posts)
        .values({
          title,
          slug,
          description,
          authorId: authorId,
          categoryId: category.id,
          coverImageUrl: formData.get("image") as string | undefined,
          readTime: formData.get("readTime") as string | undefined,
          publishedAt: formData.get("date")
            ? new Date(formData.get("date") as string)
            : new Date(),
        })
        .returning({ id: posts.id });

      // 3. Link tags to the post
      if (tagIds.length > 0) {
        await tx.insert(postsToTags).values(
          tagIds.map((tagId) => ({
            postId: newPost.id,
            tagId: tagId,
          }))
        );
      }
    });

    // Revalidate paths to show the new post
    revalidatePath("/");
    revalidatePath(`/${categoryName.toLowerCase()}`);
    revalidatePath(`/writing/${slug}`);

    return {
      success: true,
      message: "Post created successfully!",
    };
  } catch (error: any) {
    console.error("Error creating post:", error);
    return {
      success: false,
      message: error.message || "Failed to create post.",
    };
  }
}
