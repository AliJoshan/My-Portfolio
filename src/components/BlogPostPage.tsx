import { useParams, Link } from "react-router-dom";
import { getBlogBySlug, getRelatedBlogs } from "../lib/blog";
import ReadingProgress from "../components/ReadingProgress";
import BlogContent from "../components/BlogContent";

const BlogPostPage = () => {
    const { slug } = useParams();
    const blog = slug ? getBlogBySlug(slug) : undefined;

    if (!blog)
        return (
            <p className="text-center mt-20 text-gray-400">
                Blog not found
            </p>
        );

    const related = getRelatedBlogs(blog.meta.slug);

    return (
        <>
            <ReadingProgress />

            <main className="min-h-screen bg-[hsl(222,47%,6%)]">
                <div className="max-w-4xl mx-auto px-6 py-24">

                    {/* Date */}
                    <p className="text-sm text-gray-400 mb-4 tracking-wide">
                        {blog.meta.date}
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                        {blog.meta.title}
                    </h1>

                    {/* Description */}
                    {blog.meta.description && (
                        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
                            {blog.meta.description}
                        </p>
                    )}

                    {/* Hero Image */}
                    {blog.meta.image && (
                        <div className="mb-16">
                            <img
                                src={blog.meta.image}
                                alt={blog.meta.title}
                                className="
                  w-full
                  rounded-2xl
                  border border-white/5
                  shadow-xl
                  object-cover
                "
                            />
                        </div>
                    )}

                    {/* Content */}
                    <BlogContent content={blog.content} />

                    {/* Related Articles */}
                    {related.length > 0 && (
                        <section className="mt-24 border-t border-white/5 pt-16">
                            <h2 className="text-2xl font-semibold text-white mb-10">
                                Related Articles
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {related.map((b) => (
                                    <Link
                                        key={b.slug}
                                        to={`/blog/${b.slug}`}
                                        className="
                      group
                      bg-[hsl(222,44%,9%)]
                      border border-white/5
                      rounded-2xl
                      p-5
                      transition-all
                      duration-300
                      hover:border-[hsl(199,89%,58%)]
                      hover:shadow-lg
                    "
                                    >
                                        <img
                                            src={b.image}
                                            alt={b.title}
                                            className="
                        w-full
                        h-44
                        object-cover
                        rounded-xl
                        mb-4
                      "
                                        />

                                        <h3 className="
                      text-lg
                      font-semibold
                      text-white
                      group-hover:text-[hsl(199,89%,58%)]
                      transition-colors
                    ">
                                            {b.title}
                                        </h3>

                                        <p className="text-sm text-gray-400 mt-2">
                                            {b.description}
                                        </p>
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
