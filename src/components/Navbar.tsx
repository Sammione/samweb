"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Resources", href: "/resources" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-primary/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">Q</span>
                    </div>
                    <span>QoreLogic</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/#contact" className="btn-primary py-2 text-sm">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-primary border-b border-white/10 p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        className="btn-primary text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
}
