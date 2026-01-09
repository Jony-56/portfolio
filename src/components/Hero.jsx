import React from "react";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center justify-center px-6 md:px-10 overflow-hidden bg-gray-900"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-30 animate-gradient blur-3xl pointer-events-none"></div>

      {/* Floating Orbs */}
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-32 -left-32 animate-float pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-32 -right-32 animate-float-slow pointer-events-none"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-primary uppercase tracking-widest animate-slideIn opacity-0">
            Hello!
          </p>

          <h1 className="text-4xl md:text-5xl font-bold animate-slideIn opacity-0">
            I'm <span className="text-primary">Toriquil Islam Jony</span>
          </h1>

          <h2 className="text-xl text-gray-300 animate-slideIn opacity-0">
            Software Developer | .NET & Web
          </h2>

          <p className="text-gray-400 max-w-md animate-slideIn opacity-0">
            I build modern, scalable web applications using .NET, React,
            and clean, premium UI design.
          </p>

          {/* LET'S TALK BUTTON */}
          <a
            href="#contact"
            className="inline-block bg-primary px-7 py-3 border border-gray-300 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slideIn opacity-0"
          >
            Let’s Talk
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse"></div>

            {/* Profile */}
            <img
              src={profile}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl"
            />

            {/* Gloss Effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute w-1/2 h-1/2 bg-white/20 rounded-full blur-xl rotate-12 animate-gloss"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gloss {
          0% { transform: translateX(-120%) rotate(12deg); }
          50% { transform: translateX(120%) rotate(12deg); }
          100% { transform: translateX(-120%) rotate(12deg); }
        }
        .animate-gloss {
          animation: gloss 4s linear infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 1s forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
