import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto w-full px-5 lg:px-8">
        <div className="mt-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 sm:py-4.5 py-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-black tracking-wider text-white"
          >
            ABDUL<span className="text-[#E46254]">CODES</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-300 hover:text-white transition duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-[#E46254] hover:bg-[#ff7666] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-[500px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#E46254] text-center text-white py-3 rounded-xl font-semibold"
            >
              Hire Me
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;