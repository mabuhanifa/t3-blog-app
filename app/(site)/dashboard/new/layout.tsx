import type { ReactNode } from "react"
import Link from "next/link"

export default function NewPostLayout({ children }: { children: ReactNode }) {
  const links = [
    { href: "/dashboard/new/writing", label: "Writing" },
    { href: "/dashboard/new/books", label: "Books" },
    { href: "/dashboard/new/photography", label: "Photography" },
    { href: "/dashboard/new/travel", label: "Travel" },
    { href: "/dashboard/new/movies", label: "Movies" },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Create a new post</h2>
        <p className="text-stone-600 dark:text-stone-400">Choose a section and fill the form to create a post.</p>
        <nav className="mt-4 flex flex-wrap gap-2 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="rounded border border-stone-200 dark:border-stone-800 p-5">{children}</div>
    </section>
  )
}
