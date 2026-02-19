import { useEffect, useRef, useState } from "react";
import {
    Code2,
    FileCode,
    Braces,
    FileType,
    Atom,
    Terminal,
    GitBranch,
    Github,
    Zap,
    Figma,
    Globe,
} from "lucide-react";

const categories = [
    {
        title: "Front-End",
        skills: [
            { name: "HTML", icon: FileCode },
            { name: "CSS", icon: FileType },
            { name: "JavaScript (ES6+)", icon: Braces },
            { name: "TypeScript", icon: Code2 },
            { name: "React", icon: Atom },
            { name: "Tailwind", icon: Zap }, // new skill added
        ],
    },
    {
        title: "Programming",
        skills: [{ name: "Python", icon: Terminal }],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: Github },
            { name: "Vite", icon: Zap },
            { name: "Figma", icon: Figma },
            { name: "REST APIs", icon: Globe },
        ],
    },
];

const SkillsSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={ref} className="py-28 section-gradient">
            <div className="max-w-5xl mx-auto px-6">
                <h2
                    className={`text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Skills
                </h2>

                <div
                    className={`w-16 h-1 bg-[hsl(199,89%,58%)] mx-auto mb-16 rounded-full transition-all duration-700 delay-100 ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                />

                <div className="max-w-3xl mx-auto space-y-14">
                    {categories.map((cat, catIdx) => (
                        <div
                            key={cat.title}
                            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${200 + catIdx * 120}ms` }}
                        >
                            <div className="mb-5 inline-block px-3 py-1 rounded-lg bg-[hsl(199,89%,58%)/10]">
                                <span className="text-sm tracking-wider uppercase text-[hsl(199,89%,58%)] font-semibold">
                                    {cat.title}
                                </span>
                                <div className="w-8 h-0.5 bg-[hsl(199,89%,58%)] mt-2 rounded-full" />
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="
                        flex items-center gap-2
                        px-4 py-2.5 rounded-lg
                        bg-[hsl(222,44%,9%)]
                        border border-white/5
                        text-sm text-gray-400
                        hover:border-[hsl(199,89%,58%)]/40
                        hover:text-gray-100
                        hover:scale-105
                        hover:shadow-[0_0_18px_hsl(199_89%_58%/0.15)]
                        transition-all duration-300
                        cursor-default
                      "
                                        >
                                            <Icon size={16} className="text-[hsl(199,89%,58%)]/70" />
                                            <span>{skill.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
