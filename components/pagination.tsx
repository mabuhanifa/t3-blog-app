export function Pagination() {
  return (
    <nav aria-label="Pagination" className="mt-10">
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
  )
}
