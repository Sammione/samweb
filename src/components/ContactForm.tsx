"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [touched, setTouched] = useState<{ name: boolean; email: boolean; message: boolean }>({
        name: false,
        email: false,
        message: false,
    });

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleBlur = (field: "name" | "email" | "message") => {
        setTouched(prev => ({ ...prev, [field]: true }));
        validateForm();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

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
                setTouched({ name: false, email: false, message: false });
                setErrors({});
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                await response.json();
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
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
                                Whether you are looking for custom solutions or want to join
                                our academy, we are here to help.
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
                                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    onBlur={() => handleBlur("name")}
                                    placeholder="John Doe"
                                    className={cn(
                                        "input-field w-full",
                                        errors.name && touched.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                                    )}
                                    aria-invalid={!!errors.name && touched.name}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && touched.name && (
                                    <p id="name-error" className="text-red-400 text-sm mt-1 flex items-center gap-1">
                                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    onBlur={() => handleBlur("email")}
                                    placeholder="john@example.com"
                                    className={cn(
                                        "input-field w-full",
                                        errors.email && touched.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                                    )}
                                    aria-invalid={!!errors.email && touched.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />
                                {errors.email && touched.email && (
                                    <p id="email-error" className="text-red-400 text-sm mt-1 flex items-center gap-1">
                                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    onBlur={() => handleBlur("message")}
                                    placeholder="How can we help you?"
                                    className={cn(
                                        "input-field w-full resize-none",
                                        errors.message && touched.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                                    )}
                                    aria-invalid={!!errors.message && touched.message}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                />
                                {errors.message && touched.message && (
                                    <p id="message-error" className="text-red-400 text-sm mt-1 flex items-center gap-1">
                                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Status Messages */}
                            {status === "success" && (
                                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-green-400 font-medium">Message sent successfully! We will get back to you soon.</p>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className={cn(
                                    "btn-primary flex items-center justify-center gap-2 mt-4 relative overflow-hidden",
                                    status === "submitting" && "opacity-70 cursor-not-allowed",
                                    status === "success" && "bg-green-500 hover:bg-green-600"
                                )}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Message Sent!</span>
                                    </>
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