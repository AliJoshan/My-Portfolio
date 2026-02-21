const BlogPostSkeleton = () => {
    return (
        <main className="min-h-screen bg-[hsl(222,47%,6%)]">
            <div className="max-w-4xl mx-auto px-6 py-24 animate-pulse">

                {/* Back link */}
                <div className="h-4 w-32 bg-white/10 rounded mb-8" />

                {/* Title */}
                <div className="h-10 w-3/4 bg-white/10 rounded mb-4" />
                <div className="h-6 w-2/3 bg-white/10 rounded mb-8" />

                {/* Meta */}
                <div className="flex gap-6 mb-16">
                    <div className="h-4 w-24 bg-white/10 rounded" />
                    <div className="h-4 w-24 bg-white/10 rounded" />
                </div>

                {/* Image */}
                <div className="w-full max-w-3xl h-72 sm:h-80 bg-white/10 rounded-2xl mb-20 mx-auto" />

                {/* Content lines */}
                <div className="space-y-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-4 w-full bg-white/10 rounded"
                        />
                    ))}
                    <div className="h-4 w-4/5 bg-white/10 rounded" />
                    <div className="h-4 w-3/5 bg-white/10 rounded" />
                </div>

            </div>
        </main>
    );
};

export default BlogPostSkeleton;