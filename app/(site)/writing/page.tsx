import { FilterBar } from "@/components/filter-bar"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"

export const metadata = {
  title: "North Blog — Writing",
  description: "Writing at North Blog: essays, notes, and drafts.",
}

const posts = [
  {
    label: "Writing",
    image: "https://picsum.photos/800/600?random=101",
    imageAlt: "Notebook with fountain pen",
    title: "Lines That Listen",
    description: "Tuning sentences to the room’s own weather.",
    avatar: "https://picsum.photos/40?random=111",
    dateISO: "2024-05-10",
    dateText: "May 10, 2024",
    readTime: "6 min read",
  },
  {
    label: "Writing",
    image: "https://picsum.photos/800/600?random=102",
    imageAlt: "Crumpled pages and a coffee cup",
    title: "On Refusal",
    description: "Saying no to the obvious draft to reach the necessary one.",
    avatar: "https://picsum.photos/40?random=112",
    dateISO: "2024-04-28",
    dateText: "Apr 28, 2024",
    readTime: "5 min read",
  },
  {
    label: "Writing",
    image: "https://picsum.photos/800/600?random=103",
    imageAlt: "Typewriter keys close-up",
    title: "Mechanical Sympathy",
    description: "Tools that teach us how to think with our hands.",
    avatar: "https://picsum.photos/40?random=113",
    dateISO: "2024-04-20",
    dateText: "Apr 20, 2024",
    readTime: "7 min read",
  },
  {
    label: "Writing",
    image: "https://picsum.photos/800/600?random=104",
    imageAlt: "Bookstore aisle perspective",
    title: "Aisle Nine",
    description: "Finding mentors in the stacks you shelve yourself.",
    avatar: "https://picsum.photos/40?random=114",
    dateISO: "2024-04-12",
    dateText: "Apr 12, 2024",
    readTime: "4 min read",
  },
  {
    label: "Writing",
    image: "https://picsum.photos/800/600?random=105",
    imageAlt: "Window light on writing desk",
    title: "Window Hours",
    description: "Keeping time with shadows on the desk.",
    avatar: "https://picsum.photos/40?random=115",
    dateISO: "2024-04-05",
    dateText: "Apr 5, 2024",
    readTime: "3 min read",
  },
  {
    label: "Writing",
    image: "https://picsum.photos/800/600?random=106",
    imageAlt: "Journal and wildflowers",
    title: "Wild Notes",
    description: "Indexing the field in pencil and dirt.",
    avatar: "https://picsum.photos/40?random=116",
    dateISO: "2024-03-28",
    dateText: "Mar 28, 2024",
    readTime: "5 min read",
  },
]

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      {/* Page hero */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            Writing
          </span>
          <h2 className="text-2xl font-bold">Latest in Writing</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">
          Essays and notes on craft, attention, and daily pages.
        </p>
      </div>

      <FilterBar />

      {/* Posts grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <PostCard key={i} {...p} />
        ))}
      </section>

      <Pagination />
    </section>
  )
}
