import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 300;

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > SCROLL_THRESHOLD);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
                fixed bottom-6 right-6 z-50
                group
                flex items-center justify-center
                w-12 h-12 md:w-14 md:h-14
                rounded-full
                bg-[hsl(199,89%,58%)]
                text-white

                ring-1 ring-white/20
                shadow-[0_8px_20px_rgba(0,0,0,0.15)]

                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)]
                active:translate-y-0 active:shadow-[0_6px_16px_rgba(0,0,0,0.18)]

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-offset-2
                focus-visible:ring-[hsl(199,89%,58%)]
            "
        >
            <ArrowUp
                className="
                    w-5 h-5 md:w-6 md:h-6
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                "
            />
        </button>
    );
};

export default BackToTopButton;