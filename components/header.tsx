"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
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

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  // Handle escape key to close menu
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
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="Noble Property Care - Home">
              <div className="relative w-[200px] h-[50px] mr-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_NoblePropertyCare_Landscaping_Logo_BusineeCard_Back.jpg-rSvKsx1uPxb0gBYsbozpJiyYTILIWG.jpeg"
                  alt="Noble Property Care LLC Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6" aria-label="Main Navigation">
            <Link
              href="/"
              className="text-sm lg:text-base text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm lg:text-base text-gray-700 hover:text-primary font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm lg:text-base text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/request-service"
              className="text-sm lg:text-base text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="text-sm lg:text-base text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
            <Button
              className="bg-primary hover:bg-primary/90 text-white text-sm lg:text-base flex items-center gap-2"
              asChild
            >
              <a href="tel:+19548167872" aria-label="Call us at 954-816-7872">
                <Phone size={16} aria-hidden="true" />
                <span className="hidden xl:inline">954-816-7872</span>
              </a>
            </Button>
          </nav>

          <div className="md:hidden flex items-center">
            <Button
              ref={buttonRef}
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden mobile-menu"
          id="mobile-menu"
          ref={menuRef}
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/request-service"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
                asChild
              >
                <a href="tel:+19548167872" aria-label="Call us at 954-816-7872">
                  <Phone size={16} aria-hidden="true" />
                  <span>954-816-7872</span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
