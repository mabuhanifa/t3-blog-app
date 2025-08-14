export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <button className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
        All
      </button>
      <button className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
        Latest
      </button>
      <button className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
        Popular
      </button>
      <button className="rounded px-3 py-2 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
        Featured
      </button>
    </div>
  )
}
