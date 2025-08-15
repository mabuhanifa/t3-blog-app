import { getPosts } from "@/lib/getPosts";
import { PostCard } from "./post-card";

export default async function Cluster() {
  // Fetch all posts and slice to get the latest 6 for this section
  const posts = (await getPosts()).slice(2, 8);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-10">
      <h2 className="sr-only">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <PostCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
}
