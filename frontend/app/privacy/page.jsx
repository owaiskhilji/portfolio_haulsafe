import { Mail, Phone, MapPin, Shield, Eye, Lock, Share, Clock, CheckCircle, Building2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Terms - HaulSafe Insurance",
  description: "HaulSafe Insurance Privacy Policy and Terms of Service. Learn how we collect, use, and protect your information.",
};

export default function Privacy() {
  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information We Collect",
      content: (
        <>
          We collect <strong>full name</strong>, <strong>business name</strong>,{" "}
          <strong>email</strong>, <strong>phone number</strong>,{" "}
          <strong>physical business address</strong>, <strong>EIN</strong>,{" "}
          <strong>LLC documents</strong>, <strong>driver's license</strong>,{" "}
          <strong>Social Security Number</strong> for FMCSA filings and BOI
          report, <strong>vehicle information</strong> including VIN and year,{" "}
          <strong>insurance preferences</strong>, <strong>tax information</strong>
          , and <strong>beneficial ownership information</strong>.
        </>
      ),
      highlight: true,
      cream: false,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: (
        <>
          We use your information to <strong>obtain insurance quotes</strong>{" "}
          from GEICO and Progressive, to <strong>file FMCSA documents</strong>{" "}
          including USDOT, MC, BOC-3, and UCR, to <strong>form LLCs</strong> and{" "}
          <strong>obtain EINs</strong>, to <strong>file BOI reports</strong> with
          FinCEN, to <strong>file tax returns</strong> and annual reports, to{" "}
          <strong>communicate with you</strong>, and to{" "}
          <strong>process payments</strong>.
        </>
      ),
      highlight: false,
      cream: false,
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Information Protection",
      content: (
        <>
          All client data is stored on <strong>secure, encrypted servers</strong>
          . Access is <strong>restricted to authorized team members</strong>{" "}
          only. We <strong>never sell or rent</strong> your personal information.
          We use <strong>SSL encryption</strong> on our website.
        </>
      ),
      highlight: false,
      cream: true,
    },
    {
      icon: <Share className="w-6 h-6" />,
      title: "Information Sharing",
      content: (
        <>
          We share your information only with <strong>GEICO</strong>,{" "}
          <strong>Progressive</strong>, <strong>FMCSA</strong>, <strong>IRS</strong>
          , <strong>FinCEN</strong>, state agencies, and process agents as
          required for legal and business purposes. We{" "}
          <strong>never share your information for marketing purposes</strong>.
        </>
      ),
      highlight: false,
      cream: false,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Data Retention",
      content: (
        <>
          We keep your information <strong>as long as you are an active client</strong>
          . After account closure, we retain records for <strong>7 years</strong>{" "}
          as required by law.
        </>
      ),
      highlight: false,
      cream: true,
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Your Rights",
      content: (
        <>
          You have the right to <strong>access</strong>, <strong>correct</strong>,
          or <strong>delete</strong> your information. You have the right to{" "}
          <strong>opt out of marketing communications</strong>. Contact us at{" "}
          <strong>haulsafeinsurance@gmail.com</strong>.
        </>
      ),
      highlight: true,
      cream: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 left-8">
            <Shield className="w-24 h-24 text-white" />
          </div>
          <div className="absolute top-8 right-12">
            <Lock className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-4 left-1/3">
            <Shield className="w-20 h-20 text-white" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy & Terms
          </h1>
          <p className="text-gray-200 text-lg">
            Your trust is our priority. Here's how we protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-20 relative">
        {/* Watermark Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute">
              <Shield
                className="w-16 h-16 text-gray-900"
                style={{
                  left: `${(i % 5) * 25}%`,
                  top: `${Math.floor(i / 5) * 25}%`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="relative space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                section.highlight
                  ? "bg-[#D4AF37]/5 border-[#D4AF37]/20"
                  : section.cream
                  ? "bg-[#FDFCF0] border-gray-200"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex flex-col gap-5">
                {/* Icon in gold circle */}
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-[#D4AF37]">{section.icon}</div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-[#063B29]">
                  {section.title}
                </h2>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed text-base pl-1">
                  {section.content}
                </p>
              </div>
            </div>
          ))}

          {/* Your Agreement Section */}
          <div className="p-8 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-bold text-[#063B29]">
                Your Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed text-base pl-1">
                By using our <strong>website and services</strong>, you agree to
                this <strong>Privacy Policy</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="mt-20 p-10 rounded-2xl bg-accent border-2 border-secondary shadow-xl relative">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-secondary/30">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">
                HaulSafe Insurance Services
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Premium Trucking Insurance & FMCSA Compliance
              </p>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Email</p>
              <p className="text-primary font-semibold text-sm break-all">
                haulsafeinsurance@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Phone</p>
              <p className="text-primary font-semibold">+923100000000</p>
            </div>
          </div>

          {/* Address */}
          <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  Address
                </p>
                <p className="text-primary font-semibold"></p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-secondary/30 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} HaulSafe Insurance Services. All
              rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
