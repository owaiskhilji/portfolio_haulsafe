import { Shield, Clock, DollarSign, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Trucking Insurance & FMCSA Compliance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary">
            50% Upfront Payment • 7-Day Complete Legal Setup
          </p>
          <button className="bg-secondary text-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all">
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Choose HaulSafe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                Full Coverage
              </h3>
              <p className="text-gray-700">
                Comprehensive insurance coverage for all your trucking needs
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                7-Day Setup
              </h3>
              <p className="text-gray-700">
                Complete legal and compliance setup in just 7 days
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <DollarSign className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                50% Upfront
              </h3>
              <p className="text-gray-700">
                Pay only half upfront with flexible payment plans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Phone className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free, no-obligation quote
          </p>
          <button className="bg-secondary text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
