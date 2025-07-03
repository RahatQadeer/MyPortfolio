import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

import { toast } from "sonner";

const Hero = ({ scrollToSection }) => {
  const handleDownloadCV = async () => {
    try {
      const response = await fetch(
        "https://i.postimg.cc/d3smz040/Rahat-Qadeer-Resume-1.png"
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Rahat_Qadeer_Resume.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast("CV download started!");
    } catch (error) {
      toast("Failed to download CV. Please try again.");
    }
  };

  const handleSocialClick = (platform) => {
    const urls = {
      github: "https://github.com/RahatQadeer",
      linkedin: "https://linkedin.com/in/rahat-qadeer",
      email: "mailto:rahatqadeerbhatti@gmail.com",
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* -----------------------TEXT------------------------ */}
          <div className="text-white space-y-6 animate-fade-in">
            <p className="text-orange-400 font-medium">WELCOME TO MY WORLD</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Rahat
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Final-year Software Engineering student passionate about building
              scalable digital solutions with modern technologies like React,
              Node.js, Express.js and MongoDB.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* View Portfolio Button */}
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-full px-8 py-3 font-semibold flex items-center gap-2"
              >
                View Portfolio <ArrowRight className="w-4 h-4" />
              </Button>

              {/* ----------------------DOWNLOAD CV BUTTON----------------------- */}
              <Button
                onClick={handleDownloadCV}
                className="bg-white text-orange-500 hover:bg-transparent hover:text-black border border-white/30 rounded-full px-8 py-3 font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <Download className="w-4 h-4" /> Download CV
              </Button>
            </div>
          </div>

          {/* ---------------------IMAGES AND SOCIAL LINKS-------------------- */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.postimg.cc/cC6Q43Wv/153121823-1.png"
                  alt="Rahat Qadeer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* ----------------SOCIAL ICONS---------------- */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
              <div
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
                onClick={() => handleSocialClick("github")}
              >
                <Github className="w-5 h-5 text-white" />
              </div>
              <div
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
                onClick={() => handleSocialClick("linkedin")}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
                onClick={() => handleSocialClick("email")}
              >
                <Mail className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
