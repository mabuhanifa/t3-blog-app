import { FilterBar } from "@/components/filter-bar"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"

export const metadata = {
  title: "North Blog — Books",
  description: "Books at North Blog: reading notes, reviews, and recommendations.",
}

const posts = [
  {
    label: "Books",
    image: "https://picsum.photos/800/600?random=201",
    imageAlt: "Stack of tattered books with ribbon",
    title: "Shelf Life",
    description: "What our shelves say when we’re not there to answer.",
    avatar: "https://picsum.photos/40?random=211",
    dateISO: "2024-05-09",
    dateText: "May 9, 2024",
    readTime: "5 min read",
  },
  {
    label: "Books",
    image: "https://picsum.photos/800/600?random=202",
    imageAlt: "Open book with pressed leaf",
    title: "Pressed Leaves",
    description: "Reading as the practice of keeping seasons.",
    avatar: "https://picsum.photos/40?random=212",
    dateISO: "2024-04-30",
    dateText: "Apr 30, 2024",
    readTime: "6 min read",
  },
  {
    label: "Books",
    image: "https://picsum.photos/800/600?random=203",
    imageAlt: "Books on a windowsill with rain",
    title: "Sill Reading",
    description: "Rainlight and marginalia as co-authors.",
    avatar: "https://picsum.photos/40?random=213",
    dateISO: "2024-04-24",
    dateText: "Apr 24, 2024",
    readTime: "4 min read",
  },
  {
    label: "Books",
    image: "https://picsum.photos/800/600?random=204",
    imageAlt: "Close photo of bookmark and pencil",
    title: "Bookmark Algebra",
    description: "How to keep place in sprawling stories.",
    avatar: "https://picsum.photos/40?random=214",
    dateISO: "2024-04-18",
    dateText: "Apr 18, 2024",
    readTime: "7 min read",
  },
  {
    label: "Books",
    image: "https://picsum.photos/800/600?random=205",
    imageAlt: "Close shot of book spines",
    title: "Spine Signals",
    description: "Design that whispers where to start reading.",
    avatar: "https://picsum.photos/40?random=215",
    dateISO: "2024-04-10",
    dateText: "Apr 10, 2024",
    readTime: "5 min read",
  },
  {
    label: "Books",
    image: "https://picsum.photos/800/600?random=206",
    imageAlt: "Book with glasses and tea",
    title: "Tea with Endings",
    description: "Finishing a book without leaving it behind.",
    avatar: "https://picsum.photos/40?random=216",
    dateISO: "2024-04-02",
    dateText: "Apr 2, 2024",
    readTime: "6 min read",
  },
]

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            Books
          </span>
          <h2 className="text-2xl font-bold">Reading &amp; Reviews</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">
          Stacks, underlines, and the books that won’t leave us.
        </p>
      </div>

      <FilterBar />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <PostCard key={i} {...p} />
        ))}
      </section>

      <Pagination />
    </section>
  )
}
