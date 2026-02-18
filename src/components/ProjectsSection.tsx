import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    overview: string;
    features: string[];
    challenges: string;
}

const projects: Project[] = [
    {
        title: "Analytics Dashboard",
        description:
            "A real-time analytics dashboard with data visualization and responsive charts.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
        overview:
            "A comprehensive analytics dashboard designed to visualize complex datasets using interactive charts and real-time updates.",
        features: [
            "Interactive charts & graphs",
            "Real-time data updates",
            "Responsive layout",
            "Dark theme support",
        ],
        challenges:
            "Optimizing chart re-renders while maintaining smooth animations and performance across devices.",
    },
    {
        title: "E-Commerce Store",
        description:
            "A modern e-commerce front-end with product listing, cart, and checkout flow.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
        tags: ["React", "TypeScript", "REST API", "CSS Modules"],
        liveUrl: "#",
        githubUrl: "#",
        overview:
            "A fully responsive e-commerce interface with product browsing, cart management, and a streamlined checkout experience.",
        features: [
            "Product search & filtering",
            "Shopping cart",
            "Checkout flow",
            "Responsive design",
        ],
        challenges:
            "Managing complex cart state across components while keeping UI behavior consistent.",
    },
    {
        title: "Task Manager",
        description:
            "A kanban-style task manager with drag-and-drop and collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
        overview:
            "A productivity-focused task manager with kanban boards and drag-and-drop task organization.",
        features: [
            "Kanban board layout",
            "Drag-and-drop tasks",
            "Status tracking",
            "Team views",
        ],
        challenges:
            "Implementing smooth drag-and-drop interactions with reliable state synchronization.",
    },
];

const ProjectsSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<Project | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="py-28 section-gradient" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <h2
                    className={`text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Projects
                </h2>

                <div
                    className={`w-16 h-1 bg-[hsl(199,89%,58%)] mx-auto mb-16 rounded-full transition-all duration-700 delay-100 ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            onClick={() => setSelected(project)}
                            style={{ transitionDelay: `${200 + idx * 100}ms` }}
                            className={`group cursor-pointer rounded-2xl overflow-hidden
                bg-[hsl(222,44%,9%)]
                border border-white/5
                hover:border-[hsl(199,89%,58%)]/30
                hover:shadow-[0_0_32px_hsl(199_89%_58%_/_0.15)]
                transition-all duration-500
                ${visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2.5 py-1 rounded-full
                        bg-[hsl(222,44%,12%)]
                        text-[hsl(199,89%,58%)]
                        font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 text-sm">
                                    <a
                                        href={project.liveUrl}
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-1.5 text-[hsl(199,89%,58%)] hover:opacity-80 transition"
                                    >
                                        <ExternalLink size={14} /> Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-1.5 text-gray-400 hover:text-[hsl(199,89%,58%)] transition"
                                    >
                                        <Github size={14} /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <div
                    onClick={() => setSelected(null)}
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-2xl w-full bg-[hsl(222,44%,9%)] border border-white/5 rounded-2xl overflow-hidden animate-fade-up"
                    >
                        <img
                            src={selected.image}
                            alt={selected.title}
                            className="w-full h-64 object-cover"
                        />

                        <div className="p-6 sm:p-8">
                            <h3 className="text-2xl font-bold text-gray-100 mb-4">
                                {selected.title}
                            </h3>

                            <p className="text-gray-400 mb-5 leading-relaxed">
                                {selected.overview}
                            </p>

                            <h4 className="text-sm font-semibold uppercase text-[hsl(199,89%,58%)] mb-2">
                                Features
                            </h4>
                            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-5">
                                {selected.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>

                            <h4 className="text-sm font-semibold uppercase text-[hsl(199,89%,58%)] mb-2">
                                Challenges
                            </h4>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {selected.challenges}
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href={selected.liveUrl}
                                    className="px-5 py-2.5 rounded-lg bg-[hsl(199,89%,58%)] text-[hsl(222,47%,6%)] text-sm font-medium hover:opacity-90 transition"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={selected.githubUrl}
                                    className="px-5 py-2.5 rounded-lg border border-white/10 text-gray-100 text-sm font-medium hover:border-[hsl(199,89%,58%)] transition"
                                >
                                    GitHub
                                </a>
                                <button
                                    onClick={() => setSelected(null)}
                                    className="ml-auto text-gray-400 hover:text-gray-100 transition text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
