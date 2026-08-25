import React from "react";
import { motion } from "motion/react";
import {
  ArrowUp,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "E-Commerce Websites",
    "Admin Dashboards",
    "Business Websites",
    "Wordpress",
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      name: "GitHub",
      href: "https://github.com/abdulnoorwork-cell",
    },
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      href: "#",
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#111111] text-white overflow-hidden">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-12">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-1"
          >
            <a
              href="#home"
              className="inline-block text-3xl font-black tracking-tight"
            >
              ABDUL
              <span className="text-[#E46254]">CODES</span>
            </a>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Full Stack Web Developer creating modern,
              responsive, scalable, and high-performance
              web applications.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-[#E46254]
                    hover:border-[#E46254]
                    transition-colors
                  "
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <h3 className="text-lg font-bold mb-6">
              Navigation
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                      text-gray-400
                      hover:text-[#E46254]
                      transition-colors
                      inline-flex
                      items-center
                      gap-1
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h3 className="text-lg font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="
                    text-gray-400
                    hover:text-white
                    transition-colors
                    cursor-default
                  "
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <h3 className="text-lg font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:abdulnoorwork@gmail.com"
                className="
                  flex
                  items-start
                  gap-3
                  text-gray-400
                  hover:text-[#E46254]
                  transition-colors
                "
              >
                <Mail
                  size={20}
                  className="text-[#E46254] mt-0.5 shrink-0"
                />

                <span className="break-all">
                  abdulnoorwork@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin
                  size={20}
                  className="text-[#E46254] mt-0.5 shrink-0"
                />

                <span>
                  Haripur, Pakistan
                </span>
              </div>

            </div>

            {/* Availability */}
            <div className="mt-7 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#E46254] opacity-75 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E46254]" />
              </span>

              <span className="text-sm text-gray-400">
                Available for freelance work
              </span>
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-white font-medium">
                ABDULCODES
              </span>
              . All rights reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Designed & Built with{" "}
              <span className="text-[#E46254]">
                React.js
              </span>
            </p>

            {/* Back To Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              aria-label="Back to top"
              className="
                w-11
                h-11
                rounded-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                text-gray-400
                hover:text-white
                hover:border-[#E46254]
                hover:bg-[#E46254]/10
                transition-colors
              "
            >
              <ArrowUp size={19} />
            </motion.button>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;