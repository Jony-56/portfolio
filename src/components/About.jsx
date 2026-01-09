import React from "react";
import cv from "../assets/Jony_CV.pdf";


const About = () => {
    return (
        <section
            id="about"
            className="relative py-32 overflow-hidden"
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 opacity-20 animate-gradient blur-3xl pointer-events-none"></div>

            {/* Floating Particles */}
            <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -top-32 -left-32 animate-float pointer-events-none"></div>
            <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -bottom-32 -right-32 animate-float-slow pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">

                {/* SMALL TITLE */}
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-slideIn opacity-0">
                    About
                </p>

                {/* MAIN TITLE */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight animate-slideIn opacity-0">
                    Passionate about building <br />
                    <span className="text-primary">clean & scalable software</span>
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slideIn opacity-0">
                    I’m an undergraduate Computer Science student at AIUB with a strong
                    interest in .NET development, modern web technologies, and system
                    design. I enjoy creating user-focused applications, learning new
                    tools, and solving real-world problems through code.
                </p>

                {/* BUTTONS */}
                <div className="flex justify-center gap-6 flex-wrap">
                    {/* HIRE ME */}
                    <button  className="bg-gradient-to-r from-orange-500 to-primary px-6 py-3 rounded-full font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slideIn opacity-0">
                      <a href="#contact">Hire Me</a>  
                    </button>

                    {/* DOWNLOAD CV */}
                    <a
                        href={cv}
                        download="Toriquil_Islam_Jony_CV.pdf"
                        className="border border-primary px-6 py-3 rounded-full font-semibold text-primary
             hover:bg-gray-700 hover:text-white hover:scale-105
             transition-all duration-300 animate-slideIn opacity-0"
                    >
                        Download CV
                    </a>

                </div>
            </div>

            {/* Tailwind Custom Animations */}
            <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 12s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-float-slow { animation: float 10s infinite ease-in-out; }

        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn { animation: slideIn 1s forwards; }
      `}</style>
        </section>
    );
};

export default About;
