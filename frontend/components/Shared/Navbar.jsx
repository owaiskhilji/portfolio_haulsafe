"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Mail, ChevronDown, Menu, X } from "lucide-react";
import { servicesData } from "@/constants/servicesData";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Group services by category
  const groupedServices = servicesData.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <>
      {/* Top Bar - Shows phone on mobile, full info on desktop */}
      <div className="bg-primary h-10">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full text-white text-xs">
            <div className="flex items-center gap-4">
              {/* Mobile: Email icon only */}
              <Link
                href="mailto:haulsafeinsurance@gmail.com"
                className="md:hidden flex items-center justify-center w-8 h-8 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </Link>

              {/* Desktop: Email only */}
              <Link
                href="mailto:haulsafeinsurance@gmail.com"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
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
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="HaulSafe Logo"
                className="h-32 w-32 md:w-44 md:h-44 object-contain relative right-6 md:right-0 top-2 md:top-2"
              />
              <div className="flex flex-col justify-center relative right-14 md:right-10">
                <span className="text-lg md:text-xl font-bold text-primary leading-tight">
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

              {/* Services Dropdown - Click to Toggle */}
              <div className="relative" ref={servicesRef}>
                <button
                  className="flex items-center gap-1 text-primary font-semibold hover:text-secondary transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 border max-h-[70vh] overflow-y-auto z-50">
                    {Object.entries(groupedServices).map(([category, items]) => (
                      <div key={category} className="mb-2">
                        <div className="px-4 py-2 text-xs font-bold text-secondary uppercase tracking-wide bg-accent">
                          {category}
                        </div>
                        {items.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2 text-sm text-primary hover:bg-accent hover:text-secondary transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

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
                  <div className="pl-4 mt-2 space-y-3 border-l-2 border-secondary max-h-96 overflow-y-auto">
                    {Object.entries(groupedServices).map(([category, items]) => (
                      <div key={category}>
                        <div className="text-xs font-bold text-secondary uppercase tracking-wide py-1">
                          {category}
                        </div>
                        {items.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block text-primary hover:text-secondary transition-colors py-1.5 text-sm"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

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