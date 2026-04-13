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
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-light/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Decorative lines */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent" />
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
                <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
            </div>

            <div className="section-padding relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
                    >
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                            Our Advantage
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Why QoreLogic
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="text-center group"
                        >
                            <div className="mb-8 relative inline-block">
                                {/* Animated pulse rings */}
                                <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                                <div className="absolute inset-0 rounded-3xl">
                                    <div className="absolute inset-0 border-2 border-secondary/30 rounded-3xl scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-50 transition-all duration-700 delay-100" />
                                </div>
                                <div className="relative z-10 w-20 h-20 glass rounded-3xl flex items-center justify-center mx-auto group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-all duration-500 shadow-lg shadow-secondary/0 group-hover:shadow-secondary/20">
                                    <div className="group-hover:scale-110 transition-transform duration-500">
                                        {reason.icon}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors duration-300">
                                {reason.title}
                            </h3>
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
