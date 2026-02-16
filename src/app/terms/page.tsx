import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />
            <div className="pt-32 pb-24 section-padding max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of <span className="text-secondary">Service</span></h1>
                <div className="prose prose-invert prose-blue max-w-none text-gray-400 space-y-6">
                    <p>Last Updated: February 16, 2026</p>
                    <p>By accessing or using the QoreLogic website and services, you agree to be bound by these Terms of Service.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>By visiting our site, you engage in our &quot;Service&quot; and agree to be bound by the following terms and conditions. These Terms of Service apply to all users of the site.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Academy Enrollment</h2>
                    <p>Enrolling in our Academy courses requires you to provide accurate and complete information. We reserves the right to refuse service or cancel enrollments at our discretion.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Intellectual Property</h2>
                    <p>All content on this website, including text, graphics, logos, and course materials, is the property of QoreLogic and is protected by copyright and other intellectual property laws.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>QoreLogic shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our services.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Governing Law</h2>
                    <p>These terms are governed by and construed in accordance with the laws of the jurisdictions in which QoreLogic operates (Nigeria and Kenya).</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Changes to Terms</h2>
                    <p>We reserve the right to update or change our Terms of Service at any time. Your continued use of the Service after we post any modifications will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms of Service.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
