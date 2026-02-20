import { useEffect, useState } from "react";

const ReadingProgress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const height = scrollHeight - clientHeight;
            if (height <= 0) return;
            setScroll((scrollTop / height) * 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
            <div
                className="h-1 bg-[hsl(199,89%,58%)] transition-all duration-150"
                style={{ width: `${scroll}%` }}
            />
        </div>
    );
};

export default ReadingProgress;