import React from "react";
import agencyProject from "../assets/agency.png"; // replace with your actual image
import clothingBrand from "../assets/clothing.png"; // replace with your actual image

const Projects = () => {
    const projects = [
        {
            title: "Agency Website",
            description:
                "A premium agency website built with modern technologies, responsive design, and interactive sections to showcase services and portfolio.",
            image: agencyProject,
            tech: ["React", "Tailwind CSS", "JavaScript"],
            demo: "https://agency-website-i2xz72yn1-jony-56s-projects.vercel.app/",
            github: "#",
        },
        {
            title: "Clothing Brand Website",
            description:
                "An e-commerce clothing brand website featuring product listings, cart functionality, and a modern, clean UI for smooth shopping experience.",
            image: clothingBrand,
            tech: ["React", "Tailwind CSS", "JavaScript"],
            demo: "https://clothing-store100.vercel.app/",
            github: "#",
        },
    ];

    return (
        <section id="projects" className="py-2 pb-10 px-6 md:px-12 bg-gray-1200 text-gray-300">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-20">
                My Projects
            </h2>

            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="relative group bg-gray-800 rounded-4xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-500"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl"></div>

                        {/* Project Info */}
                        <div className="p-8 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-5">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300"
                                >
                                    Live Demo
                                </a>

                                {project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="text-gray-300 font-semibold hover:text-white"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Premium shine effect */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-4xl">
                            <div className="w-1/3 h-full bg-white/5 rotate-12 animate-[shine_3s_infinite]"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tailwind custom shine animation */}
            <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(12deg); }
          50% { transform: translateX(100%) rotate(12deg); }
          100% { transform: translateX(-100%) rotate(12deg); }
        }
        .animate-[shine_3s_infinite] {
          animation: shine 3s infinite linear;
        }
      `}</style>
        </section>
    );
};

export default Projects;
