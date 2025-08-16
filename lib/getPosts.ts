import { format } from "date-fns";

// Define types for the API response. This could be moved to a shared types file.
type Tag = {
  id: number;
  name: string;
  slug: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
};

type Author = {
  name: string | null;
  image: string | null;
};

type Post = {
  id: number;
  title: string;
  slug: string;
  coverImageUrl: string | null;
  description: string | null;
  readTime: string | null;
  publishedAt: string | null; // It will be a string after JSON serialization
  author: Author;
  category: Category;
  tags: Tag[];
};

export async function getPosts(category?: string) {
  const baseUrl = "http://localhost:3000/api/posts";
  const url = category ? `${baseUrl}?category=${category}` : baseUrl;

  // The base URL should be in an environment variable (e.g., process.env.NEXT_PUBLIC_APP_URL)
  const res = await fetch(url, {
    cache: "no-store", // Use 'no-store' for development to see changes on refresh
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();

  // Filtering is now done by the API. We just need to map the data.
  return posts.map((post) => ({
    slug: post.slug,
    label: post.category.name,
    image: post.coverImageUrl || "https://picsum.photos/800/600",
    imageAlt: post.title,
    title: post.title,
    description: post.description || "",
    avatar: post.author.image || "https://picsum.photos/40",
    dateISO: post.publishedAt
      ? new Date(post.publishedAt).toISOString()
      : new Date().toISOString(),
    dateText: post.publishedAt
      ? format(new Date(post.publishedAt), "MMM d, yyyy")
      : "Date not available",
    readTime: post.readTime || "N/A",
    tags: post.tags,
    author: post.author,
  }));
}
