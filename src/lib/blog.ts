import fm from "front-matter";

export interface BlogMeta {
    title: string;
    date: string;
    description: string;
    image: string;
    slug: string;
}

export interface Blog {
    meta: BlogMeta;
    content: string;
}

const modules = import.meta.glob("../blogs/*.md", {
    eager: true,
    query: "?raw",
});

function extractSlug(path: string): string {
    return path.split("/").pop()?.replace(".md", "") || "";
}

const allBlogs: Blog[] = Object.entries(modules).map(([path, mod]) => {
    const file = mod as { default: string };
    const parsed = fm<BlogMeta>(file.default);
    const slug = extractSlug(path);

    return {
        meta: {
            slug,
            title: parsed.attributes.title,
            date: parsed.attributes.date,
            description: parsed.attributes.description,
            image: parsed.attributes.image,
        },
        content: parsed.body,
    };
});

allBlogs.sort(
    (a, b) =>
        new Date(b.meta.date).getTime() -
        new Date(a.meta.date).getTime()
);

export function getAllBlogs(): BlogMeta[] {
    return allBlogs.map((blog) => blog.meta);
}

export function getBlogBySlug(slug: string): Blog | null {
    return allBlogs.find((blog) => blog.meta.slug === slug) || null;
}
