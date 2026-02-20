import { useEffect, useRef, useState, useMemo } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { getAllBlogs } from "../lib/blog";
import type { BlogMeta } from "../lib/blog";

const BlogsSection = () => {
    const blogs = useMemo<BlogMeta[]>(() => getAllBlogs(), []);

    const blogCount = blogs.length;
    const isSingle = blogCount === 1;
    const isDouble = blogCount === 2;

    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15 }
        );

        const element = ref.current;
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
            observer.disconnect();
        };
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

                <div
                    className={`
    grid gap-8 max-w-6xl mx-auto
    md:grid-cols-2
    ${isSingle ? "lg:grid-cols-1 justify-items-center" : ""}
    ${isDouble ? "lg:grid-cols-2" : ""}
    ${blogCount >= 3 ? "lg:grid-cols-3" : ""}
  `}
                >
                    {blogs.map((blog, idx) => (
                        <a
                            key={blog.slug}
                            href={`/blog/${blog.slug}`}
                            style={{ transitionDelay: `${200 + idx * 120}ms` }}
                            className={`group relative rounded-2xl overflow-hidden
bg-[linear-gradient(180deg,hsl(222,44%,10%),hsl(222,44%,7%))]
border border-white/5
ring-1 ring-inset ring-[hsla(199,89%,58%,0.08)]

before:absolute before:inset-0 before:rounded-2xl
before:border before:border-transparent
before:bg-[linear-gradient(135deg,transparent,hsla(199,89%,58%,0.22),transparent)]
before:opacity-40 before:pointer-events-none

hover:before:opacity-100
hover:shadow-[0_0_0_1px_hsla(199,89%,58%,0.25),0_12px_40px_-12px_hsla(199,89%,58%,0.25)]
hover:-translate-y-1

transition-all duration-500 flex flex-col
${isSingle ? "max-w-md w-full" : ""}
${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-gray-100 mb-4 group-hover:text-[hsl(199,89%,58%)] transition-colors duration-300 line-clamp-2">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                    {blog.description}
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
