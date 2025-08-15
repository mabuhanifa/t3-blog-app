import { FilterBar } from "@/components/filter-bar";
import { Pagination } from "@/components/pagination";
import { PostCard } from "@/components/post-card";
import { getPosts } from "@/lib/getPosts";

export const metadata = {
  title: "North Blog — Photography",
  description: "Photography at North Blog: images, field notes, and gear talk.",
};

export default async function Page() {
  const posts = await getPosts("photography");

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
