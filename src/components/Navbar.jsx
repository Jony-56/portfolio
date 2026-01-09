import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl  transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-orange-400 to-primary bg-clip-text text-transparent">
            J
          </span>
          ony
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer transition hover:text-white
              after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
              after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-orange-500 to-primary px-6 py-2 rounded-full font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 transition"
        >
          Hire Me
        </a>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/50 backdrop-blur-xl border-t border-white/20 transition-colors duration-300">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                className="hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-gradient-to-r from-orange-500 to-primary px-6 py-2 rounded-full font-semibold shadow-lg shadow-orange-500/30"
            >
              Hire Me
            </a>
          </ul>
        </div>
      )}

      {/* Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
