import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A]">
      <Navbar />
      <Hero />

      {/* Brief Teaser Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/services" className="glass-card group p-10 hover:border-secondary/50 transition-all">
              <h3 className="text-3xl font-bold mb-4">Enterprise Services</h3>
              <p className="text-gray-400 mb-6 text-lg">Custom AI development, data analysis, and strategic research for infrastructure and growth.</p>
              <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <div className="w-5 h-5">→</div>
              </span>
            </Link>
            <Link href="/academy" className="glass-card group p-10 hover:border-secondary/50 transition-all">
              <h3 className="text-3xl font-bold mb-4">AI Academy</h3>
              <p className="text-gray-400 mb-6 text-lg">Industry-leading training programs designed to transform you into a skilled AI professional.</p>
              <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                View All Courses <div className="w-5 h-5">→</div>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
