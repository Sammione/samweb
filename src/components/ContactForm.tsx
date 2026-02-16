"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mwvnbewj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                const data = await response.json();
                alert(data.error || "Something went wrong. Please try again.");
                setStatus("idle");
            }
        } catch {
            alert("Error sending message. Please check your connection.");
            setStatus("idle");
        }
    };

    return (
        <section id="contact" className="py-24 bg-primary">
            <div className="section-padding">
                <div className="glass-card max-w-5xl mx-auto p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] -mr-32 -mt-32" />

                    <div className="grid md:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Building the Next Generation of Intelligent Systems.
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Ready to transform your enterprise infrastructure with AI?
                                Whether you&apos;re looking for custom solutions or want to join
                                our academy, we&apos;re here to help.
                            </p>

                            <div className="flex flex-col gap-4">
                                <Link
                                    href="#contact"
                                    className="btn-primary w-fit transition-all hover:scale-105 active:scale-95"
                                >
                                    Partner With Us
                                </Link>
                                <Link
                                    href="/enroll"
                                    className="btn-outline w-fit transition-all hover:scale-105 active:scale-95"
                                >
                                    Apply to Academy
                                </Link>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@example.com"
                                    className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="How can we help you?"
                                    className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className="btn-primary flex items-center justify-center gap-2 mt-4"
                            >
                                {status === "submitting" ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
