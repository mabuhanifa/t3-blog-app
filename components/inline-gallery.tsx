import { getPosts } from "@/lib/getPosts";

export default async function InlineGallery() {
  // Fetch photography posts and take the first 3 for the gallery
  const posts = (await getPosts("photography")).slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
      <h2 className="font-bold text-xl mb-4">Field Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map((post) => (
          <figure
            key={post.slug}
            className="rounded border border-stone-200 dark:border-stone-800 overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-48 object-cover"
            />
            <figcaption className="text-center text-sm text-stone-600 dark:text-stone-400 py-2">
              {post.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
