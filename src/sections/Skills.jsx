import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Database,
  Server,
  Palette,
  GitBranch,
  Globe,
  Zap,
  Wrench,
} from "lucide-react";

const skills = [
  {
    name: "HTML",
    level: 95,
    icon: <Code2 size={24} />,
  },
  {
    name: "CSS",
    level: 95,
    icon: <Palette size={24} />,
  },
  {
    name: "JavaScript",
    level: 90,
    icon: <Code2 size={24} />,
  },
  {
    name: "React.js",
    level: 90,
    icon: <Code2 size={24} />,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    icon: <Palette size={24} />,
  },
  {
    name: "Node.js",
    level: 85,
    icon: <Server size={24} />,
  },
  {
    name: "Express.js",
    level: 85,
    icon: <Server size={24} />,
  },
  {
    name: "MySQL",
    level: 85,
    icon: <Database size={24} />,
  },
  {
    name: "Git & GitHub",
    level: 85,
    icon: <GitBranch size={24} />,
  },
  {
    name: "REST APIs",
    level: 85,
    icon: <Globe size={24} />,
  },
  {
    name: "Responsive Design",
    level: 100,
    icon: <Wrench size={24} />,
  },
  {
    name: "WordPress",
    level: 95,
    icon: <Zap size={24} />,
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="sm:py-24 py-20 bg-[#111111] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
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
              duration: 0.5,
            }}
            className="
              inline-block
              px-4
              py-2
              bg-[#E46254]/10
              text-[#E46254]
              rounded-full
              text-sm
              font-semibold
              mb-5
            "
          >
            MY SKILLS
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1em]">
            Technologies I
            <span className="text-[#E46254]"> Work With</span>
          </h2>

          <p className="text-gray-400 mt-6 sm:text-lg leading-relaxed">
            I use modern technologies and development tools to build
            fast, scalable, responsive, and high-quality web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            mt-16
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                group
                bg-[#171717]
                border
                border-white/10
                rounded-2xl
                p-6
                hover:border-[#E46254]/60
                transition-colors
                duration-300
              "
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-[#E46254]/10
                      text-[#E46254]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    {skill.icon}
                  </motion.div>

                  <div>
                    <h3 className="font-bold text-lg">
                      {skill.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Professional
                    </p>
                  </div>

                </div>

                {/* Percentage */}
                <span className="text-[#E46254] font-bold">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 h-2 bg-white/5 rounded-full overflow-hidden">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.05,
                    ease: "easeOut",
                  }}
                  className="
                    h-full
                    bg-gradient-to-r
                    from-[#E46254]
                    to-[#ff7666]
                    rounded-full
                  "
                />

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlight */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-12
            p-8
            rounded-3xl
            bg-gradient-to-r
            from-[#E46254]/10
            to-transparent
            border
            border-[#E46254]/20
            text-center
          "
        >
          <h3 className="text-2xl font-bold">
            Always Learning. Always Building.
          </h3>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            I continuously explore new technologies, tools, and
            development practices to improve my skills and create
            better digital experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;