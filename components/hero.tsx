import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

export default async function Hero() {
  const allPosts = await getPosts();
  const featuredPost = allPosts[0];
  const secondaryFeaturedPost = allPosts[1];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <h2 className="sr-only">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured tall card */}
        {featuredPost && (
          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <Link href={`/posts/${featuredPost.slug}`}>
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  className="w-full h-80 md:h-[28rem] object-cover rounded-t group-hover:scale-105 transition"
                />
                <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-3 left-3">
                  Feature
                </span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {featuredPost.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-3">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-3 text-stone-500 text-xs">
                  <img
                    src={featuredPost.avatar}
                    alt="Author avatar"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>By {featuredPost.author.name}</span>{" "}
                  <span aria-hidden="true">•</span>
                  <time dateTime={featuredPost.dateISO}>
                    {featuredPost.dateText}
                  </time>
                  <span aria-hidden="true">•</span>{" "}
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        )}

        {/* Secondary feature */}
        {secondaryFeaturedPost && (
          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <Link href={`/posts/${secondaryFeaturedPost.slug}`}>
              <div className="relative overflow-hidden">
                <img
                  src={secondaryFeaturedPost.image}
                  alt={secondaryFeaturedPost.imageAlt}
                  className="w-full h-80 object-cover rounded-t group-hover:scale-105 transition"
                />
                <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-3 left-3">
                  {secondaryFeaturedPost.label}
                </span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold mb-2">
                  {secondaryFeaturedPost.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-3">
                  {secondaryFeaturedPost.description}
                </p>
                <div className="flex items-center gap-3 text-stone-500 text-xs">
                  <img
                    src={secondaryFeaturedPost.avatar}
                    alt="Author avatar"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>By {secondaryFeaturedPost.author.name}</span>{" "}
                  <span aria-hidden="true">•</span>
                  <time dateTime={secondaryFeaturedPost.dateISO}>
                    {secondaryFeaturedPost.dateText}
                  </time>
                  <span aria-hidden="true">•</span>{" "}
                  <span>{secondaryFeaturedPost.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        )}
      </div>
    </section>
  );
}
