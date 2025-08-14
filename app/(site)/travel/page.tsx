import { FilterBar } from "@/components/filter-bar"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"

export const metadata = {
  title: "North Blog — Travel",
  description: "Travel at North Blog: field guides, routes, and slow itineraries.",
}

const posts = [
  {
    label: "Travel",
    image: "https://picsum.photos/800/600?random=401",
    imageAlt: "Clover path through meadow",
    title: "Meadow Ways",
    description: "A footpath between hedgerows and timekeeping cows.",
    avatar: "https://picsum.photos/40?random=411",
    dateISO: "2024-05-07",
    dateText: "May 7, 2024",
    readTime: "6 min read",
  },
  {
    label: "Travel",
    image: "https://picsum.photos/800/600?random=402",
    imageAlt: "Coastal footpath with lighthouse",
    title: "Lighthouse Loop",
    description: "A two-day circuit with gulls and sudden fog.",
    avatar: "https://picsum.photos/40?random=412",
    dateISO: "2024-04-27",
    dateText: "Apr 27, 2024",
    readTime: "5 min read",
  },
  {
    label: "Travel",
    image: "https://picsum.photos/800/600?random=403",
    imageAlt: "Map and a compass on wood",
    title: "Compass Grammar",
    description: "Finding bearings when the trail says “maybe.”",
    avatar: "https://picsum.photos/40?random=413",
    dateISO: "2024-04-20",
    dateText: "Apr 20, 2024",
    readTime: "7 min read",
  },
  {
    label: "Travel",
    image: "https://picsum.photos/800/600?random=404",
    imageAlt: "Train window looking over fields",
    title: "Rail North",
    description: "Notes on the art of the train window itinerary.",
    avatar: "https://picsum.photos/40?random=414",
    dateISO: "2024-04-12",
    dateText: "Apr 12, 2024",
    readTime: "4 min read",
  },
  {
    label: "Travel",
    image: "https://picsum.photos/800/600?random=405",
    imageAlt: "Backpack on a ridge",
    title: "Carry Less",
    description: "Packing lists that prioritize attention over gear.",
    avatar: "https://picsum.photos/40?random=415",
    dateISO: "2024-04-06",
    dateText: "Apr 6, 2024",
    readTime: "5 min read",
  },
  {
    label: "Travel",
    image: "https://picsum.photos/800/600?random=406",
    imageAlt: "City alley with morning light",
    title: "Alley Atlas",
    description: "Urban rambling and the geometry of detours.",
    avatar: "https://picsum.photos/40?random=416",
    dateISO: "2024-03-29",
    dateText: "Mar 29, 2024",
    readTime: "6 min read",
  },
]

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            Travel
          </span>
          <h2 className="text-2xl font-bold">Routes &amp; Field Guides</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">
          Slow itineraries, foot routes, and weather-tested tips.
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
