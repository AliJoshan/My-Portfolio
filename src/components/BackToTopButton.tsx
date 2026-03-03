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
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
                fixed bottom-6 right-6 z-50
                flex items-center justify-center
                w-12 h-12 md:w-14 md:h-14
                rounded-full
                bg-[hsl(199,89%,58%)]
                text-white
                shadow-lg
                transition-all duration-300
                hover:scale-110 hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(199,89%,58%)]
            "
        >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
    );
};

export default BackToTopButton;