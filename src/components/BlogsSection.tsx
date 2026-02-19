import { useEffect, useRef, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";

interface Blog {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "What CS50 Taught Me About Thinking Like a Programmer",
        excerpt:
            "How Harvard's introductory CS course reshaped the way I approach problems — from debugging to algorithmic thinking.",
        date: "Feb 10, 2026",
        slug: "cs50-thinking-like-programmer",
    },
    {
        title: "Why I Chose React Over Other Frameworks",
        excerpt:
            "A practical breakdown of my decision to invest deeply in React and the ecosystem that makes it powerful for front-end work.",
        date: "Jan 25, 2026",
        slug: "why-react-over-other-frameworks",
    },
    {
        title: "Building in Public: Lessons From My First Portfolio",
        excerpt:
            "What I learned shipping a real project — from design decisions to deployment pitfalls and everything in between.",
        date: "Jan 12, 2026",
        slug: "building-in-public-first-portfolio",
    },
];

const BlogsSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="blogs"
            ref={ref}
            className="py-28 bg-[hsl(222,47%,6%)]"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2
                    className={`text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Blogs
                </h2>

                <div
                    className={`w-16 h-1 mx-auto mb-16 rounded-full bg-[hsl(199,89%,58%)] transition-all duration-700 delay-100 ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {blogs.map((blog, idx) => (
                        <a
                            key={blog.slug}
                            href={`/blog/${blog.slug}`}
                            style={{ transitionDelay: `${200 + idx * 120}ms` }}
                            className={`group relative rounded-2xl overflow-hidden
                bg-[linear-gradient(180deg,hsl(222,44%,10%),hsl(222,44%,7%))]
                border border-white/5
                hover:border-[hsl(199,89%,58%)]/30
                hover:-translate-y-1
                transition-all duration-500 flex flex-col
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        >
                            <div className="relative h-48 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_30%,hsl(199_89%_58%/0.25),transparent_60%)]" />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                                <span className="relative z-10 text-[hsl(199,89%,58%)] text-6xl font-bold opacity-30">
                                    {idx + 1}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-gray-100 mb-4 group-hover:text-[hsl(199,89%,58%)] transition-colors duration-300 line-clamp-2">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                        <Calendar size={13} />
                                        {blog.date}
                                    </span>

                                    <span className="flex items-center gap-1 text-sm text-[hsl(199,89%,58%)] font-medium
                    opacity-0 translate-x-1
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300">
                                        Read more <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
