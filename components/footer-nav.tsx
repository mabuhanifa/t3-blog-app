"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerItems = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/books", label: "Books" },
  { href: "/photography", label: "Photography" },
  { href: "/travel", label: "Travel" },
  { href: "/movies", label: "Movies" },
  { href: "/about", label: "About" },
];

export function FooterNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-center gap-4 mb-4">
      {footerItems.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm",
              active && "text-emerald-600"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
