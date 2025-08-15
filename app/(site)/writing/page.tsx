import { FilterBar } from "@/components/filter-bar";
import { Pagination } from "@/components/pagination";
import { PostCard } from "@/components/post-card";
import { getPosts } from "@/lib/getPosts";

export const metadata = {
  title: "North Blog — Writing",
  description: "Writing at North Blog: essays, notes, and drafts.",
};

export default async function Page() {
  const posts = await getPosts("writing");
  console.log(posts);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      {/* Page hero */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            Writing
          </span>
          <h2 className="text-2xl font-bold">Latest in Writing</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">
          Essays and notes on craft, attention, and daily pages.
        </p>
      </div>

      <FilterBar />

      {/* Posts grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <PostCard key={p.slug} {...p} />
        ))}
      </section>

      <Pagination />
    </section>
  );
}
