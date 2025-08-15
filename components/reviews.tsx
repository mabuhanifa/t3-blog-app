export default function Reviews() {
  return (
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
            <p className="text-stone-600 dark:text-stone-400 mb-3">
              A book that keeps score of absence and return.
            </p>
            <p className="text-stone-600 dark:text-stone-400">
              Verdict: spare, lucid, essential.
            </p>
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
            <p className="text-stone-600 dark:text-stone-400">
              Verdict: generous, lingering, humane.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
