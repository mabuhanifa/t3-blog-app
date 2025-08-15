import { FilterBar } from "@/components/filter-bar";
import { Pagination } from "@/components/pagination";
import { PostCard } from "@/components/post-card";
import { getPosts } from "@/lib/getPosts";

export const metadata = {
  title: "North Blog — Travel",
  description:
    "Travel at North Blog: field guides, routes, and slow itineraries.",
};

export default async function Page() {
  const posts = await getPosts("travel");

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            Travel
          </span>
          <h2 className="text-2xl font-bold">Routes &amp; Field Guides</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">
          Slow itineraries, foot routes, and weather-tested tips.
        </p>
      </div>

      <FilterBar />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <PostCard key={p.slug} {...p} />
        ))}
      </section>

      <Pagination />
    </section>
  );
}
