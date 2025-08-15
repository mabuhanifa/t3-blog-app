export default function Cluster() {
  return (
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
            <p className="text-stone-600 dark:text-stone-400 mb-3">
              On the long afterglow of a single scene.
            </p>
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
            <p className="text-stone-600 dark:text-stone-400 mb-3">
              Small forecasts for quiet mornings.
            </p>
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
  );
}
