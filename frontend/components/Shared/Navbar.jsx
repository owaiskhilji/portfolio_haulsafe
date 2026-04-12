"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const serviceCategories = [
    {
      category: "Insurance",
      services: [
        { name: "Vehicle Insurance", slug: "vehicle-insurance" },
        { name: "Truck General Liability", slug: "truck-general-liability" },
        { name: "Professional Liability", slug: "professional-liability" },
        { name: "Commercial Auto", slug: "commercial-auto" },
      ],
    },
    {
      category: "Authority & Compliance",
      services: [
        { name: "USDOT Number", slug: "usdot-number" },
        { name: "MC Number", slug: "mc-number" },
        { name: "BOC-3 Filing", slug: "boc3-filing" },
        { name: "UCR Registration", slug: "ucr-registration" },
      ],
    },
    {
      category: "Business Formation",
      services: [
        { name: "LLC Formation", slug: "llc-formation" },
        { name: "EIN Tax ID", slug: "ein-tax-id" },
        { name: "BOI Report", slug: "boi-report" },
      ],
    },
    {
      category: "Tax Services",
      services: [
        { name: "Tax Return", slug: "tax-return" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar - Shows phone on mobile, full info on desktop */}
      <div className="bg-primary h-10">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full text-white text-xs">
            <div className="flex items-center gap-4">
              {/* Mobile: Icons only */}
              <Link
                href="tel:+923100000000"
                className="md:hidden flex items-center justify-center w-8 h-8 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="md:hidden flex items-center justify-center w-8 h-8 hover:text-secondary transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:haulsafeinsurance@gmail.com"
                className="md:hidden flex items-center justify-center w-8 h-8 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </Link>

              {/* Desktop: Full info */}
              <Link
                href="tel:+923100000000"
                className="hidden md:flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>+923100000000</span>
              </Link>
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>abc home city country</span>
              </div>
              <Link
                href="mailto:haulsafeinsurance@gmail.com"
                className="hidden md:flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>haulsafeinsurance@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav - Sticky */}
      <nav className="bg-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="HaulSafe Logo"
                className="h-20 w-20 object-contain"
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-primary leading-tight">
                  HAULSAFE INSURANCE
                </span>
                <span className="text-xs text-[#D4AF37]">
                  PROTECTION YOU CAN TRUST
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="group relative"
              >
                <button className="flex items-center gap-1 text-primary font-semibold hover:text-secondary transition-colors py-8">
                  <span>Services</span>
                  <ChevronDown
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                  />
                </button>

                <div className="absolute top-full left-0 -mt-2 w-72 bg-white rounded-lg shadow-xl py-2 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-96 overflow-y-auto">
                  {serviceCategories.map((category) => (
                    <div key={category.category} className="mb-2">
                      <div className="px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {category.category}
                      </div>
                      {category.services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2 text-primary hover:bg-accent hover:text-secondary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* <Link
                href="/referral"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                Referral
              </Link> */}

              <Link
                href="/contact"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>

              {/* CTA Button */}
              <Link
                href="/quote"
                className="bg-secondary text-primary font-bold py-2.5 px-6 rounded-lg hover:bg-opacity-90 transition-all flex items-center"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block text-primary font-semibold hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-primary font-semibold hover:text-secondary transition-colors py-2"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-3 border-l-2 border-secondary">
                    {serviceCategories.map((category) => (
                      <div key={category.category}>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                          {category.category}
                        </div>
                        <div className="space-y-1">
                          {category.services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block text-primary hover:text-secondary transition-colors py-1.5"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/referral"
                className="block text-primary font-semibold hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Referral
              </Link>

              <Link
                href="/contact"
                className="block text-primary font-semibold hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="block text-primary font-semibold hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>

              {/* Mobile CTA Button */}
              <Link
                href="/quote"
                className="block bg-secondary text-primary font-bold py-3 px-6 rounded-lg text-center hover:bg-opacity-90 transition-all mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
