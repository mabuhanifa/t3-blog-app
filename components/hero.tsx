export default function Hero() {
  return (
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
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              In the North: Notes on Quiet Places
            </h3>
            <p className="text-stone-600 dark:text-stone-400 mb-3">
              An essay on seeking silence at the edges of maps and the rituals
              that help us listen.
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
            <h3 className="text-xl font-bold mb-2">
              Coastal Paths and Wind Maps
            </h3>
            <p className="text-stone-600 dark:text-stone-400 mb-3">
              Tracing the salt roads and the cartography of weather along the
              Atlantic fringe.
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
  );
}
