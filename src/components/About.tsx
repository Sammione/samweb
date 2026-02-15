"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
    const specializations = [
        "Predictive Analytics",
        "Infrastructure AI",
        "Machine Learning Systems",
        "AI Automation",
        "Sustainability Intelligence",
    ];

    return (
        <section id="about" className="bg-primary relative py-24 overflow-hidden">
            <div className="section-padding relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Who We Are</h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            NeuraCore AI is an applied artificial intelligence company focused on building
                            real-world AI systems for infrastructure, finance, and enterprise automation
                            across emerging markets.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {specializations.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square glass rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
                            <div className="relative z-10 text-center">
                                <div className="text-6xl font-bold text-secondary mb-2">100%</div>
                                <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Applied Intelligence</div>
                            </div>

                            {/* Animated rings */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
