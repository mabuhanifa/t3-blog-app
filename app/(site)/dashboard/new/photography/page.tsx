import { SimplePostForm } from "@/components/forms/simple-post-form";

type Tag = {
  id: number;
  name: string;
  slug: string;
};

async function getTags(): Promise<Tag[]> {
  const res = await fetch("http://localhost:3000/api/tags", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch tags");
  return res.json();
}

export default async function Page() {
  const tags = await getTags();

  return <SimplePostForm category="Photography" allTags={tags} />;
}
