import { FilterBar } from "@/components/filter-bar";
import { Pagination } from "@/components/pagination";
import { PostCard } from "@/components/post-card";
import { format } from "date-fns";

export const metadata = {
  title: "North Blog — Photography",
  description: "Photography at North Blog: images, field notes, and gear talk.",
};

// Define types for the API response. In a real app, these might be in a shared types file.
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

async function getPosts() {
  // The base URL should be in an environment variable (e.g., process.env.NEXT_PUBLIC_APP_URL)
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store", // Use 'no-store' for development to see changes on refresh
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();

  // Filter for 'Photography' category and map to the format required by PostCard
  return posts
    .filter((post) => post.category.slug === "photography")
    .map((post) => ({
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
    }));
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            Photography
          </span>
          <h2 className="text-2xl font-bold">Frames &amp; Field Notes</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">
          Light, lenses, and the stories we carry between exposures.
        </p>
      </div>

      <FilterBar />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {posts.map((p) => (
          <PostCard key={p.slug} {...p} />
        ))}
      </section>

      {/* Gallery strip */}
      {/* <section aria-label="Gallery strip" className="mb-10">
        <h3 className="font-bold mb-3">Contact Sheets</h3>
        <div className="flex overflow-x-auto whitespace-nowrap gap-3 py-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/240?random=${331 + i}`}
              alt={`Gallery thumbnail ${i + 1}`}
              className="inline-block w-40 h-28 object-cover rounded"
            />
          ))}
        </div>
      </section> */}

      <Pagination />
    </section>
  );
}
