import { SimplePostForm } from "@/components/forms/simple-post-form";

export const metadata = { title: "New Books Post — Dashboard" };

// Define types for the data we're fetching.
type Category = {
  id: number;
  name: string;
  slug: string;
};

type Tag = {
  id: number;
  name: string;
  slug: string;
};

async function getCategories(): Promise<Category[]> {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

async function getTags(): Promise<Tag[]> {
  const res = await fetch("http://localhost:3000/api/tags", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch tags");
  return res.json();
}

export default async function Page() {
  const categories = await getCategories();
  const tags = await getTags();

  const booksCategory = categories.find((c) => c.name === "Books");

  if (!booksCategory) {
    return <div>Error: "Books" category not found.</div>;
  }

  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Books Post</h3>
      {/* The SimplePostForm component will need to be updated to accept these props */}
      <SimplePostForm category="Books" allTags={tags} />
    </div>
  );
}
