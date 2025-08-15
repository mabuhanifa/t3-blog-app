export default function InlineGallery() {
  return (
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
          <figcaption className="text-center text-sm text-stone-600 dark:text-stone-400 py-2">
            City rain
          </figcaption>
        </figure>
        <figure className="rounded border border-stone-200 dark:border-stone-800 overflow-hidden">
          <img
            src="https://picsum.photos/600?random=23"
            alt="Square photo of dunes at sunset"
            className="w-full h-48 object-cover"
          />
          <figcaption className="text-center text-sm text-stone-600 dark:text-stone-400 py-2">
            Dune light
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
