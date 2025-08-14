import { FilterBar } from "@/components/filter-bar"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"

export const metadata = {
  title: "North Blog — Movies",
  description: "Movies at North Blog: reviews, frames, and film notes.",
}

const posts = [
  {
    label: "Movies",
    image: "https://picsum.photos/800/600?random=501",
    imageAlt: "Cinema screen glowing in dark theater",
    title: "Afterlight",
    description: "A study of endings that don’t end.",
    avatar: "https://picsum.photos/40?random=511",
    dateISO: "2024-05-11",
    dateText: "May 11, 2024",
    readTime: "6 min read",
  },
  {
    label: "Movies",
    image: "https://picsum.photos/800/600?random=502",
    imageAlt: "Neon-lit street scene at night",
    title: "Midnight Maps",
    description: "City stories told by reflections and rain.",
    avatar: "https://picsum.photos/40?random=512",
    dateISO: "2024-05-01",
    dateText: "May 1, 2024",
    readTime: "5 min read",
  },
  {
    label: "Movies",
    image: "https://picsum.photos/800/600?random=503",
    imageAlt: "Old film reel on table",
    title: "Grain Theory",
    description: "Why texture still matters in a smooth world.",
    avatar: "https://picsum.photos/40?random=513",
    dateISO: "2024-04-24",
    dateText: "Apr 24, 2024",
    readTime: "7 min read",
  },
  {
    label: "Movies",
    image: "https://picsum.photos/800/600?random=504",
    imageAlt: "Projector light beam in dust",
    title: "Dust & Light",
    description: "Projection as ritual, not just playback.",
    avatar: "https://picsum.photos/40?random=514",
    dateISO: "2024-04-17",
    dateText: "Apr 17, 2024",
    readTime: "4 min read",
  },
  {
    label: "Movies",
    image: "https://picsum.photos/800/600?random=505",
    imageAlt: "Close-up of clapperboard",
    title: "Scene, Set",
    description: "On the quiet leadership of a good slate.",
    avatar: "https://picsum.photos/40?random=515",
    dateISO: "2024-04-11",
    dateText: "Apr 11, 2024",
    readTime: "5 min read",
  },
  {
    label: "Movies",
    image: "https://picsum.photos/800/600?random=506",
    imageAlt: "Empty theater seats",
    title: "Quiet Audience",
    description: "Why silence is the best special effect.",
    avatar: "https://picsum.photos/40?random=516",
    dateISO: "2024-04-03",
    dateText: "Apr 3, 2024",
    readTime: "6 min read",
  },
]

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            Movies
          </span>
          <h2 className="text-2xl font-bold">Reviews &amp; Film Notes</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 mt-2">
          Frames that linger, soundtracks that haunt, and scenes we carry home.
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
