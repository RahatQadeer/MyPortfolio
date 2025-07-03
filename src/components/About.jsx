const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-1">
                <div className="bg-slate-800 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=face"
                    alt="Rahat working"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* TEXT ABOUT ME */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-orange-400">Me</span>
            </h2>
            <p className="text-gray-300 leading-relaxed font-normal text-base">
              I'm Rahat Qadeer, a final-year Software Engineering student at
              Riphah International University, passionate about creating
              innovative and user-focused digital solutions. I specialize in
              full-stack development using the MERN stack and React Native for
              high-performance, cross-platform mobile apps. I thrive on
              transforming complex challenges into elegant, scalable solutions
              while consistently expanding my tech skillset. Currently open to
              internships and junior developer roles where I can grow and
              contribute to real-world projects.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-orange-400 mb-2">
                  Academic Qualification
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">
                        B.Sc in Software Engineering
                      </p>
                      <p className="text-sm text-gray-400">
                        Riphah International University (2022 - 2026)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-orange-400 mb-2">Core Values</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Problem-solving mindset</li>
                  <li>• Curiosity & Innovation</li>
                  <li>• Collaborative teamwork</li>
                  <li>• Clean code practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
