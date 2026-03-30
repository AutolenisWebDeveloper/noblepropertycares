import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer role="contentinfo" aria-label="Site Footer">
      {/* CTA Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4">Get Started</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to elevate your property?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Contact us for a complimentary consultation and customized service plan tailored to your property.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-medium">
                <Link href="/request-service">
                  Request Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-lg font-medium">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-navy-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4" aria-label="Noble Property Care - Home">
                <span className="text-lg font-semibold tracking-tight">Noble Property Care</span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your trusted partner in rental property landscaping and commercial property maintenance. Licensed, insured, and committed to excellence.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    aria-label={`Follow us on ${label}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Company</h3>
              <nav aria-label="Footer Navigation - Quick Links">
                <ul className="space-y-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Us" },
                    { href: "/services", label: "Services" },
                    { href: "/blog", label: "Insights" },
                    { href: "/contact", label: "Contact" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Services</h3>
              <nav aria-label="Footer Navigation - Services">
                <ul className="space-y-3">
                  {[
                    { href: "/services#landscaping", label: "Property Landscaping" },
                    { href: "/services#maintenance", label: "Commercial Maintenance" },
                    { href: "/services#cleaning", label: "Janitorial & Cleaning" },
                    { href: "/services#residential", label: "Residential Maintenance" },
                    { href: "/request-service", label: "Request a Quote" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-slate-500 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-slate-400">11987 Southern Blvd. #1064, Royal Palm Beach, FL 33411</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-slate-500" aria-hidden="true" />
                  <a href="tel:+19548167872" className="text-sm text-slate-400 hover:text-white transition-colors">
                    +1 954-816-7872
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0 text-slate-500" aria-hidden="true" />
                  <a href="mailto:frantz@noblepropertycares.com" className="text-sm text-slate-400 hover:text-white transition-colors break-all">
                    frantz@noblepropertycares.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-500">&copy; {currentYear} Noble Property Care LLC. All rights reserved.</p>
              <p className="text-xs text-slate-500">
                Website by{" "}
                <a
                  href="https://protecwiseweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-300 transition-colors"
                  aria-label="Visit ProtecWise Web, opens in a new tab"
                >
                  ProtecWise Web
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
