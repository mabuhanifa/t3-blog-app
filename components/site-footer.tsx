"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const footerItems = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/books", label: "Books" },
  { href: "/photography", label: "Photography" },
  { href: "/travel", label: "Travel" },
  { href: "/movies", label: "Movies" },
  { href: "/about", label: "About" },
]

export function SiteFooter() {
  const pathname = usePathname()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-xs text-stone-500">
        <nav className="flex flex-wrap items-center justify-center gap-4 mb-4">
          {footerItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm",
                  active && "text-emerald-600",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <p className="text-center mb-6">
          {"© "}
          <span>{year}</span> {" North Blog. All rights reserved."}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          <img
            src="https://picsum.photos/300?random=41"
            alt="Footer thumbnail 1"
            className="w-full h-20 object-cover rounded"
          />
          <img
            src="https://picsum.photos/300?random=42"
            alt="Footer thumbnail 2"
            className="w-full h-20 object-cover rounded"
          />
          <img
            src="https://picsum.photos/300?random=43"
            alt="Footer thumbnail 3"
            className="w-full h-20 object-cover rounded"
          />
          <img
            src="https://picsum.photos/300?random=44"
            alt="Footer thumbnail 4"
            className="w-full h-20 object-cover rounded"
          />
          <img
            src="https://picsum.photos/300?random=45"
            alt="Footer thumbnail 5"
            className="w-full h-20 object-cover rounded"
          />
          <img
            src="https://picsum.photos/300?random=46"
            alt="Footer thumbnail 6"
            className="w-full h-20 object-cover rounded"
          />
        </div>
      </div>
    </footer>
  )
}
