import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const projects = [
  {
    title: "Fashion Mart",
    image: "/images/fashio-mart.png",
    category: "E-Commerce",
    description:
      "Modern full-stack e-commerce platform with cart, wishlist, Stripe payments, admin dashboard and order management.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    github: "https://github.com/abdulnoorwork-cell/Fashion-Mart",
    live: "https://fashion-mart-gilt.vercel.app/",
  },
  {
    title: "Merida Food",
    image: "/images/merida-food.png",
    category: "Food Delivery",
    description:
      "Online food ordering website with product filtering, cart functionality and secure checkout experience.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    github: "https://github.com/abdulnoorwork-cell/Merida-Food",
    live: "https://merida-food.vercel.app/",
  },
  {
    title: "Insightful News",
    image: "/images/insightful-news.png",
    category: "News",
    description:
      "Personal developer portfolio showcasing projects, skills, services and contact information.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    github: "https://github.com/abdulnoorwork-cell/Insightful-News",
    live: "https://news-website-murex-nine.vercel.app/",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="sm:py-24 py-20 bg-[#0D0D0D] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
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
            className="inline-block px-4 py-2 bg-[#E46254]/10 text-[#E46254] rounded-full text-sm font-semibold mb-5"
          >
            MY PROJECTS
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1em]">
            Featured
            <span className="text-[#E46254]"> Work</span>
          </h2>

          <p className="text-gray-400 mt-6 sm:text-lg leading-relaxed">
            A collection of projects demonstrating my expertise
            in modern web development and full-stack applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid lg:grid-cols-3 gap-8 mt-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                bg-[#111111]
                border
                border-white/10
                overflow-hidden
                rounded-3xl
                group
                hover:border-[#E46254]
                transition-colors
                duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden h-64 relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  initial={{
                    scale: 1.05,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Category */}
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15,
                  }}
                  className="inline-block text-sm px-3 py-1 rounded-full bg-[#E46254]/10 text-[#E46254]"
                >
                  {project.category}
                </motion.span>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.2 + i * 0.05,
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      className="
                        text-sm
                        px-3
                        py-1
                        bg-white/5
                        border
                        border-white/10
                        rounded-full
                        transition-colors
                        hover:border-[#E46254]/50
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-7">

                  {/* GitHub */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      border
                      border-white/10
                      py-3
                      rounded-xl
                      hover:border-[#E46254]
                      transition-colors
                    "
                  >
                    <FaGithub size={18} />
                    GitHub
                  </motion.a>

                  {/* Live Demo */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-[#E46254]
                      hover:bg-[#ff7666]
                      py-3
                      rounded-xl
                      transition-colors
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;