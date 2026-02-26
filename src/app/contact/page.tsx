"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Globe } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-12 section-padding relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -mr-64 -mt-64" />

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
                    >
                        <MessageSquare className="w-4 h-4 text-secondary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        Let&apos;s Build the <br />
                        <span className="text-secondary text-glow">Future Together</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Whether you have a specific project in mind or just want to explore
                        how AI can help your business, we&apos;re ready to talk.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 section-padding">
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { icon: <Mail className="w-6 h-6" />, title: "Email Us", detail: "info@qorelogic.com", sub: "Response within 24h" },
                        { icon: <MessageSquare className="w-6 h-6" />, title: "Live Chat", detail: "Available on Dashboard", sub: "For active clients" },
                        { icon: <Globe className="w-6 h-6" />, title: "Global Presence", detail: "Lagos | Nairobi", sub: "Innovation Hubs" }
                    ].map((info, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card text-center group hover:bg-white/[0.08]"
                        >
                            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform">
                                {info.icon}
                            </div>
                            <h3 className="font-bold mb-1">{info.title}</h3>
                            <p className="text-white font-medium mb-1">{info.detail}</p>
                            <p className="text-xs text-gray-500">{info.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Main Contact Form Section */}
            <ContactForm />

            <Footer />
        </main>
    );
}
