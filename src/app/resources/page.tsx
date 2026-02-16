"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Download,
    BookOpen,
    Video,
    Search,
    Lock,
    Unlock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const resources = [
    {
        title: "AI Strategy for CEOs",
        category: "E-Book",
        description: "An executive guide to implementing artificial intelligence in emerging markets. Learn how to identify high-ROI AI opportunities.",
        icon: <BookOpen className="w-6 h-6" />,
        type: "PDF",
        size: "2.4 MB",
        locked: false
    },
    {
        title: "Python for Data Science",
        category: "Learning Material",
        description: "A comprehensive cheat sheet for Python's most powerful data libraries: Pandas, NumPy, and Matplotlib.",
        icon: <FileText className="w-6 h-6" />,
        type: "PDF",
        size: "1.2 MB",
        locked: false
    },
    {
        title: "Predictive Engine whitepaper",
        category: "Research",
        description: "Deep dive into the architecture behind our infrastructure instability detection models and neural network forecasting.",
        icon: <FileText className="w-6 h-6" />,
        type: "PDF",
        size: "4.8 MB",
        locked: false
    },
    {
        title: "Modern ML Workflow",
        category: "Guide",
        description: "A step-by-step guide to building production-ready machine learning pipelines from scratch.",
        icon: <Video className="w-6 h-6" />,
        type: "VIDEO/PDF",
        size: "15 MB",
        locked: true
    },
    {
        title: "ESG Compliance Checklist",
        category: "Toolkit",
        description: "Ensure your organization meets international sustainability reporting standards with this automated checklist.",
        icon: <Download className="w-6 h-6" />,
        type: "XLSX",
        size: "850 KB",
        locked: false
    }
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 section-padding relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -mr-64 -mt-64" />

                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        Knowledge <span className="text-secondary text-glow">Library</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Access our collection of whitepapers, technical guides, and ebooks
                        designed to help you master the future of AI.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-12 max-w-xl mx-auto relative"
                    >
                        <input
                            type="text"
                            placeholder="Search resources..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-12 focus:outline-none focus:border-secondary transition-colors"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    </motion.div>
                </div>
            </section>

            {/* Resources List */}
            <section className="pb-24 section-padding relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-6">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card group flex flex-col md:flex-row items-center gap-8 p-8 border border-white/5 hover:border-secondary/30 transition-all cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform flex-shrink-0">
                                    {resource.icon}
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-secondary/70">
                                            {resource.category}
                                        </span>
                                        <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-500 uppercase tracking-tighter">
                                            {resource.type} • {resource.size}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                                        {resource.description}
                                    </p>
                                </div>

                                <div className="flex-shrink-0">
                                    {resource.locked ? (
                                        <div className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-widest bg-white/5 py-3 px-6 rounded-xl border border-white/10">
                                            <Lock className="w-4 h-4" /> Locked
                                        </div>
                                    ) : (
                                        <button className="flex items-center gap-2 text-black bg-secondary hover:bg-secondary/80 py-3 px-6 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20">
                                            <Download className="w-4 h-4" /> Download
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Subscription CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 glass p-12 rounded-[2.5rem] border border-secondary/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Unlock size={120} className="text-secondary" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Want access to all resources?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto italic">
                            Join our AI Insights newsletter to unlock premium resources, technical whitepapers, and exclusive research from Omolaiye Samuel.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-3 focus:outline-none focus:border-secondary transition-colors"
                            />
                            <button className="btn-primary whitespace-nowrap">Join & Unlock</button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
