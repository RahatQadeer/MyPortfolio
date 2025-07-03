import React from "react";

const skillsData = [
  {
    title: "Programming Languages",
    items: ["C++", "Java", "JavaScript", "Python", "PHP", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React.js", "React Native", "TailwindCSS", "Next.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Firebase", "MySQL"],
  },
  {
    title: "Design Tools",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    title: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-5xl font-bold text-center mb-4">
          Skills & <span className="text-orange-400 ">Expertise</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-orange-500/30 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    // className="bg-orange-900 text-white text-sm px-3 py-1 rounded-full"
                    className="bg-[#47352b] text-[#f3a57e] text-xs px-3 py-1 rounded-full"

                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
