export default function Newsletter() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-8">
      <div className="rounded border border-stone-200 dark:border-stone-800 p-6 text-center">
        <h2 className="font-bold text-xl mb-2">Get the newsletter</h2>
        <p className="text-stone-600 dark:text-stone-400 mb-4">
          Monthly highlights and occasional postcards.
        </p>
        <form
          action="#"
          method="post"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
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
  );
}
