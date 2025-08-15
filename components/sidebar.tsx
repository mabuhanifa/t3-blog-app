import Link from "next/link";

export default function Sidebar() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
          <div className="relative overflow-hidden">
            <img
              src="https://picsum.photos/800/1200?random=26"
              alt="Tall pine forest with fog"
              className="w-full h-96 object-cover rounded-t group-hover:scale-105 transition"
            />
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
              Essay
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">Timber Lines</h3>
            <p className="text-stone-600 dark:text-stone-400">
              Walking the treeline where storms collect.
            </p>
          </div>
        </article>

        <aside className="rounded border border-stone-200 dark:border-stone-800 p-5">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://picsum.photos/64?random=27"
              alt="Editor avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-stone-500">From the Editor</p>
              <h3 className="font-bold">This month’s letter</h3>
            </div>
          </div>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            We’re celebrating small forms—haiku weather, postcard essays, and
            one-roll photo walks.
          </p>
          <Link
            href="/writing"
            className="inline-block rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Read the letter
          </Link>
        </aside>

        <aside className="rounded border border-stone-200 dark:border-stone-800 p-5">
          <h3 className="font-bold mb-4">Popular posts</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <img
                src="https://picsum.photos/96?random=28"
                alt="Thumbnail of rocky coast"
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <Link
                  href="/travel"
                  className="font-medium hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  Sea Rooms
                </Link>
                <div className="text-stone-500 text-xs">May 2024</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="https://picsum.photos/96?random=29"
                alt="Thumbnail of stack of books"
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <Link
                  href="/books"
                  className="font-medium hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  Underlines
                </Link>
                <div className="text-stone-500 text-xs">Apr 2024</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="https://picsum.photos/96?random=30"
                alt="Thumbnail of snowy trail"
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <Link
                  href="/writing"
                  className="font-medium hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  Walking Drafts
                </Link>
                <div className="text-stone-500 text-xs">Apr 2024</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="https://picsum.photos/96?random=31"
                alt="Thumbnail of vintage camera"
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <Link
                  href="/photography"
                  className="font-medium hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  Meter &amp; Memory
                </Link>
                <div className="text-stone-500 text-xs">Mar 2024</div>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
