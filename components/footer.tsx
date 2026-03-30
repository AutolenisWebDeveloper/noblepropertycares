import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white" role="contentinfo" aria-label="Site Footer">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* CTA and Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to enhance your property's value and appeal?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200">
              Contact us today for a free consultation and customized service plan.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Contact%20Us-oQcwpst9XKNAoTWS1kcGTu2k5SSLBs.png"
              alt="Customer service representative ready to assist with property maintenance inquiries"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-8 border-t border-gray-700">
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="Noble Property Care - Home">
              <span className="text-xl sm:text-2xl font-bold">Noble Property Care</span>
            </Link>
            <p className="mt-4 text-sm sm:text-base">
              Your trusted partner in rental property landscaping and commercial property maintenance services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer Navigation - Quick Links">
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link href="/" className="hover:text-gray-300 transition-colors inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300 transition-colors inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-300 transition-colors inline-block">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/request-service" className="hover:text-gray-300 transition-colors inline-block">
                    Request Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300 transition-colors inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <nav aria-label="Footer Navigation - Services">
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link href="/services#landscaping" className="hover:text-gray-300 transition-colors inline-block">
                    Rental Property Landscaping
                  </Link>
                </li>
                <li>
                  <Link href="/services#maintenance" className="hover:text-gray-300 transition-colors inline-block">
                    Commercial Property Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/services#cleaning" className="hover:text-gray-300 transition-colors inline-block">
                    Janitorial & Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services#residential" className="hover:text-gray-300 transition-colors inline-block">
                    Residential Property Maintenance
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-gray-300 mt-1" aria-hidden="true" />
                <span>3280 Lake Worth Rd #2, Lake Worth, FL 33461</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                <a href="tel:+19548167872" className="hover:underline transition-colors">
                  +1 954-816-7872
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                <a href="mailto:frantz@noblepropertycares.com" className="hover:underline transition-colors break-all">
                  frantz@noblepropertycares.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-sm">&copy; {currentYear} Noble Property Care LLC. All rights reserved.</p>
          <p className="text-center text-sm mt-2">
            Website developed by{" "}
            <a
              href="https://protecwiseweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="Visit ProtecWise Web, opens in a new tab"
            >
              ProtecWise Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
