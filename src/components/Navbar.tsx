"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleScrollSpy = () => {
            const sections = ["home", "services", "about", "resources", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScrollSpy);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScrollSpy);
        };
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
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-3">
                    <div className="w-10 h-10 relative">
                        <Image
                            src="/logo.png"
                            alt="QoreLogic Logo"
                            fill
                            className="object-contain mix-blend-screen brightness-110"
                            priority
                        />
                    </div>
                    <span>QoreLogic</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-all duration-300 relative group",
                                activeSection === link.name.toLowerCase().replace(" us", "")
                                    ? "text-secondary"
                                    : "text-gray-300 hover:text-white"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300",
                                activeSection === link.name.toLowerCase().replace(" us", "")
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            )} />
                        </Link>
                    ))}
                    <Link href="/#contact" className="btn-primary py-2 text-sm relative overflow-hidden group">
                        <span className="relative z-10">Contact Us</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
