import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-200">
      <SiteHeader />
      <main id="content">{children}</main>
      <SiteFooter />
    </div>
  )
}
