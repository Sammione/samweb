import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />
            <div className="pt-32 pb-24 section-padding max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy <span className="text-secondary">Policy</span></h1>
                <div className="prose prose-invert prose-blue max-w-none text-gray-400 space-y-6">
                    <p>Last Updated: February 16, 2026</p>
                    <p>At NeuraCore AI, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
                    <p>We collect information that you provide directly to us through forms, such as your name, email address, phone number, and any professional or educational details provided for enrollment.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Process your enrollment and contact you regarding our courses.</li>
                        <li>Respond to your inquiries and provide customer support.</li>
                        <li>Improve our website and services.</li>
                        <li>Send you updates, newsletters, and promotional materials (with your consent).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Sharing Your Information</h2>
                    <p>We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.</p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at info@neuracore.ai.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
