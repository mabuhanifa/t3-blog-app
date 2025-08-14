import Link from "next/link"

export default function Page() {
  const sections = [
    { href: "/dashboard/new/writing", label: "Writing" },
    { href: "/dashboard/new/books", label: "Books" },
    { href: "/dashboard/new/photography", label: "Photography" },
    { href: "/dashboard/new/travel", label: "Travel" },
    { href: "/dashboard/new/movies", label: "Movies" },
  ]
  return (
    <div>
      <p className="text-stone-600 dark:text-stone-400 mb-4">
        Select a section to start a new post. Writing includes a rich text editor.
      </p>
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
