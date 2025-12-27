import { Code, Smartphone, PenTool, Database } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    icon: <Code className="w-8 h-8 text-orange-500 " />,
    description:
      "Building responsive full-stack web applications with clean APIs and scalable architecture.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-orange-500" />,
    description:
      "Creating high-performance React Native apps for Android and iOS platforms.",
  },
  {
    title: "UI/UX & Web Design",
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
    description:
      "Designing modern, user-friendly interfaces in Figma and implementing them with Tailwind CSS.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-r from-slate-800   to-slate-900 py-20 text-white"
    >
      <div className="max-w-7xl   px-14">
        <h2 className="text-5xl font-bold text-center mb-2">
          My <span className="text-orange-400">Services</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 mt-5 text-lg">
          What I can do for you
        </p>

        <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-3 gap-7  ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 py-14 border-l border-t border-gray-400 rounded-xl p-6 hover:shadow-lg hover:shadow-orange-500/30 transition duration-300"
            >
              <div className="mb-8 mx-auto flex items-center justify-center w-16 h-16 bg-[#453228] rounded-full">
                {service.icon}
              </div>

              <h3 className="text-2xl text-center  font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
