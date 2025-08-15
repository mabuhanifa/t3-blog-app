import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const post = await db.query.posts.findFirst({
      where: eq(posts.slug, slug),
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
    });

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    // Transform the data to create a cleaner 'tags' array
    const { postsToTags, ...rest } = post;
    const postWithCleanTags = {
      ...rest,
      tags: postsToTags.map((pt) => pt.tag),
    };

    return NextResponse.json(postWithCleanTags);
  } catch (error) {
    console.error("[POST_GET_BY_SLUG]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
