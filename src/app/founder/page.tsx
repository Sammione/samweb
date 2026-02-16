"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Award, Code2, Rocket, Heart } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FounderPage() {
    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />

            <section className="pt-32 pb-20 section-padding relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -mr-64 -mt-64" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        {/* Left Column: Image/Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-4"
                        >
                            <div className="glass rounded-[2.5rem] p-4 relative group">
                                <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-secondary/20 to-primary overflow-hidden relative">
                                    {/* Founder Image Placeholder Layout */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-secondary opacity-50">
                                            <Code2 size={80} />
                                        </div>
                                    </div>
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-60" />
                                </div>

                                <div className="absolute bottom-10 left-10 right-10">
                                    <h1 className="text-3xl font-bold mb-1">Omolaiye Samuel</h1>
                                    <p className="text-secondary font-medium tracking-wide text-sm uppercase">Founder & Lead AI Engineer</p>
                                </div>
                            </div>

                            <div className="flex justify-center gap-4 mt-8">
                                <Link href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/50 transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/50 transition-all">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/50 transition-all">
                                    <Github className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column: Bio Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-8 space-y-8"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                                    <Rocket className="w-4 h-4 text-secondary" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                                        Visionary Leadership
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Mastering the Art of <span className="text-secondary">Applied AI</span></h2>
                                <p className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-secondary/30 pl-6 mb-8">
                                    &quot;Africa must not only consume AI technology but actively build and export it. We are not just engineering code; we are engineering the future of a continent.&quot;
                                </p>
                            </div>

                            <div className="prose prose-invert prose-blue max-w-none text-gray-400 space-y-6 text-lg">
                                <p>
                                    Omolaiye Samuel is an AI engineer, product builder, and educator focused on developing practical artificial intelligence systems that solve real-world problems. With a deep-rooted passion for emerging markets, Samuel is bridging the gap between theoretical research and production-grade applications.
                                </p>
                                <p>
                                    With a strong background in Machine Learning, Predictive Analytics, and AI System Design, Samuel has built intelligent solutions ranging from forecasting models and AI-powered automation systems to domain-specific chatbots and decision-support platforms. His work spans sustainability analytics, infrastructure stability modeling, AI-driven forecasting, and intelligent product design.
                                </p>
                                <p>
                                    As the Founder of NeuraCore AI, he is leading a double-edged mission: to deploy scalable AI products for global institutions and to cultivate the high-tier talent needed to sustain them. He believes that the next industrial revolution will be powered by intelligence, and his goal is to ensure Africa is at the forefront of that movement.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-12">
                                <div className="glass p-6 rounded-3xl">
                                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-4">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Technical Mastery</h3>
                                    <p className="text-sm text-gray-400">Expertise in Deep Learning, Predictive Modeling, and Infrastructure Scale AI Systems.</p>
                                </div>
                                <div className="glass p-6 rounded-3xl">
                                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-4">
                                        <Heart className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Education Focus</h3>
                                    <p className="text-sm text-gray-400">Dedicated to training the next 10,000 African AI engineers through hands-on mentorship.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-[#0D121F] relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto section-padding relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">The Clear Vision</h2>
                    <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
                        To <span className="text-white font-semibold">engineer intelligent systems</span> that power smarter decisions, stronger infrastructure, and <span className="text-secondary font-semibold">sustainable growth</span> across emerging markets.
                    </p>
                    <div className="mt-12">
                        <Link href="/enroll" className="btn-primary">
                            Partner with Samuel
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
