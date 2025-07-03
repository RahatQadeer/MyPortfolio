import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* -----------------------LEFT SIDE --------------------------- */}
        <p className="text-sm text-gray-400 text-center ">
          © {new Date().getFullYear()} Rahat Qadeer. All rights reserved.
        </p>

        {/* -----------------------RIGHT SIDE SOCIAL LINKS --------------------------- */}
        <div className="flex gap-6">
          <a
            href="https://github.com/RahatQadeer"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/rahat-qadeer"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rahatqadeerbhatti@gmail.com"
            className="hover:text-orange-400 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
