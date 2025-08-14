import Link from "next/link"

export const metadata = {
  title: "North Blog — Home",
  description: "North Blog — stories on writing, books, photography, travel, and movies.",
}

export default function Page() {
  return (
    <>
      {/* Hero grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="sr-only">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured tall card */}
          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/1200/800?random=1"
                alt="Mountain sunrise over misty valley"
                className="w-full h-80 md:h-[28rem] object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-3 left-3">
                Feature
              </span>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">In the North: Notes on Quiet Places</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                An essay on seeking silence at the edges of maps and the rituals that help us listen.
              </p>
              <div className="flex items-center gap-3 text-stone-500 text-xs">
                <img
                  src="https://picsum.photos/40?random=11"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>By Lina Frost</span> <span aria-hidden="true">•</span>
                <time dateTime="2024-05-12">May 12, 2024</time>
                <span aria-hidden="true">•</span> <span>7 min read</span>
              </div>
            </div>
          </article>

          {/* Secondary feature */}
          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/1200/800?random=2"
                alt="Coastal cliffs at golden hour"
                className="w-full h-80 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-3 left-3">
                Travel
              </span>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-bold mb-2">Coastal Paths and Wind Maps</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Tracing the salt roads and the cartography of weather along the Atlantic fringe.
              </p>
              <div className="flex items-center gap-3 text-stone-500 text-xs">
                <img
                  src="https://picsum.photos/40?random=12"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>By Alex North</span> <span aria-hidden="true">•</span>
                <time dateTime="2024-05-02">May 2, 2024</time>
                <span aria-hidden="true">•</span> <span>5 min read</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Masonry-like cluster */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-10">
        <h2 className="sr-only">Latest Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 6 cards */}
          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=3"
                alt="Open notebook and pen on wooden desk"
                className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
                Writing
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Drafts and Drift</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                On getting lost long enough to find the sentence.
              </p>
              <div className="text-stone-500 text-xs flex items-center gap-3">
                <img
                  src="https://picsum.photos/40?random=13"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <time dateTime="2024-04-20">Apr 20, 2024</time>
                <span aria-hidden="true">•</span>
                <span>4 min read</span>
              </div>
            </div>
          </article>

          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=4"
                alt="Stack of hardback books with green ribbon"
                className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
                Books
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Margins That Matter</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Why annotations are love letters to future selves.
              </p>
              <div className="text-stone-500 text-xs flex items-center gap-3">
                <img
                  src="https://picsum.photos/40?random=14"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <time dateTime="2024-04-15">Apr 15, 2024</time>
                <span aria-hidden="true">•</span>
                <span>6 min read</span>
              </div>
            </div>
          </article>

          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=5"
                alt="Vintage camera on a map"
                className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
                Photography
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Light, Collected</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                Field notes on learning to see when the light is thinning.
              </p>
              <div className="text-stone-500 text-xs flex items-center gap-3">
                <img
                  src="https://picsum.photos/40?random=15"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <time dateTime="2024-04-10">Apr 10, 2024</time>
                <span aria-hidden="true">•</span>
                <span>3 min read</span>
              </div>
            </div>
          </article>

          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=6"
                alt="Backpack on a forest trail"
                className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
                Travel
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Pack Light, Notice More</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                How leaving things behind opens room for wonder.
              </p>
              <div className="text-stone-500 text-xs flex items-center gap-3">
                <img
                  src="https://picsum.photos/40?random=16"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <time dateTime="2024-04-08">Apr 8, 2024</time>
                <span aria-hidden="true">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </article>

          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=7"
                alt="Cinema seats in a dim theater"
                className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
                Movies
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Frames That Linger</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">On the long afterglow of a single scene.</p>
              <div className="text-stone-500 text-xs flex items-center gap-3">
                <img
                  src="https://picsum.photos/40?random=17"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <time dateTime="2024-04-02">Apr 2, 2024</time>
                <span aria-hidden="true">•</span>
                <span>4 min read</span>
              </div>
            </div>
          </article>

          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=8"
                alt="Coffee mug with fogged window in background"
                className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
                Essay
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Weather For One</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">Small forecasts for quiet mornings.</p>
              <div className="text-stone-500 text-xs flex items-center gap-3">
                <img
                  src="https://picsum.photos/40?random=18"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <time dateTime="2024-03-28">Mar 28, 2024</time>
                <span aria-hidden="true">•</span>
                <span>3 min read</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Inline gallery */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <h2 className="font-bold text-xl mb-4">Field Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <figure className="rounded border border-stone-200 dark:border-stone-800 overflow-hidden">
            <img
              src="https://picsum.photos/600?random=21"
              alt="Square photo of alpine lake"
              className="w-full h-48 object-cover"
            />
            <figcaption className="text-center text-sm text-stone-600 dark:text-stone-400 py-2">
              Alpine mirror
            </figcaption>
          </figure>
          <figure className="rounded border border-stone-200 dark:border-stone-800 overflow-hidden">
            <img
              src="https://picsum.photos/600?random=22"
              alt="Square photo of city street in rain"
              className="w-full h-48 object-cover"
            />
            <figcaption className="text-center text-sm text-stone-600 dark:text-stone-400 py-2">City rain</figcaption>
          </figure>
          <figure className="rounded border border-stone-200 dark:border-stone-800 overflow-hidden">
            <img
              src="https://picsum.photos/600?random=23"
              alt="Square photo of dunes at sunset"
              className="w-full h-48 object-cover"
            />
            <figcaption className="text-center text-sm text-stone-600 dark:text-stone-400 py-2">Dune light</figcaption>
          </figure>
        </div>
      </section>

      {/* Reviews section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=24"
                alt="Hardcover book on linen cloth"
                className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
                Review
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">A Quiet Ledger</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">A book that keeps score of absence and return.</p>
              <p className="text-stone-600 dark:text-stone-400">Verdict: spare, lucid, essential.</p>
            </div>
          </article>
          <article className="group rounded border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=25"
                alt="Film reel on rustic table"
                className="w-full h-44 md:h-52 object-cover rounded-t group-hover:scale-105 transition"
              />
              <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 absolute top-2 left-2">
                Review
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Grain and Shadow</h3>
              <p className="text-stone-600 dark:text-stone-400 mb-3">
                A film that understands the patience of weather.
              </p>
              <p className="text-stone-600 dark:text-stone-400">Verdict: generous, lingering, humane.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Sidebar section */}
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
              <p className="text-stone-600 dark:text-stone-400">Walking the treeline where storms collect.</p>
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
              We’re celebrating small forms—haiku weather, postcard essays, and one-roll photo walks.
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

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-8">
        <div className="rounded border border-stone-200 dark:border-stone-800 p-6 text-center">
          <h2 className="font-bold text-xl mb-2">Get the newsletter</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">Monthly highlights and occasional postcards.</p>
          <form action="#" method="post" className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Pagination */}
      <nav aria-label="Pagination" className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <ul className="flex items-center justify-center gap-2 text-sm">
          <li>
            <a
              href="#"
              className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
