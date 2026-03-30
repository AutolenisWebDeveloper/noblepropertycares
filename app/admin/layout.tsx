import type React from "react"
import { SEODashboardNav } from "@/components/seo-dashboard-nav"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">SEO Management Dashboard</h1>
      <p className="text-gray-600 mb-8">Monitor and optimize your website's search engine performance</p>

      <SEODashboardNav />

      {children}
    </div>
  )
}
