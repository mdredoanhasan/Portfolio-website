"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useContactModal } from "./contactModal";

const navigation = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Education", href: "/#education" },
    { label: "Skills", href: "/#skills" },
    { label: "Project", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
];

const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openContactModal = useContactModal();

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-40 border-b border-white/6 bg-[#0a0a0f]/85 backdrop-blur-xl">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
            >
                <Link
                    href="/#home"
                    onClick={closeMenu}
                    className="text-base font-semibold tracking-tight text-white"
                >
                    Redoan Hasan<span className="text-cyan-300">.</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm text-gray-400 transition hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => {
                        closeMenu();
                        openContactModal();
                    }}
                    className="cta-primary hidden rounded-full px-5 py-2.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:inline-flex"
                >
                    Hire me
                </button>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-white/25 md:hidden"
                >
                    {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
            </nav>

            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-white/6 bg-[#0a0a0f] px-4 py-4 md:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={closeMenu}
                                className="rounded-lg px-3 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                closeMenu();
                                openContactModal();
                            }}
                            className="cta-primary mt-2 rounded-xl px-4 py-3 text-sm font-semibold"
                        >
                            Hire me
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navber;
