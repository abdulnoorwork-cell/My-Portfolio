import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Code2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "Tailwind CSS",
    "Wordpress"
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-[#0D0D0D]
        text-white
        overflow-hidden
        flex
        items-center
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-20
            left-[-150px]
            w-[400px]
            h-[400px]
            bg-[#E46254]/10
            rounded-full
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            right-[-100px]
            w-[450px]
            h-[450px]
            bg-[#E46254]/10
            rounded-full
            blur-[130px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 py-28 ">

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center mt-5 sm:mt-9 2xl:mt-18">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Availability Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-[#E46254]/10
                border
                border-[#E46254]/20
                text-[#E46254]
                text-sm
                font-semibold
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#E46254] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E46254]" />
              </span>

              Available for freelance projects
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                mt-7
                text-5xl
                sm:text-6xl
                xl:text-7xl
                font-black
                tracking-tight
                leading-[0.95]
              "
            >
              Building
              <span className="block text-[#E46254]">
                Digital
              </span>
              Experiences.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="
                text-gray-400
                text-lg
                sm:text-xl
                leading-relaxed
                max-w-2xl
                mt-7
              "
            >
              I'm{" "}
              <span className="text-white font-semibold">
                Abdul Noor
              </span>
              , a Full Stack Web Developer creating fast,
              responsive, and scalable web applications using
              modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="flex flex-wrap gap-4 mt-9"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.04,
                  x: 3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  bg-[#E46254]
                  hover:bg-[#ff7666]
                  px-7
                  sm:py-4 py-3.5
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  gap-2
                  transition-colors
                "
              >
                View My Work
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="/Abdul-Noor-CV.pdf"
                download
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  border
                  border-white/10
                  hover:border-[#E46254]
                  px-7
                  sm:py-4 py-3.5
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  gap-2
                  transition-colors
                "
              >
                Download CV
                <Download size={18} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="flex items-center gap-3 mt-9"
            >
              <span className="text-gray-600 text-sm mr-2">
                Follow
              </span>

              <motion.a
                href="https://github.com/abdulnoorwork-cell"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                className="
                  w-10
                  h-10
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
                <FaGithub size={19} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/abdul-noor40056/"
                target="_blank"
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                className="
                  w-10
                  h-10
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
                <FaLinkedin size={19} />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/profile.php?id=61566454835118"
                target="_blank"
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                className="
                  w-10
                  h-10
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
                <FaFacebookF size={19} />
              </motion.a>

            </motion.div>

          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Outer Glow */}
            <div
              className="
                absolute
                w-[330px]
                h-[330px]
                sm:w-[430px]
                sm:h-[430px]
                rounded-full
                bg-[#E46254]/10
                blur-[90px]
              "
            />

            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                w-full
                max-w-[500px]
                aspect-square
                rounded-[2rem]
                bg-[#111111]
                border
                border-white/10
                shadow-2xl
                overflow-hidden
              "
            >

              {/* Card Grid */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.04]
                  bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                  bg-[size:35px_35px]
                "
              />

              {/* Code Window */}
              <div
                className="
                  absolute
                  top-[12%]
                  left-[8%]
                  right-[8%]
                  bg-[#0D0D0D]
                  border
                  border-white/10
                  rounded-2xl
                  overflow-hidden
                  shadow-xl
                "
              >
                {/* Window Header */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    border-b
                    border-white/10
                  "
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />

                  <span className="ml-3 text-xs text-gray-600">
                    developer.jsx
                  </span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-sm leading-7">

                  <p className="text-gray-600">
                    {"// Build something amazing"}
                  </p>

                  <p>
                    <span className="text-[#E46254]">
                      const
                    </span>{" "}
                    <span className="text-white">
                      developer
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-gray-500">
                      name:
                    </span>{" "}
                    <span className="text-green-400">
                      "Abdul Noor"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-gray-500">
                      role:
                    </span>{" "}
                    <span className="text-green-400">
                      "Full Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-gray-500">
                      passion:
                    </span>{" "}
                    <span className="text-green-400">
                      "Web Development"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-gray-500">
                      available:
                    </span>{" "}
                    <span className="text-[#E46254]">
                      true
                    </span>
                  </p>

                  <p>
                    {"};"}
                  </p>

                  <p className="mt-2">
                    <span className="text-[#E46254]">
                      export default
                    </span>{" "}
                    developer;
                  </p>

                </div>
              </div>

              {/* Floating Code Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[14%]
                  left-[8%]
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#E46254]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-[#E46254]/20
                "
              >
                <Code2 size={30} />
              </motion.div>

              {/* Floating Sparkle */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-[15%]
                  right-[8%]
                  w-12
                  h-12
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-[#E46254]
                "
              >
                <Sparkles size={22} />
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[14%]
                  right-[8%]
                  bg-[#171717]
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                  shadow-xl
                "
              >
                <p className="text-2xl font-black text-[#E46254]">
                  2+
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Years Experience
                </p>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
          className="sm:mt-16 mt-14"
        >
          <p className="text-center text-sm text-gray-600 mb-5">
            TECHNOLOGIES I WORK WITH
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 1 + index * 0.08,
                }}
                whileHover={{
                  y: -4,
                  borderColor: "#E46254",
                }}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/[0.03]
                  border
                  border-white/10
                  text-sm
                  text-gray-400
                  hover:text-white
                  transition-colors
                "
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 1.3,
          }}
          className="
            absolute
            bottom-7
            left-1/2
            -translate-x-1/2
            flex
            flex-col
            items-center
            gap-2
            text-gray-600
            hover:text-[#E46254]
            transition-colors
          "
        >
          <span className="text-xs tracking-widest uppercase">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>

      </div>
    </section>
  );
};

export default Hero;