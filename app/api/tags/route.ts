import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { tags } from "../../../lib/db/schema";

export async function GET() {
  try {
    const allTags = await db.select().from(tags);
    return NextResponse.json(allTags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
