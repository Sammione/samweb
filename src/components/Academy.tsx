"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, BrainCircuit, LineChart, Globe } from "lucide-react";
import Link from "next/link";

const curriculum = [
    { name: "Data Science", icon: <Database className="w-5 h-5" /> },
    { name: "Deep Learning", icon: <BrainCircuit className="w-5 h-5" /> },
    { name: "Machine Learning", icon: <Code2 className="w-5 h-5" /> },
    { name: "Time Series Forecasting", icon: <LineChart className="w-5 h-5" /> },
    { name: "AI Engineering", icon: <Globe className="w-5 h-5" /> },
    { name: "AI System Deployment", icon: <BrainCircuit className="w-5 h-5" /> },
];

export default function Academy() {
    return (
        <section id="academy" className="py-24 bg-[#0D121F]">
            <div className="section-padding">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                            <GraduationCap className="w-4 h-4 text-secondary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Learning & Growth</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">QoreLogic AI Academy</h2>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                            We bridge the AI skill gap by training the next generation of engineers and
                            data scientists. Our programs focus on practical, deployable AI skills
                            required by modern enterprises.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link href="/enroll" className="btn-primary transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20">
                                Enroll Now
                            </Link>
                            <Link href="/academy" className="btn-outline transition-all hover:scale-105 active:scale-95">
                                View All Courses
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {curriculum.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-secondary/30 transition-all group"
                            >
                                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <span className="font-semibold text-gray-200">{item.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
