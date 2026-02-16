"use client";

import Link from "next/link";
import { Linkedin, Mail, Twitter, Github } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary border-t border-white/10 pt-20 pb-10">
            <div className="section-padding">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs">Q</span>
                            </div>
                            <span>QoreLogic</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Engineering the future of intelligent systems for infrastructure,
                            finance, and enterprise automation.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://linkedin.com" className="text-gray-500 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://twitter.com" className="text-gray-500 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="https://github.com" className="text-gray-500 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-500">Products</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/#products" className="text-gray-400 hover:text-white transition-colors">Grid Intelligence</Link></li>
                            <li><Link href="/#products" className="text-gray-400 hover:text-white transition-colors">Predictive Engine</Link></li>
                            <li><Link href="/#products" className="text-gray-400 hover:text-white transition-colors">ESG Platform</Link></li>
                            <li><Link href="/#products" className="text-gray-400 hover:text-white transition-colors">AI Automation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-500">Academy</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/#academy" className="text-gray-400 hover:text-white transition-colors">Data Science</Link></li>
                            <li><Link href="/#academy" className="text-gray-400 hover:text-white transition-colors">Deep Learning</Link></li>
                            <li><Link href="/#academy" className="text-gray-400 hover:text-white transition-colors">AI Engineering</Link></li>
                            <li><Link href="/#academy" className="text-gray-400 hover:text-white transition-colors">Enrollment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-500">Contact</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="mailto:info@qorelogic.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" /> info@qorelogic.com
                                </Link>
                            </li>
                            <li className="text-gray-400">Headquarters: Lagos, Nigeria</li>
                            <li className="text-gray-400">Innovation Center: Nairobi, Kenya</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} QoreLogic. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
