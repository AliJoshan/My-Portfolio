import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const contacts = [
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
];

const ContactSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            ref={ref}
            className="py-28 section-gradient"
        >
            <div className="mx-auto max-w-2xl px-6 text-center">
                <h2
                    className={`text-3xl sm:text-4xl font-bold text-gray-100 mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Contact
                </h2>

                <div
                    className={`w-16 h-1 bg-[hsl(199,89%,58%)] mx-auto mb-12 rounded-full transition-all duration-700 delay-100 ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                />

                <p
                    className={`text-gray-400 mb-14 leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Feel free to reach out. I'm always open to discussing new projects and
                    opportunities.
                </p>

                {/* Contact cards */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {contacts.map((contact, idx) => {
                        const Icon = contact.icon;
                        return (
                            <a
                                key={contact.label}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ transitionDelay: `${300 + idx * 100}ms` }}
                                className={`group flex items-center gap-3 px-7 py-4 rounded-xl
                  bg-[hsl(222,44%,9%)]
                  border border-white/5
                  hover:border-[hsl(199,89%,58%)]/40
                  hover:shadow-[0_0_32px_hsl(199_89%_58%_/_0.15)]
                  transition-all duration-500
                  ${visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                    }`}
                            >
                                <Icon
                                    size={20}
                                    className="text-gray-400 group-hover:text-[hsl(199,89%,58%)] transition-colors"
                                />
                                <span className="text-sm text-gray-400 group-hover:text-gray-100 transition-colors">
                                    {contact.label}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
