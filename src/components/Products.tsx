"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, Leaf, Cpu } from "lucide-react";
import Link from "next/link";

const products = [
    {
        title: "Grid Intelligence System",
        description: "AI-powered instability detection and load optimization for energy systems.",
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        color: "yellow",
    },
    {
        title: "Predictive Analytics Engine",
        description: "Time-series forecasting and risk prediction systems for enterprise data.",
        icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
        color: "blue",
    },
    {
        title: "ESG Intelligence Platform",
        description: "Automated sustainability analytics and compliance monitoring.",
        icon: <Leaf className="w-6 h-6 text-green-400" />,
        color: "green",
    },
    {
        title: "Enterprise AI Automation",
        description: "Custom AI agents and workflow automation for businesses.",
        icon: <Cpu className="w-6 h-6 text-purple-400" />,
        color: "purple",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="section-padding relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
                    >
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                            Our Technologies
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Core Technologies
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Deploying infrastructure-grade artificial intelligence to solve complex
                        industrial and enterprise challenges.
                    </motion.p>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-8"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="glass-card group relative overflow-hidden card-hover"
                        >
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:via-secondary/2 group-hover:to-secondary/5 transition-all duration-500" />

                            {/* Glow effect on hover */}
                            <div className="absolute -inset-1 bg-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                            <div className="relative z-10">
                                <div className="mb-6 w-14 h-14 glass rounded-xl flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-secondary/0 group-hover:shadow-secondary/20">
                                    {product.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                                    {product.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {product.description}
                                </p>
                                <Link
                                    href={`/products/${product.title.toLowerCase().replace(/ /g, "-")}`}
                                    className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:text-secondary transition-colors duration-300"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
