const Navbar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Services",
    "Portfolio",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* -----------------------LOGO--------------------------------*/}
          <div className="text-2xl font-bold text-white">
            Rahat<span className="text-orange-400">.</span>
          </div>

          {/* -----------------------NAV ITEMS--------------------------- */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item === "Contact" ? (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all"
                >
                  {item}
                </button>
              ) : (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-orange-400"
                      : "text-white/80"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
