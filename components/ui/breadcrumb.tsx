"use client"

import type React from "react"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-sm">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link href="/" className="text-gray-500 hover:text-primary transition-colors flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.label} className="flex items-center">
              {isLast ? (
                <span className="font-medium text-primary" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href || "#"} className="text-gray-500 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function BreadcrumbList({ children }: { children: React.ReactNode }) {
  return <ol className="flex items-center flex-wrap">{children}</ol>
}

export function BreadcrumbItem({ children, isCurrentPage }: { children: React.ReactNode; isCurrentPage?: boolean }) {
  return <li className="flex items-center">{children}</li>
}

export function BreadcrumbLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <>
      <Link href={href} className="text-gray-500 hover:text-primary transition-colors">
        {children}
      </Link>
    </>
  )
}

export function BreadcrumbPage({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium text-primary" aria-current="page">
      {children}
    </span>
  )
}

export function BreadcrumbSeparator() {
  return <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
}

export function BreadcrumbEllipsis() {
  return <span className="mx-2 text-gray-400">...</span>
}
