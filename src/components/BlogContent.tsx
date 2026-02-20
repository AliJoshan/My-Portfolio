import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type BlogContentProps = {
    content: string;
};

const BlogContent = ({ content }: BlogContentProps) => {
    return (
        <article
            className="
                prose prose-invert prose-lg
                max-w-none
                prose-headings:text-gray-100
                prose-p:text-gray-300
                prose-li:text-gray-300
                prose-strong:text-gray-100
                prose-blockquote:text-gray-300
                prose-blockquote:border-l-[hsl(199,89%,58%)]
                prose-code:text-[hsl(199,89%,58%)]
                prose-a:text-[hsl(199,89%,58%)]
                prose-a:no-underline hover:prose-a:underline
            "
        >
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default BlogContent;