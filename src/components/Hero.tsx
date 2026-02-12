import React, { useEffect, useState } from "react";

const roles = ["Front-End Developer", "React Engineer", "UI Builder"];

const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting) {
            if (displayed.length < current.length) {
                timeout = setTimeout(
                    () => setDisplayed(current.slice(0, displayed.length + 1)),
                    80
                );
            } else {
                timeout = setTimeout(() => setDeleting(true), 2000);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(
                    () => setDisplayed(displayed.slice(0, -1)),
                    40
                );
            } else {
                timeout = setTimeout(() => {
                    setDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }, 0);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, roleIndex]);

    return (
        <section className="min-h-screen flex items-center bg-[hsl(222,47%,6%)] pt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 w-full">
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                    <p className="text-gray-400 text-lg mb-2">
                        I'm
                    </p>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-4 leading-tight">
                        Ali Anas Joshan
                    </h1>

                    <div className="h-10 sm:h-12 mb-6">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[hsl(199,89%,58%)]">
                            {displayed}
                        </span>
                        <span className="inline-block w-0.5 h-7 bg-[hsl(199,89%,58%)] ml-1 animate-[blink_1s_step-end_infinite]" />
                    </div>

                    <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                        I build clean, scalable web applications and focus on writing
                        structured, maintainable code that solves real problems.
                    </p>

                    <div className="flex gap-4 justify-center lg:justify-start">
                        <button className="px-6 py-3 rounded-lg bg-[hsl(199,89%,58%)] text-[hsl(222,47%,6%)] font-medium transition hover:opacity-90">
                            View My Work
                        </button>

                        <button className="px-6 py-3 rounded-lg border border-[hsl(199,89%,58%)] text-[hsl(199,89%,58%)] font-medium transition hover:bg-[hsl(199,89%,58%)] hover:text-[hsl(222,47%,6%)]">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="shrink-0">
                    <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden border-4 border-[hsl(199,89%,58%)]/30">
                        <img
                            src="src/assets/images/Me.jpeg"
                            alt="Ali Anas Joshan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
