"use client";

import { 
  FileText, Users, Building2, Eye, Zap, Shield, 
  CheckCircle2, Share2, EyeOff, Clock, Trash2, 
  Edit, Mail, Check, Lock
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { type: "spring", stiffness: 50, damping: 15 },
};

export default function PrivacyContent() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 bg-[#FDFCF0]">
      {/* SECTION 1: Information We Collect */}
      <motion.div className="mb-20" {...fadeInUp}>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-[#D2BD69]/10 rounded-2xl flex items-center justify-center transform rotate-3">
            <FileText className="w-7 h-7 text-[#D2BD69]" />
          </div>
          <h2 className="text-3xl font-bold text-[#063B29]">
            Information We Collect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CollectCard 
            icon={<Users className="w-5 h-5" />} 
            title="Personal Info"
            items={["Full name", "Email address", "Phone number", "Driver's license", "Social Security Number"]}
          />
          <CollectCard 
            icon={<Building2 className="w-5 h-5" />} 
            title="Business Info"
            items={["Business name", "Business address", "EIN", "LLC documents", "Vehicle VIN"]}
          />
          <CollectCard 
            icon={<Eye className="w-5 h-5" />} 
            title="Preferences"
            items={["Insurance preferences", "Tax information", "Beneficial ownership info"]}
          />
        </div>
      </motion.div>

      {/* SECTION 2: How We Use Your Information */}
      <motion.div className="mb-20 bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-xl border border-gray-100" {...fadeInUp}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 bg-[#D2BD69]/10 rounded-2xl flex items-center justify-center -rotate-3">
            <Zap className="w-7 h-7 text-[#D2BD69]" />
          </div>
          <h2 className="text-3xl font-bold text-[#063B29]">
            How We Use Your Information
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <UseCard icon={<Building2 />} title="Business Setup" desc="Form LLCs and obtain EINs from the IRS" index={0} />
          <UseCard icon={<Shield />} title="Insurance Quotes" desc="Get the best quotes from GEICO & Progressive" index={1} />
          <UseCard icon={<CheckCircle2 />} title="Compliance" desc="File BOI reports, tax returns & process payments" index={2} />
          <UseCard icon={<FileText />} title="FMCSA Filings" desc="File USDOT, MC, BOC-3, UCR documents" index={3} />
        </div>
      </motion.div>

      {/* SECTION 3: Information Protection */}
      <motion.div className="mb-20 bg-[#063B29] rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden text-white" {...fadeInUp}>
        <div className="absolute top-0 right-0 p-10 opacity-5">
            <Shield className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-[#D2BD69]" />
            </div>
            <h2 className="text-3xl font-bold">Your Data is Fort Knox</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Encrypted, secure servers with 24/7 monitoring",
              "Restricted access (authorized HaulSafe team only)",
              "Military-grade SSL encryption on our platform",
              "Strict policy: We NEVER sell or rent your data",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-[#D2BD69] flex-shrink-0 mt-0.5" />
                <span className="font-medium text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: Information Sharing */}
      <motion.div className="mb-20" {...fadeInUp}>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-[#D2BD69]/10 rounded-2xl flex items-center justify-center rotate-6">
            <Users className="w-7 h-7 text-[#D2BD69]" />
          </div>
          <h2 className="text-3xl font-bold text-[#063B29]">Information Sharing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ShareCard 
            type="safe" 
            title="We Share With" 
            subtitle="Only when required for your services:"
            items={["GEICO & Progressive (Insurance)", "FMCSA, IRS, FinCEN (Compliance)", "State agencies & process agents"]}
          />
          <ShareCard 
            type="danger" 
            title="We NEVER Share With" 
            subtitle="Your data is always protected from:"
            items={["Marketing companies", "Third-party vendors", "Data brokers or advertisers"]}
          />
        </div>
      </motion.div>

      {/* SECTION 5: Data Retention */}
      <motion.div className="mb-20 bg-white rounded-[2.5rem] p-10 lg:p-16 border border-gray-100 shadow-xl" {...fadeInUp}>
        <div className="flex items-center gap-4 mb-12 text-center justify-center">
          <div className="w-14 h-14 bg-[#D2BD69]/10 rounded-2xl flex items-center justify-center">
            <Clock className="w-7 h-7 text-[#D2BD69]" />
          </div>
          <h2 className="text-3xl font-bold text-[#063B29]">Data Retention</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block" />
          
          <TimelineItem 
            title="Active Client" 
            desc="We keep your data securely as long as you are an active client. You have full access to all your information anytime through our team."
            icon={<Users />}
            side="left"
          />
          <TimelineItem 
            title="After You Leave" 
            desc="We retain records for 7 years as required by US law for compliance and tax purposes. After that, data is securely destroyed."
            icon={<Clock />}
            side="right"
            highlight
          />
        </div>
      </motion.div>

      {/* SECTION 6: Your Rights */}
      <motion.div className="mb-20" {...fadeInUp}>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-[#D2BD69]/10 rounded-2xl flex items-center justify-center transform -rotate-6">
            <Users className="w-7 h-7 text-[#D2BD69]" />
          </div>
          <h2 className="text-3xl font-bold text-[#063B29]">Your Data Rights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <RightCard icon={<Eye />} title="Access" desc="View all information we have about you" />
          <RightCard icon={<Edit />} title="Correct" desc="Update or fix your details anytime" />
          <RightCard icon={<Trash2 />} title="Delete" desc="Remove your information from our systems" />
        </div>
        <div className="bg-[#D2BD69]/10 rounded-2xl p-6 text-center border border-[#D2BD69]/20">
            <p className="text-[#063B29] font-semibold">
                You also have the right to <span className="underline decoration-[#D2BD69] decoration-2">opt out of marketing communications</span> anytime.
            </p>
        </div>
      </motion.div>

      {/* SECTION 7: Agreement & Contact */}
      <motion.div className="space-y-10" {...fadeInUp}>
        <div className="bg-[#063B29] rounded-[2.5rem] p-10 lg:p-16 text-center text-white shadow-2xl">
          <CheckCircle2 className="w-16 h-16 text-[#D2BD69] mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">Your Agreement</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            By using HaulSafe Insurance Services, you acknowledge and agree to this Privacy Policy. 
            We are committed to maintaining your trust and protecting your business.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#D2BD69] text-[#063B29] px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
            I Have Questions
          </Link>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
                <h3 className="text-2xl font-bold text-[#063B29] mb-4">Contact Privacy Officer</h3>
                <p className="text-gray-600 mb-6">For any data-related inquiries or to exercise your rights, please reach out directly to our privacy team.</p>
                <Link href="mailto:haulsafeinsurance@gmail.com" className="flex items-center gap-4 p-6 bg-[#FDFCF0] rounded-2xl border border-[#D2BD69]/20 hover:border-[#D2BD69] transition-all">
                    <Mail className="w-8 h-8 text-[#D2BD69]" />
                    <span className="text-xl font-bold text-[#063B29] break-all">haulsafeinsurance@gmail.com</span>
                </Link>
            </div>
            <div className="text-center md:text-right">
                <p className="text-sm text-gray-400 mb-2">Last Updated</p>
                <p className="text-lg font-bold text-[#063B29]">April 23, 2026</p>
                <div className="mt-6 flex justify-center md:justify-end gap-3">
                    <div className="w-12 h-12 bg-[#063B29]/5 rounded-xl flex items-center justify-center text-[#063B29]"><Shield /></div>
                    <div className="w-12 h-12 bg-[#063B29]/5 rounded-xl flex items-center justify-center text-[#063B29]"><Lock /></div>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* Internal Sub-Components */
function CollectCard({ icon, title, items }) {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 hover:border-[#D2BD69]/30 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-[#D2BD69]/10 rounded-xl flex items-center justify-center mb-6 text-[#D2BD69]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#063B29] mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-600">
            <Check className="w-4 h-4 text-[#D2BD69]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCard({ icon, title, desc, index }) {
  return (
    <div className={`p-8 rounded-3xl transition-all hover:shadow-lg ${index % 2 === 0 ? "bg-[#FDFCF0] border border-[#D2BD69]/20" : "bg-gray-50 border border-gray-100"}`}>
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-[#D2BD69] shadow-sm">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-[#063B29] mb-3">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function ShareCard({ type, title, subtitle, items }) {
  const isSafe = type === "safe";
  return (
    <div className={`rounded-[2rem] p-10 border-2 ${isSafe ? "bg-white border-green-100" : "bg-white border-red-50"}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isSafe ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
          {isSafe ? <Share2 /> : <EyeOff />}
        </div>
        <h3 className={`text-2xl font-bold ${isSafe ? "text-green-800" : "text-red-800"}`}>{title}</h3>
      </div>
      <p className="text-gray-500 mb-6 font-medium">{subtitle}</p>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            {isSafe ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs">✕</div>}
            <span className="text-gray-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({ title, desc, icon, side, highlight }) {
  return (
    <div className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${side === "right" ? "md:flex-row-reverse" : ""}`}>
      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center flex-shrink-0 z-10 shadow-xl ${highlight ? "bg-[#D2BD69] text-[#063B29]" : "bg-[#063B29] text-white"}`}>
        {icon}
      </div>
      <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg flex-1 hover:border-[#D2BD69]/30 transition-all">
        <h3 className="text-xl font-bold text-[#063B29] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function RightCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-[2rem] p-8 text-center border border-gray-100 shadow-lg group hover:border-[#D2BD69]/30 transition-all">
        <div className="w-16 h-16 bg-[#FDFCF0] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#D2BD69] group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h4 className="text-xl font-bold text-[#063B29] mb-3">{title}</h4>
        <p className="text-gray-600">{desc}</p>
    </div>
  );
}
