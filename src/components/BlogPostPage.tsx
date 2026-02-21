import { useParams, Link } from "react-router-dom";
import { getBlogBySlug, getRelatedBlogs } from "../lib/blog";
import ReadingProgress from "../components/ReadingProgress";
import BlogContent from "../components/BlogContent";

function calculateReadingTime(content: string) {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
}


const BlogPostPage = () => {
    const { slug } = useParams();
    const blog = slug ? getBlogBySlug(slug) : undefined;

    if (!blog)
        return (
            <p className="text-center mt-20 text-gray-400">
                Blog not found
            </p>
        );

    const moreArticles = getRelatedBlogs(blog.meta.slug, 2);

    return (
        <>
            <ReadingProgress />

            <main className="min-h-screen bg-[hsl(222,47%,6%)]">
                <div className="max-w-4xl mx-auto px-6 py-24">

                    <Link
                        to="/#blogs"
                        className="
      inline-flex items-center gap-2
      text-sm text-gray-400
      hover:text-[hsl(199,89%,58%)]
      transition-colors
      mb-8
    "
                    >
                        ← Back to Blogs
                    </Link>

                    <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        {blog.meta.title}
                    </h1>

                    {blog.meta.description && (
                        <p className="text-lg text-gray-400 mb-6 max-w-2xl leading-relaxed">
                            {blog.meta.description}
                        </p>
                    )}

                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-16">
                        <span className="flex items-center gap-2">
                            📅 {blog.meta.date}
                        </span>
                        <span className="flex items-center gap-2">
                            ⏱ {calculateReadingTime(blog.content)}
                        </span>
                    </div>

                    {blog.meta.image && (
                        <div className="relative mb-20 flex justify-center">
                            {/* Glow */}
                            <div className="
      absolute
      -inset-10
      bg-[radial-gradient(circle_at_center,hsl(199,89%,58%,0.15),transparent_70%)]
      blur-3xl
      opacity-60
    " />

                            <img
                                src={blog.meta.image}
                                alt={blog.meta.title}
                                className="
        relative
        w-full
        max-w-3xl
        h-72 sm:h-80
        object-cover
        rounded-2xl
        border border-white/5
        shadow-lg
      "
                            />
                        </div>
                    )}


                    <BlogContent content={blog.content} />

                    {moreArticles.length > 0 && (
                        <section className="mt-32">
                            <h2 className="text-3xl font-semibold text-white mb-12">
                                More Articles
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                {moreArticles.map((b) => (
                                    <Link
                                        key={b.slug}
                                        to={`/blog/${b.slug}`}
                                        className="
                        group
                        relative
                        rounded-3xl
                        overflow-hidden
                        border
                        border-white/5
                        bg-[hsl(222,44%,8%)]
                        transition-all
                        duration-500
                        hover:border-[hsl(199,89%,58%)]
                    "
                                    >
                                        {/* Image */}
                                        <div className="relative h-56">
                                            <img
                                                src={b.image}
                                                alt={b.title}
                                                className="
                                absolute inset-0
                                w-full h-full
                                object-cover
                                opacity-80
                                group-hover:opacity-100
                                transition-opacity
                            "
                                            />

                                            {/* Dark overlay */}
                                            <div className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/80
                            via-black/40
                            to-transparent
                        " />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="
                            text-xl
                            font-semibold
                            text-white
                            mb-2
                            group-hover:text-[hsl(199,89%,58%)]
                            transition-colors
                        ">
                                                {b.title}
                                            </h3>

                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                {b.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </main>
        </>
    );
};

export default BlogPostPage;
