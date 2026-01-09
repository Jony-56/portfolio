import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import {
  SiDotnet,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiPostman,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", icon: <SiDotnet />, color: "text-purple-400" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "Python", icon: <SiPython />, color: "text-green-400" },
        { name: "Java", icon: <FaJava />, color: "text-red-400" },
        { name: "C++", icon: <SiCplusplus />, color: "text-blue-400" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: ".NET Core", icon: <SiDotnet />, color: "text-purple-500" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
        { name: "MySQL / SQL", icon: <SiMysql />, color: "text-blue-400" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
        { name: "Figma", icon: <FaFigma />, color: "text-pink-400" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-12  text-gray-300"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-20">
        Skills & Technologies
      </h2>

      <div className="max-w-7xl mx-auto space-y-20">
        {categories.map((category, index) => (
          <div key={index}>
            {/* Category Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 text-center">
              {category.title}
            </h3>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center
                  hover:scale-110 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <div
                    className={`text-5xl mb-4 ${skill.color} group-hover:scale-125 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-lg font-medium text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
