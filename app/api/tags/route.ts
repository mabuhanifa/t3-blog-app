import { db } from "@/lib/db";
import { tags } from "@/lib/db/schema";
import { NextResponse } from "next/server";

// GET /api/tags - Get all tags
export async function GET() {
  const allTags = await db.select().from(tags);
  return NextResponse.json(allTags);
}

// POST /api/tags - Create a new tag
export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json(
        { message: "Tag name is required" },
        { status: 400 }
      );
    }

    // Generate a slug from the tag name
    const slug = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    // Insert the new tag into the database
    const [newTag] = await db.insert(tags).values({ name, slug }).returning();

    return NextResponse.json(newTag, { status: 201 });
  } catch (error: any) {
    // Handle potential database errors, e.g., unique constraint violation
    if (error.cause?.code === "23505") {
      return NextResponse.json(
        { message: "A tag with this name already exists" },
        { status: 409 }
      );
    }

    console.error("Error creating tag:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
