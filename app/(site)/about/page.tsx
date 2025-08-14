export const metadata = {
  title: "North Blog — About",
  description: "About North Blog: who we are, our mission, and how to get in touch.",
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
            About
          </span>
          <h2 className="text-2xl font-bold">The idea of North</h2>
        </div>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
          North Blog is a small magazine about attention—writing, books, photography, travel, and the movies that keep
          us company. We publish slow, carefully edited pieces and a monthly letter from the editor.
        </p>
      </section>

      {/* Mission + Image */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <article className="md:col-span-2 rounded border border-stone-200 dark:border-stone-800 p-6">
            <h3 className="font-bold text-xl mb-3">Mission</h3>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              We believe in clear sentences, humane criticism, and pictures that breathe. Our beat is the ordinary:
              small rooms, long walks, secondhand bookstores, and the quiet rituals that scaffold a creative life.
            </p>
            <p className="text-stone-700 dark:text-stone-300">
              The site is independent and reader-supported. If you enjoy the work, consider subscribing to our
              newsletter or sharing a piece with a friend.
            </p>
          </article>
          <figure className="rounded border border-stone-200 dark:border-stone-800 overflow-hidden">
            <img
              src="https://picsum.photos/800/900?random=701"
              alt="Desk by a north-facing window with notebook and camera"
              className="w-full h-64 md:h-full object-cover"
            />
            <figcaption className="text-xs text-stone-500 p-3">North-facing window, afternoon light.</figcaption>
          </figure>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <h3 className="font-bold text-xl mb-4">Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: "https://picsum.photos/96?random=711",
              name: "Lina Frost",
              role: "Editor-in-Chief",
              desc: "Essays on attention, letters from the desk, and the occasional field guide.",
            },
            {
              img: "https://picsum.photos/96?random=712",
              name: "Rafi Noor",
              role: "Photography Editor",
              desc: "Cares about light, patience, and the stories between frames.",
            },
            {
              img: "https://picsum.photos/96?random=713",
              name: "Mara Issa",
              role: "Managing Editor",
              desc: "Keeps the calendar honest and the commas tidy.",
            },
          ].map((p) => (
            <article key={p.name} className="rounded border border-stone-200 dark:border-stone-800 p-5">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={p.img || "/placeholder.svg"}
                  alt={`Portrait of ${p.role.toLowerCase()}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{p.name}</h4>
                  <p className="text-xs text-stone-500">{p.role}</p>
                </div>
              </div>
              <p className="text-sm text-stone-700 dark:text-stone-300">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact + Newsletter */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded border border-stone-200 dark:border-stone-800 p-6">
            <h3 className="font-bold text-xl mb-3">Contact</h3>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              Send pitches, letters, and tip-offs. We read everything.
            </p>
            <form action="#" method="post" className="space-y-3">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <button
                type="submit"
                className="rounded px-3 py-2 bg-stone-900 text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Send
              </button>
            </form>
          </article>

          <aside className="md:col-span-2 rounded border border-stone-200 dark:border-stone-800 p-6">
            <h3 className="font-bold text-xl mb-3">Newsletter</h3>
            <p className="text-stone-700 dark:text-stone-300 mb-4">
              Monthly highlights and occasional postcards. No spam, ever.
            </p>
            <form action="#" method="post" className="max-w-lg flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
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
            <p className="text-xs text-stone-500 mt-3">We use double opt-in. Unsubscribe anytime.</p>
          </aside>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <h3 className="font-bold text-xl mb-4">FAQs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Do you accept guest posts?",
              a: "Yes. We welcome pitches that fit our sections—Writing, Books, Photography, Travel, and Movies.",
            },
            {
              q: "Can I advertise?",
              a: "We offer tasteful, well-labeled sponsorships. Get in touch for our media kit.",
            },
            {
              q: "Photo usage",
              a: "Please request permission before reusing images. We’re happy to help with credits.",
            },
            {
              q: "Support the site",
              a: "Share our work, subscribe to the newsletter, or sponsor an issue.",
            },
          ].map((item) => (
            <article key={item.q} className="rounded border border-stone-200 dark:border-stone-800 p-5">
              <h4 className="font-semibold mb-1">{item.q}</h4>
              <p className="text-sm text-stone-700 dark:text-stone-300">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
