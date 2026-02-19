import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={ref}
            className="py-28 bg-[hsl(222,47%,6%)]"
        >
            <div className="max-w-3xl mx-auto px-6">
                {/* Title */}
                <h2
                    className={`text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    About Me
                </h2>

                {/* Underline */}
                <div
                    className={`w-16 h-1 bg-[hsl(199,89%,58%)] mx-auto mb-12 rounded-full transition-all duration-700 delay-100 ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                />

                {/* Card */}
                <div
                    className={`rounded-2xl p-8 sm:p-10 border border-white/10 bg-[hsl(222,47%,8%)] transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="text-gray-400 leading-relaxed mb-5">
                        I'm a self-taught developer who started with strong curiosity and turned it into
                        disciplined learning and real project execution.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-5">
                        I’m currently a second-semester BCS student at Moraa Education Complex, strengthening my academic foundation in computer science while continuing practical development.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        My goal is to become a full stack developer focused on building scalable, impactful products that solve real-world problems at a global level.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
