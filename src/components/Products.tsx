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
        <section id="products" className="py-24 bg-primary">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Core Technologies
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Deploying infrastructure-grade artificial intelligence to solve complex
                        industrial and enterprise challenges.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group"
                        >
                            <div className="mb-6 w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {product.description}
                            </p>
                            <Link
                                href={`/products/${product.title.toLowerCase().replace(/ /g, "-")}`}
                                className="text-white text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors inline-block"
                            >
                                Learn More →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
