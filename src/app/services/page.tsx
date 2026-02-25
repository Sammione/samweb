"use client";

import { motion } from "framer-motion";
import {
    Layout,
    BarChart3,
    GraduationCap,
    Microscope,
    ArrowRight,
    Globe,
    Database,
    Cpu,
    Search
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
    {
        title: "Intelligent Web Development",
        description: "We build high-performance, AI-integrated web platforms and applications. From minimalist landing pages to complex enterprise portals, we ensure your digital presence is modern, fast, and scalable.",
        icon: <Layout className="w-10 h-10" />,
        features: ["Custom Web Applications", "AI-Ready Interfaces", "E-commerce Solutions", "Performance Optimization"],
        color: "blue"
    },
    {
        title: "Advanced Data Analysis",
        description: "Transform your raw data into actionable business intelligence. We specialize in deep data analysis, pattern recognition, and predictive modeling to help you make smarter, data-driven decisions.",
        icon: <BarChart3 className="w-10 h-10" />,
        features: ["Predictive Analytics", "Market Trend Analysis", "Data Visualization", "Statistical Modeling"],
        color: "secondary"
    },
    {
        title: "Large Language Models & RAG",
        description: "Leverage the power of Generative AI. We design and deploy custom LLM solutions, retrieval-augmented generation (RAG) systems, and intelligent agents tailored to your business data.",
        icon: <Cpu className="w-10 h-10" />,
        features: ["Custom LLM Workflows", "Vector Database Setup", "AI Agent Development", "Semantic Search Systems"],
        color: "blue"
    },
    {
        title: "Strategic AI Research",
        description: "Pioneering research into intelligent systems and infrastructure stability. We conduct deep technical research to develop proprietary algorithms and innovative solutions for emerging markets.",
        icon: <Microscope className="w-10 h-10" />,
        features: ["Algorithm Development", "Infrastructure Research", "System Optimization", "Whitepaper Publication"],
        color: "secondary"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 section-padding relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full -ml-64 -mt-64 animate-pulse" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
                    >
                        <Cpu className="w-4 h-4 text-secondary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                            Our Capabilities
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        Engineering Solutions for <br />
                        <span className="text-secondary">Digital Excellence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        QoreLogic provides a comprehensive suite of services designed to empower
                        businesses through technology, data, and specialized education.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto section-padding">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card group p-10 relative overflow-hidden flex flex-col justify-between"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-secondary/10 transition-colors" />

                                <div>
                                    <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <ul className="grid grid-cols-2 gap-4 mb-10">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="/#contact"
                                    className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all"
                                >
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us Section */}
            <section className="py-32 bg-[#0D121F] relative overflow-hidden">
                <div className="max-w-7xl mx-auto section-padding relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-16 text-center">Why Partner With Us?</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-secondary mb-4 flex justify-center"><Globe size={40} /></div>
                            <h4 className="text-xl font-bold">Global Standards</h4>
                            <p className="text-gray-400">We apply international best practices in every line of code and every data model we build.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-secondary mb-4 flex justify-center"><Database size={40} /></div>
                            <h4 className="text-xl font-bold">Data-Centric Approach</h4>
                            <p className="text-gray-400">Every decision we make is backed by rigorous analysis and empirical evidence.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-secondary mb-4 flex justify-center"><Search size={40} /></div>
                            <h4 className="text-xl font-bold">Future-Focused</h4>
                            <p className="text-gray-400">We don&apos;t just solve today&apos;s problems; we build systems that scale for tomorrow&apos;s challenges.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academy CTA Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="max-w-7xl mx-auto section-padding relative z-10">
                    <div className="glass-card p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                                <GraduationCap className="w-4 h-4 text-secondary" />
                                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                                    QoreLogic AI Academy
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Training the Next Generation of AI Talent</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Looking to master AI, Machine Learning, or Data Science? Our Academy provides hands-on, intensive training programs designed for real-world impact.
                            </p>
                            <Link href="/academy" className="btn-primary inline-flex items-center gap-2">
                                Explorer Academy Courses <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="w-full md:w-1/3 text-center md:text-right">
                            <GraduationCap className="w-32 h-32 md:w-48 md:h-48 text-secondary opacity-20 inline-block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center section-padding">
                <div className="glass max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale?</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you need a cutting-edge platform, deep data insights, or a high-tier AI workforce, QoreLogic is your strategic partner.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="btn-primary">Request a Proposal</Link>
                        <Link href="/founder" className="btn-outline">Talk to the Founder</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
