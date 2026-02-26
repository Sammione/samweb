"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Twitter, Github } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary border-t border-white/10 pt-20 pb-10">
            <div className="section-padding">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/logo.png"
                                    alt="QoreLogic Logo"
                                    fill
                                    className="object-contain"
                                />
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
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-500">Services</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Enterprise AI</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Data Strategy</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Web Systems</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Strategic Research</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-500">Company</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Mission</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">The Founder</Link></li>
                            <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
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
