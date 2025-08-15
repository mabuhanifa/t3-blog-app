import { db } from "@/lib/db";
import { categories } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allCategories = await db.select().from(categories);

    return NextResponse.json(allCategories);
  } catch (error) {
    console.error("[CATEGORIES_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
