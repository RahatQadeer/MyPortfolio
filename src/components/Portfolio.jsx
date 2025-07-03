import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E‑commerce Web App",
    description:
      "Full‑stack MERN application with user authentication, payment integration, and admin dashboard",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop", // ✅ Updated image URL
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/RahatQadeer/Ecommerce-MERN-stack-project",
  },
  {
    title: "Inventory Management App",
    description:
      "Cross‑platform mobile app built with React Native for real‑time inventory tracking",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", // replace with your image URL
    tech: ["React Native", "Firebase", "Redux"],
    link: "https://github.com/RahatQadeer/Inventory-Management-React-native-app",
  },
  {
    title: "Smart Home Automation UI",
    description:
      "Modern UI/UX design for IoT home automation system with interactive prototypes",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop", // replace with your image URL
    tech: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.figma.com/design/ZeQnKeU3ioo4YPUxXr5u6s/Mobile-SHAS?node-id=0-1&p=f&t=EjY0h0RAORtkDky5-0",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold mb-4">
          My <span className="text-orange-400">Portfolio</span>
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Recent projects that showcase my skills
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-slate-800 rounded-xl overflow-hidden relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* ----------------------EXTERNAL LINK----------------------- */}
              <div
                onClick={() => window.open(project.link, "_blank")}
                className="absolute top-4 right-4 bg-white/20 hover:bg-orange-500 p-2 rounded-full cursor-pointer transition"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </div>

              {/* --------------------------CONTENT------------------------ */}
              <div className="p-6 space-y-3 text-left">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#47352b] text-[#f3a57e] text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
