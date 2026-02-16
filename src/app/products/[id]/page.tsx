"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, Leaf, Cpu, ArrowLeft, CheckCircle2, Server, Shield, ZapIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productDetails = {
    "grid-intelligence-system": {
        title: "Grid Intelligence System",
        description: "Next-generation instability detection and load optimization for modern energy infrastructure. Our system uses real-time AI to predict fluctuations and stabilize power distribution.",
        icon: <Zap className="w-12 h-12 text-yellow-400" />,
        features: [
            "Real-time instability detection",
            "Automatic load balancing",
            "Predictive maintenance alerts",
            "Smart grid integration",
            "Energy consumption forecasting",
            "Infrastructure health monitoring"
        ],
        technicalSpecs: [
            "Neural Network forecasting with 98% accuracy",
            "Sub-second latency for instability alerts",
            "Edge computing compatible deployment",
            "Zero-downtime integration architecture"
        ],
        useCase: "Ideal for national power authorities, micro-grid operators, and industrial plants requiring stable energy infrastructure."
    },
    "predictive-analytics-engine": {
        title: "Predictive Analytics Engine",
        description: "Transform your enterprise data into a crystal ball. Our time-series forecasting engine identifies deep patterns in market variables, supply chain dynamics, and financial history.",
        icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
        features: [
            "Multi-variable time-series forecasting",
            "Anomaly detection in financial data",
            "Supply chain optimization models",
            "Automated risk assessment",
            "Dynamic pricing engines",
            "Consumer behavior modeling"
        ],
        technicalSpecs: [
            "Proprietary deep learning architectures",
            "Support for structured and unstructured data",
            "Automated hyperparameter tuning",
            "Exportable API endpoints for custom integration"
        ],
        useCase: "Perfect for fintech firms, retail giants, and logistics companies looking to stay ahead of market shifts."
    },
    "esg-intelligence-platform": {
        title: "ESG Intelligence Platform",
        description: "The definitive solution for automated sustainability tracking and compliance. We simplify complex ESG reporting by using AI to analyze satellite data, IoT sensors, and corporate reports.",
        icon: <Leaf className="w-12 h-12 text-green-400" />,
        features: [
            "Automatic carbon footprint calculation",
            "Supply chain sustainability monitoring",
            "Regulatory compliance tracking",
            "Satellite-based impact analysis",
            "ESG risk assessment score",
            "Real-time stakeholder reporting"
        ],
        technicalSpecs: [
            "Global sustainability database integration",
            "NLP for corporate report auditing",
            "Blockchain-verified impact certification",
            "Multi-region regulatory mapping"
        ],
        useCase: "Designed for publicly traded companies, impact investors, and regulatory bodies needing transparent sustainability data."
    },
    "enterprise-ai-automation": {
        title: "Enterprise AI Automation",
        description: "Intelligent agents that don't just follow rules—they solve problems. Our custom automation suite deploys LLM-powered agents to manage operations, support, and R&D pipelines.",
        icon: <Cpu className="w-12 h-12 text-purple-400" />,
        features: [
            "Custom LLM fine-tuning on company data",
            "Autonomous customer support agents",
            "Automated research & documentation",
            "Workflow orchestration systems",
            "Internal knowledge base intelligence",
            "Multi-agent collaboration frameworks"
        ],
        technicalSpecs: [
            "Private cloud deployment for data security",
            "Integration with legacy CRM/ERP systems",
            "Human-in-the-loop feedback mechanisms",
            "Dynamic context window management"
        ],
        useCase: "Best for tech-forward enterprises, legal firms, and customer-centric businesses aiming for zero-friction operations."
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const product = productDetails[id as keyof typeof productDetails];

    if (!product) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4">404</h1>
                    <p className="text-xl text-gray-400 mb-8">Product not found</p>
                    <Link href="/#products" className="btn-primary">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />

            <section className="pt-32 pb-20 section-padding relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -mr-64 -mt-64" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <Link href="/#products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Core Technologies
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="w-20 h-20 glass rounded-[2rem] flex items-center justify-center mb-8">
                                {product.icon}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                {product.title}
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                {product.description}
                            </p>

                            <div className="glass p-8 rounded-[2rem] border border-white/5">
                                <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-secondary flex items-center gap-2">
                                    <Shield className="w-5 h-5" /> Target Use-Case
                                </h3>
                                <p className="text-gray-300 leading-relaxed italic">
                                    &quot;{product.useCase}&quot;
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            {/* Features List */}
                            <div>
                                <h3 className="text-2xl font-bold mb-8">Core Capabilities</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 text-gray-300 glass py-4 px-6 rounded-2xl border border-white/5">
                                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technical Specs */}
                            <div className="glass-card p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Server size={120} />
                                </div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <ZapIcon className="w-6 h-6 text-secondary" /> Technical Specifications
                                </h3>
                                <ul className="space-y-6">
                                    {product.technicalSpecs.map((spec, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-400 text-sm leading-relaxed">{spec}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/#contact" className="btn-primary flex-1 text-center">Request Deployment</Link>
                                <Link href="/services" className="btn-outline flex-1 text-center">Consulting Services</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
