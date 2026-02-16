"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Users } from "lucide-react";

const reasons = [
    {
        title: "Real-World AI Systems",
        description: "We build deployable AI infrastructure, not experimental demos. Our focuses is on reliability and scale.",
        icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    },
    {
        title: "African Market Focus",
        description: "Designed for emerging market challenges, optimized for infrastructure gaps and local enterprise needs.",
        icon: <Target className="w-8 h-8 text-secondary" />,
    },
    {
        title: "Talent Development",
        description: "We bridge the AI skill gap by training future engineers through our integrated academy programs.",
        icon: <Users className="w-8 h-8 text-secondary" />,
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>

            <div className="section-padding relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Why QoreLogic
                    </motion.h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center group"
                        >
                            <div className="mb-8 relative inline-block">
                                <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                <div className="relative z-10 w-20 h-20 glass rounded-3xl flex items-center justify-center mx-auto group-hover:border-secondary/50 transition-colors">
                                    {reason.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
