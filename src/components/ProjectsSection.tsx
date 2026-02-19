import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

import progressionImg from "../assets/images/progression.png";
import careerHubImg from "../assets/images/careerhub.png";
import quizGameImg from "../assets/images/quiz-app.png";


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
        title: "Progression",
        description:
            "A progress tracking web app that helps users measure growth through a visual dashboard.",
        image: progressionImg,
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "#",
        githubUrl: "#",
        overview:
            "Progression is a front-end focused progress tracker built with vanilla web technologies. It allows users to track habits or goals over time using a clean dashboard-style UI.",
        features: [
            "Progress tracking dashboard",
            "Visual indicators for growth",
            "Simple and intuitive UI",
            "Fully responsive layout",
        ],
        challenges:
            "Designing a scalable dashboard structure using plain JavaScript while keeping the UI responsive and maintainable.",
    },
    {
        title: "CareerHub",
        description:
            "A modern job board platform that fetches and displays job listings from an external API.",
        image: careerHubImg,
        tags: ["React", "TypeScript", "Tailwind CSS", "API"],
        liveUrl: "#",
        githubUrl: "#",
        overview:
            "CareerHub is a job board application built with React and TypeScript. It consumes an external API to display real-time job listings with clean UI, filtering, and structured job details.",
        features: [
            "Job listings from external API",
            "Detailed job pages",
            "Saved jobs functionality",
            "Responsive and accessible UI",
        ],
        challenges:
            "Handling API data reliably, managing loading and error states, and structuring components for scalability.",
    },
    {
        title: "Quiz Game",
        description:
            "An interactive quiz game that fetches questions dynamically from an API.",
        image: quizGameImg,
        tags: ["React", "Tailwind CSS", "API"],
        liveUrl: "#",
        githubUrl: "#",
        overview:
            "A fun and interactive quiz game built with React. Questions are fetched dynamically from an external API, allowing for varied quiz sessions every time.",
        features: [
            "Dynamic quiz questions",
            "Score tracking",
            "Instant feedback on answers",
            "Responsive design",
        ],
        challenges:
            "Managing quiz state transitions cleanly and ensuring smooth UX while handling asynchronous data fetching.",
    },
];

const ProjectsSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<Project | null>(null);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setSelected(null), 300); // match transition duration
    };


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

    useEffect(() => {
        if (selected) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selected]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };

        if (selected) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [selected]);


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
                            onClick={() => {
                                setSelected(project);
                                requestAnimationFrame(() => setShowModal(true));
                            }}
                            style={{ transitionDelay: `${200 + idx * 100}ms` }}
                            className={`group cursor-pointer rounded-2xl overflow-hidden
                bg-[hsl(222,44%,9%)]
                border border-white/5
                hover:border-[hsl(199,89%,58%)]/30
                hover:shadow-[0_0_32px_hsl(199_89%_58%/0.15)]
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
                    onClick={closeModal}
                    className={`fixed inset-0 z-50 flex items-center justify-center px-4
      bg-black/70 backdrop-blur-sm
      transition-opacity duration-300
      ${showModal ? "opacity-100" : "opacity-0"}
    `}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`max-w-2xl w-full bg-[hsl(222,44%,9%)]
        border border-white/5 rounded-2xl overflow-hidden
        transform transition-all duration-300
        ${showModal ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}
      `}
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
                                    onClick={closeModal}
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
