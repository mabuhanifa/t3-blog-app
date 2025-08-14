import { FilterBar } from "@/components/filter-bar"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"

export const metadata = {
  title: "North Blog — Photography",
  description: "Photography at North Blog: images, field notes, and gear talk.",
}

const posts = [
  {
    label: "Photography",
    image: "https://picsum.photos/800/600?random=301",
    imageAlt: "Camera on trail overlooking valley",
    title: "Meter by Ear",
    description: "Trusting your eye when the meter lies.",
    avatar: "https://picsum.photos/40?random=311",
    dateISO: "2024-05-08",
    dateText: "May 8, 2024",
    readTime: "5 min read",
  },
  {
    label: "Photography",
    image: "https://picsum.photos/800/600?random=302",
    imageAlt: "Night street with neon reflections",
    title: "Neon Rain",
    description: "Shooting color when the night is all glass.",
    avatar: "https://picsum.photos/40?random=312",
    dateISO: "2024-04-29",
    dateText: "Apr 29, 2024",
    readTime: "6 min read",
  },
  {
    label: "Photography",
    image: "https://picsum.photos/800/600?random=303",
    imageAlt: "Macro of leaf veins",
    title: "Close Enough",
    description: "When macro turns the ordinary into maps.",
    avatar: "https://picsum.photos/40?random=313",
    dateISO: "2024-04-22",
    dateText: "Apr 22, 2024",
    readTime: "4 min read",
  },
  {
    label: "Photography",
    image: "https://picsum.photos/800/600?random=304",
    imageAlt: "Snowy mountain under stars",
    title: "Cold Stars",
    description: "Astro tips for thin air and thick gloves.",
    avatar: "https://picsum.photos/40?random=314",
    dateISO: "2024-04-16",
    dateText: "Apr 16, 2024",
    readTime: "8 min read",
  },
  {
    label: "Photography",
    image: "https://picsum.photos/800/600?random=305",
    imageAlt: "Portrait in window light",
    title: "Window North",
    description: "Portraits that keep the quiet in the room.",
    avatar: "https://picsum.photos/40?random=315",
    dateISO: "2024-04-08",
    dateText: "Apr 8, 2024",
    readTime: "5 min read",
  },
  {
    label: "Photography",
    image: "https://picsum.photos/800/600?random=306",
    imageAlt: "Foggy street with lone cyclist",
    title: "Weather Stories",
    description: "How fog edits the city into prose.",
    avatar: "https://picsum.photos/40?random=316",
    dateISO: "2024-03-30",
    dateText: "Mar 30, 2024",
    readTime: "6 min read",
  },
]

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            Photography
          </span>
          <h2 className="text-2xl font-bold">Frames &amp; Field Notes</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">
          Light, lenses, and the stories we carry between exposures.
        </p>
      </div>

      <FilterBar />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {posts.map((p, i) => (
          <PostCard key={i} {...p} />
        ))}
      </section>

      {/* Gallery strip */}
      <section aria-label="Gallery strip" className="mb-10">
        <h3 className="font-bold mb-3">Contact Sheets</h3>
        <div className="flex overflow-x-auto whitespace-nowrap gap-3 py-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/240?random=${331 + i}`}
              alt={`Gallery thumbnail ${i + 1}`}
              className="inline-block w-40 h-28 object-cover rounded"
            />
          ))}
        </div>
      </section>

      <Pagination />
    </section>
  )
}
