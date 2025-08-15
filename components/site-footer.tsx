import { getPosts } from "@/lib/getPosts";
import { FooterNav } from "./footer-nav";

const footerItems = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/books", label: "Books" },
  { href: "/photography", label: "Photography" },
  { href: "/travel", label: "Travel" },
  { href: "/movies", label: "Movies" },
  { href: "/about", label: "About" },
];

export async function SiteFooter() {
  const year = new Date().getFullYear();
  const posts = (await getPosts()).slice(0, 6);

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-xs text-stone-500">
        <FooterNav />
        <p className="text-center mb-6">
          {"© "}
          <span>{year}</span> {" North Blog. All rights reserved."}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {posts.map((post) => (
            <img
              key={post.slug}
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-20 object-cover rounded"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
