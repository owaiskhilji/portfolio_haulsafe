"use client";

import HeroSection from "@/components/Home/HeroSection";
import PaymentPlanSection from "@/components/Home/PaymentPlanSection";
import ProblemSection from "@/components/Home/ProblemSolutionSection";
import RoadmapSection from "@/components/Home/RoadmapSection";
import VehicleInsuranceSection from "@/components/Home/VehicleInsuranceSection";
import ServicesGridSection from "@/components/Home/ServicesGridSection";
import CTASection from "@/components/Home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
       <HeroSection />
      <PaymentPlanSection />
      <ProblemSection />
      <RoadmapSection />
      <VehicleInsuranceSection /> 
      <ServicesGridSection />
      <CTASection />
    </div>
  );
}
