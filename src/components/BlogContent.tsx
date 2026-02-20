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

        prose-headings:font-bold
        prose-headings:tracking-tight
        prose-headings:text-white

        prose-p:text-gray-300
        prose-p:leading-relaxed

        prose-li:text-gray-300
        prose-li:leading-relaxed

        prose-strong:text-white

        prose-blockquote:border-l-4
        prose-blockquote:border-[hsl(199,89%,58%)]
        prose-blockquote:pl-5
        prose-blockquote:text-gray-300

        prose-code:text-[hsl(199,89%,58%)]
        prose-code:bg-white/5
        prose-code:px-1.5
        prose-code:py-0.5
        prose-code:rounded

        prose-pre:bg-[hsl(222,44%,9%)]
        prose-pre:border
        prose-pre:border-white/5
        prose-pre:rounded-xl
      "
        >
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default BlogContent;
