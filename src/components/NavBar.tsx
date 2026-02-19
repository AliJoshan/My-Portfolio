import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);


    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[hsl(222,44%,9%)]/80 backdrop-blur-md border-b border-white/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                <a
                    href="#"
                    className="text-xl font-bold text-gray-100 tracking-tight"
                >
                    <span className="text-[hsl(199,89%,58%)]">Portfolio</span>
                </a>

                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-gray-400 hover:text-[hsl(199,89%,58%)] transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-gray-100"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
            >
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setMobileOpen(false)}
                />

                <div
                    className={`absolute top-0 left-0 right-0 bg-[hsl(222,44%,9%)] border-b border-white/5
        transform transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <ul className="flex flex-col items-center gap-6 py-10">
                        {navLinks.map((link) => (
                            <li key={link.href} className="w-full text-center">
                                <a
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="
                            block w-full py-2
                            text-lg font-medium tracking-wide
                            text-gray-300
                            hover:text-[hsl(199,89%,58%)]
                            transition-colors
                        "
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}

                        <div className="w-12 h-px bg-white/10 my-2" />

                        {/* Optional CTA */}
                        <span className="text-xs text-gray-500 tracking-widest uppercase">
                            Let’s build something great
                        </span>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
