"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    GraduationCap,
    User,
    BookOpen,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
    "Data Science Fundamentals",
    "Machine Learning Engineering",
    "Deep Learning & Neural Networks",
    "Time Series Forecasting",
    "AI Engineering & LLM Applications",
    "AI System Deployment & MLOps"
];

const experienceLevels = [
    "Complete Beginner",
    "Some Programming Experience",
    "Intermediate Developer",
    "Advanced Professional"
];

const intakeDates = [
    "March 2026",
    "June 2026",
    "September 2026",
    "December 2026"
];

export default function EnrollPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        course: "",
        experienceLevel: "",
        intakeDate: "",
        employmentStatus: "",
        motivation: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

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
                setIsSubmitted(true);
                // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    country: "",
                    course: "",
                    experienceLevel: "",
                    intakeDate: "",
                    employmentStatus: "",
                    motivation: ""
                });
            } else {
                const data = await response.json();
                alert(data.error || "Something went wrong. Please try again.");
            }
        } catch {
            alert("External error. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }

        // Hide success message after 10 seconds (increased from 5)
        if (isSubmitted) {
            setTimeout(() => {
                setIsSubmitted(false);
            }, 10000);
        }
    };

    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-12 section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <GraduationCap className="w-4 h-4 text-secondary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                            Start Your Journey
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Enroll in <span className="text-secondary">AI Academy</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Take the first step towards becoming an AI professional. Fill out the form below and our admissions team will contact you within 24 hours.
                    </p>
                </motion.div>
            </section>

            {/* Benefits Section */}
            <section className="pb-12 section-padding">
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        { icon: <CheckCircle2 className="w-6 h-6" />, title: "Industry Experts", desc: "Learn from professionals working at top tech companies" },
                        { icon: <CheckCircle2 className="w-6 h-6" />, title: "Hands-On Projects", desc: "Build real-world projects for your portfolio" },
                        { icon: <CheckCircle2 className="w-6 h-6" />, title: "Career Support", desc: "Get job placement assistance and career guidance" }
                    ].map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card text-center"
                        >
                            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-secondary mx-auto mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="font-bold mb-2">{benefit.title}</h3>
                            <p className="text-sm text-gray-400">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Enrollment Form */}
            <section className="pb-24 section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="glass rounded-3xl p-8 md:p-12">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
                                <p className="text-gray-400 text-lg mb-6">
                                    Thank you for your interest in QoreLogic AI Academy. Our admissions team will review your application and contact you within 24 hours.
                                </p>
                                <p className="text-sm text-gray-500">
                                    Check your email for confirmation and next steps.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-2">Enrollment Application</h2>
                                    <p className="text-gray-400">
                                        Complete the form below to apply for our AI training programs
                                    </p>
                                </div>

                                {/* Personal Information */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <User className="w-5 h-5 text-secondary" />
                                        Personal Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all"
                                                placeholder="+1 234 567 8900"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="country" className="block text-sm font-medium mb-2">
                                                Country *
                                            </label>
                                            <input
                                                type="text"
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all"
                                                placeholder="United States"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Course Selection */}
                                <div className="space-y-6 pt-6 border-t border-white/10">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-secondary" />
                                        Course Selection
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="course" className="block text-sm font-medium mb-2">
                                                Select Course *
                                            </label>
                                            <select
                                                id="course"
                                                name="course"
                                                value={formData.course}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all"
                                            >
                                                <option value="">Choose a course...</option>
                                                {courses.map((course) => (
                                                    <option key={course} value={course} className="bg-[#0D121F]">
                                                        {course}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="intakeDate" className="block text-sm font-medium mb-2">
                                                Preferred Intake *
                                            </label>
                                            <select
                                                id="intakeDate"
                                                name="intakeDate"
                                                value={formData.intakeDate}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all"
                                            >
                                                <option value="">Select intake date...</option>
                                                {intakeDates.map((date) => (
                                                    <option key={date} value={date} className="bg-[#0D121F]">
                                                        {date}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="experienceLevel" className="block text-sm font-medium mb-2">
                                                Experience Level *
                                            </label>
                                            <select
                                                id="experienceLevel"
                                                name="experienceLevel"
                                                value={formData.experienceLevel}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all"
                                            >
                                                <option value="">Select your level...</option>
                                                {experienceLevels.map((level) => (
                                                    <option key={level} value={level} className="bg-[#0D121F]">
                                                        {level}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="employmentStatus" className="block text-sm font-medium mb-2">
                                                Employment Status *
                                            </label>
                                            <select
                                                id="employmentStatus"
                                                name="employmentStatus"
                                                value={formData.employmentStatus}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all"
                                            >
                                                <option value="">Select status...</option>
                                                <option value="student" className="bg-[#0D121F]">Student</option>
                                                <option value="employed" className="bg-[#0D121F]">Employed</option>
                                                <option value="unemployed" className="bg-[#0D121F]">Unemployed</option>
                                                <option value="self-employed" className="bg-[#0D121F]">Self-Employed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="motivation" className="block text-sm font-medium mb-2">
                                            Why do you want to join this program? *
                                        </label>
                                        <textarea
                                            id="motivation"
                                            name="motivation"
                                            value={formData.motivation}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:border-secondary/50 transition-all resize-none"
                                            placeholder="Tell us about your goals and what you hope to achieve..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Submitting Application...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        By submitting this form, you agree to our Terms of Service and Privacy Policy
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Additional Info */}
                    {!isSubmitted && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 text-center"
                        >
                            <p className="text-gray-400 mb-4">
                                Want to learn more about our courses first?
                            </p>
                            <Link href="/academy" className="btn-outline inline-flex items-center gap-2">
                                View All Courses
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    )}
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
