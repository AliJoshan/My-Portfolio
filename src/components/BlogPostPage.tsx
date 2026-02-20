import { useParams } from "react-router-dom";
import { getBlogBySlug, getRelatedBlogs } from "../lib/blog";
import ReadingProgress from "../components/ReadingProgress";
import BlogContent from "../components/BlogContent";

const BlogPostPage = () => {
    const { slug } = useParams();
    const blog = slug ? getBlogBySlug(slug) : undefined;

    if (!blog) return <p className="text-center mt-20 text-gray-400">Blog not found</p>;

    const related = getRelatedBlogs(blog.meta.slug);

    return (
        <>
            <ReadingProgress />

            <main className="bg-[hsl(222,47%,6%)] min-h-screen">
                <div className="max-w-4xl mx-auto px-6 py-20">

                    {/* Page header (NOT prose) */}
                    <header className="mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-2">
                            {blog.meta.title}
                        </h1>
                        <p className="text-sm text-gray-400">
                            {blog.meta.date}
                        </p>
                    </header>

                    <BlogContent content={blog.content} />

                    {/* Related blogs */}
                    {related.length > 0 && (
                        <section className="mt-20">
                            <h2 className="text-2xl font-semibold text-gray-100 mb-6">
                                Related Articles
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {related.map(b => (
                                    <a
                                        key={b.slug}
                                        href={`/blog/${b.slug}`}
                                        className="group rounded-xl overflow-hidden border border-white/5 bg-[hsl(222,44%,8%)] hover:border-[hsl(199,89%,58%)] transition-all p-4"
                                    >
                                        <img
                                            src={b.image}
                                            alt={b.title}
                                            className="w-full h-36 object-cover rounded-lg mb-4"
                                        />
                                        <h3 className="font-semibold text-gray-100 group-hover:text-[hsl(199,89%,58%)]">
                                            {b.title}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {b.description}
                                        </p>
                                    </a>
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