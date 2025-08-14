"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname.startsWith(href)
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/books", label: "Books" },
  { href: "/photography", label: "Photography" },
  { href: "/travel", label: "Travel" },
  { href: "/movies", label: "Movies" },
  { href: "/about", label: "About" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header>
      {/* Top utility bar */}
      <div className="bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-400 text-xs">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between py-2">
          <nav aria-label="Utility" className="flex gap-4">
            <Link
              href="/about"
              className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
            >
              Advertise
            </Link>
          </nav>
          <nav aria-label="Social" className="flex gap-4">
            <Link
              href="#"
              className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
            >
              RSS
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
            >
              Instagram
            </Link>
          </nav>
          {/* Spacer and Theme toggle on the far right */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <h1 className="text-3xl font-bold text-center tracking-tight">North Blog</h1>
          <nav aria-label="Primary" className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm",
                    active && "text-emerald-600 border-b-2 border-emerald-600",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
