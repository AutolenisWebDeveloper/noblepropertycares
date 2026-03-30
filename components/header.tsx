"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscKey)
    return () => document.removeEventListener("keydown", handleEscKey)
  }, [isMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgb(0_0_0/0.05)] border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Noble Property Care - Home">
            <div className="relative w-[180px] h-[44px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_NoblePropertyCare_Landscaping_Logo_BusineeCard_Back.jpg-rSvKsx1uPxb0gBYsbozpJiyYTILIWG.jpeg"
                alt="Noble Property Care LLC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-foreground rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+19548167872"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-foreground transition-colors"
              aria-label="Call us at 954-816-7872"
            >
              <Phone size={15} aria-hidden="true" />
              <span>954-816-7872</span>
            </a>
            <Button asChild size="sm" className="h-9 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg">
              <Link href="/request-service">
                Request Service
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Button
              ref={buttonRef}
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="h-9 w-9"
            >
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden border-t border-slate-100"
          id="mobile-menu"
          ref={menuRef}
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <nav className="px-4 py-3 bg-white">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-foreground hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
              <a
                href="tel:+19548167872"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-600"
                aria-label="Call us at 954-816-7872"
              >
                <Phone size={15} aria-hidden="true" />
                <span>954-816-7872</span>
              </a>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg">
                <Link href="/request-service" onClick={() => setIsMenuOpen(false)}>
                  Request Service
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
