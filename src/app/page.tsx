"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, GraduationCap, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] flex flex-col">
      <Navbar />

      {/* Centering Identity Intro */}
      <div className="pt-32 pb-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight uppercase">
            Engineering Intelligence. <br />
            <span className="text-secondary">Empowering People.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            QoreLogic is the dual engine for infrastructure-grade AI solutions
            and professional mastery. Choose your path.
          </p>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] animate-pulse" />
        </div>

        {/* Services Section */}
        <Link
          href="/services"
          className="group relative flex-1 flex flex-col items-center justify-center p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/[0.02] transition-all duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            <div className="w-24 h-24 lg:w-32 lg:h-32 glass rounded-[2.5rem] flex items-center justify-center text-secondary mb-10 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl shadow-secondary/10">
              <Cpu className="w-12 h-12 lg:w-16 lg:h-16" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase transition-colors group-hover:text-secondary group-hover:italic">
              Services
            </h2>
            <div className="flex items-center justify-center gap-3 text-gray-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              Enterprise AI <ArrowRight className="w-5 h-5 text-secondary" />
            </div>
          </motion.div>
        </Link>

        {/* Academy Section */}
        <Link
          href="/academy"
          className="group relative flex-1 flex flex-col items-center justify-center p-12 overflow-hidden hover:bg-white/[0.02] transition-all duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            <div className="w-24 h-24 lg:w-32 lg:h-32 glass rounded-[2.5rem] flex items-center justify-center text-secondary mb-10 mx-auto group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 shadow-2xl shadow-secondary/10">
              <GraduationCap className="w-12 h-12 lg:w-16 lg:h-16" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase transition-colors group-hover:text-secondary group-hover:italic">
              Academy
            </h2>
            <div className="flex items-center justify-center gap-3 text-gray-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              Professional Training <ArrowRight className="w-5 h-5 text-secondary" />
            </div>
          </motion.div>
        </Link>
      </div>

      <Footer />
    </main>
  );
}
