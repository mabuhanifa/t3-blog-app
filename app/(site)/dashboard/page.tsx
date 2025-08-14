import Link from "next/link"

export const metadata = {
  title: "North Blog — Dashboard",
  description: "Editorial dashboard for North Blog.",
}

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <a
            href="/"
            className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            View Site
          </a>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">Quick overview of drafts, stats, and recent activity.</p>
      </div>

      {/* Create section */}
      <section className="rounded border border-stone-200 dark:border-stone-800 p-5 mb-8">
        <h3 className="font-bold mb-3">Create new post</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/dashboard/new/writing"
            className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            Writing
          </Link>
          <Link
            href="/dashboard/new/books"
            className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            Books
          </Link>
          <Link
            href="/dashboard/new/photography"
            className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            Photography
          </Link>
          <Link
            href="/dashboard/new/travel"
            className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            Travel
          </Link>
          <Link
            href="/dashboard/new/movies"
            className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          >
            Movies
          </Link>
        </div>
      </section>

      {/* Stat cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Posts", value: "128" },
          { label: "Subscribers", value: "4,392" },
          { label: "Monthly Views", value: "86k" },
          { label: "Drafts", value: "9" },
        ].map((s) => (
          <div key={s.label} className="rounded border border-stone-200 dark:border-stone-800 p-5">
            <div className="text-xs text-stone-500 mb-1">{s.label}</div>
            <div className="text-3xl font-bold">{s.value}</div>
          </div>
        ))}
      </section>

      {/* Main grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Drafts */}
        <article className="lg:col-span-2 rounded border border-stone-200 dark:border-stone-800 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Drafts in progress</h3>
            <a
              href="/dashboard/new"
              className="text-sm text-emerald-700 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
            >
              New draft
            </a>
          </div>
          <ul className="divide-y divide-stone-200 dark:divide-stone-800">
            {[
              { title: "Window North", meta: "Photography • updated 2h ago" },
              { title: "Cabin Maps", meta: "Travel • updated yesterday" },
              { title: "Underlines", meta: "Books • updated 3d ago" },
            ].map((d) => (
              <li key={d.title} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{d.title}</div>
                  <div className="text-xs text-stone-500">{d.meta}</div>
                </div>
                <button className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 text-sm hover:bg-stone-50 dark:hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </article>

        {/* Tasks */}
        <aside className="rounded border border-stone-200 dark:border-stone-800 p-5">
          <h3 className="font-bold mb-3">Editorial tasks</h3>
          <ul className="space-y-2 text-sm">
            {[
              { id: "t1", label: "Schedule May newsletter" },
              { id: "t2", label: "Proofread “Mile Markers”" },
              { id: "t3", label: "Update hero images" },
            ].map((t) => (
              <li key={t.id} className="flex items-center gap-2">
                <input
                  id={t.id}
                  type="checkbox"
                  className="rounded border-stone-300 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <label htmlFor={t.id}>{t.label}</label>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <label htmlFor="quick-note" className="text-xs text-stone-500">
              Quick note
            </label>
            <textarea
              id="quick-note"
              rows={3}
              className="mt-1 w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Jot something..."
            />
            <button className="mt-2 rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              Save
            </button>
          </div>
        </aside>
      </section>
    </section>
  )
}
