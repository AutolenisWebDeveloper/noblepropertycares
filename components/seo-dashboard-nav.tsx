"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart, FileText, Link2, PenTool, Search } from "lucide-react"

export function SEODashboardNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
      <Button
        variant={pathname === "/admin/analytics" ? "default" : "outline"}
        size="sm"
        className="flex items-center gap-2"
        asChild
      >
        <Link href="/admin/analytics">
          <BarChart className="h-4 w-4" />
          <span>Analytics</span>
        </Link>
      </Button>

      <Button
        variant={pathname === "/admin/seo-audit" ? "default" : "outline"}
        size="sm"
        className="flex items-center gap-2"
        asChild
      >
        <Link href="/admin/seo-audit">
          <Search className="h-4 w-4" />
          <span>SEO Audit</span>
        </Link>
      </Button>

      <Button
        variant={pathname === "/admin/backlinks" ? "default" : "outline"}
        size="sm"
        className="flex items-center gap-2"
        asChild
      >
        <Link href="/admin/backlinks">
          <Link2 className="h-4 w-4" />
          <span>Backlinks</span>
        </Link>
      </Button>

      <Button
        variant={pathname === "/blog" ? "default" : "outline"}
        size="sm"
        className="flex items-center gap-2"
        asChild
      >
        <Link href="/blog">
          <PenTool className="h-4 w-4" />
          <span>Blog</span>
        </Link>
      </Button>

      <Button
        variant={pathname === "/admin/seo-strategy" ? "default" : "outline"}
        size="sm"
        className="flex items-center gap-2"
        asChild
      >
        <Link href="/SEO-STRATEGY.md" target="_blank">
          <FileText className="h-4 w-4" />
          <span>SEO Strategy</span>
        </Link>
      </Button>
    </div>
  )
}
