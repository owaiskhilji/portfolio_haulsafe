"use client";

import PrivacyHero from "@/components/Privacy/PrivacyHero";
import PrivacyContent from "@/components/Privacy/PrivacyContent";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#FDFCF0]">
      {/* Hero Section */}
      <PrivacyHero />

      {/* Main Privacy Policy Content */}
      <PrivacyContent />
    </div>
  );
}
