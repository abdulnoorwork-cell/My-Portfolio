import React from "react";
import { motion } from "motion/react";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    ArrowUpRight,
} from "lucide-react";

import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const contactItems = [
        {
            icon: <Mail size={22} />,
            title: "Email",
            value: "abdulnoorwork@gmail.com",
            link: "mailto:abdulnoorwork@gmail.com",
        },
        {
            icon: <Phone size={22} />,
            title: "Phone",
            value: "+92 319 7453657",
            link: "tel:+92XXXXXXXXXX",
        },
        {
            icon: <MapPin size={22} />,
            title: "Location",
            value: "Haripur, Pakistan",
            link: "#",
        },
    ];

    const socialLinks = [
        {
            icon: <FaGithub size={20} />,
            name: "GitHub",
            link: "https://github.com/abdulnoorwork-cell",
        },
        {
            icon: <FaFacebookF size={18} />,
            name: "Facebook",
            link: "https://www.facebook.com/profile.php?id=61566454835118",
        },
        {
            icon: <FaLinkedin size={20} />,
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/abdul-noor40056/",
        }
    ];

    return (
        <section
            id="contact"
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
                        GET IN TOUCH
                    </motion.span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1em]">
                        Let's Build Something
                        <span className="text-[#E46254]"> Great</span>
                    </h2>

                    <p className="text-gray-400 mt-6 sm:text-lg leading-relaxed">
                        Have a project in mind or need a professional website?
                        Let's talk about your idea and turn it into reality.
                    </p>
                </motion.div>

                {/* Contact Content */}
                <div className="grid lg:grid-cols-2 gap-10 mt-16 items-stretch">

                    {/* Left Side */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="
    w-full
    min-w-0
    bg-[#111111]
    border
    border-white/10
    rounded-3xl
    p-6
    sm:p-8
    lg:p-10
    overflow-hidden
  "
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold">
                            Let's Talk
                        </h3>

                        <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                            I'm always open to discussing new projects, creative
                            ideas, or opportunities to be part of your vision.
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-4 mt-8">
                            {contactItems.map((item, index) => (
                                <motion.a
                                    key={item.title}
                                    href={item.link}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        x: 4,
                                    }}
                                    className="
          w-full
          min-w-0
          flex
          items-center
          gap-3
          sm:gap-4
          p-3
          sm:p-4
          rounded-2xl
          bg-white/[0.03]
          border
          border-white/5
          hover:border-[#E46254]/40
          transition-colors
        "
                                >
                                    {/* Icon */}
                                    <div
                                        className="
            w-10
            h-10
            sm:w-12
            sm:h-12
            rounded-xl
            bg-[#E46254]/10
            text-[#E46254]
            flex
            items-center
            justify-center
            shrink-0
          "
                                    >
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm text-gray-500">
                                            {item.title}
                                        </p>

                                        <p
                                            className="
              font-medium
              mt-1
              text-sm
              sm:text-base
              text-white
              break-words
              overflow-hidden
            "
                                        >
                                            {item.value}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <ArrowUpRight
                                        size={17}
                                        className="
            shrink-0
            text-gray-600
          "
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <p className="text-sm text-gray-500 mb-4">
                                Follow Me
                            </p>

                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
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
                                            scale: 1.05,
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
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="mt-8 flex items-center gap-3 min-w-0">
                            <span className="relative flex h-3 w-3 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E46254] opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E46254]" />
                            </span>

                            <span className="text-sm text-gray-400 truncate">
                                Available for freelance projects
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 70,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="
              bg-[#111111]
              border
              border-white/10
              rounded-3xl
              p-6
              sm:p-8
              lg:p-10
            "
                    >
                        <h3 className="sm:text-3xl text-2xl font-bold">
                            Send a Message
                        </h3>

                        <p className="text-gray-400 mt-3">
                            Tell me a little about your project.
                        </p>

                        <form action="https://api.web3forms.com/submit" method="POST" className="mt-8 space-y-5">
                            <input type="hidden" name="access_key" value="44a0df73-c478-46b6-af8f-27518e08c08e" />

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm text-gray-400 mb-2"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="
                    w-full
                    bg-white/[0.03]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-[#E46254]
                    transition-colors
                  "
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm text-gray-400 mb-2"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="
                    w-full
                    bg-white/[0.03]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-[#E46254]
                    transition-colors
                  "
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm text-gray-400 mb-2"
                                >
                                    Phone
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    placeholder="Phone (optional)"
                                    className="
                    w-full
                    bg-white/[0.03]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-[#E46254]
                    transition-colors
                  "
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm text-gray-400 mb-2"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="
                    w-full
                    bg-white/[0.03]
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-[#E46254]
                    transition-colors
                    resize-none
                  "
                                />
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                whileHover={{
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="
                  w-full
                  bg-[#E46254]
                  hover:bg-[#ff7666]
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-colors
                  cursor-pointer
                "
                            >
                                Send Message
                                <Send size={18} />
                            </motion.button>

                        </form>
                    </motion.div>

                </div>
            </div>
            {/* Top CTA */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
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
                className="max-w-7xl mx-auto px-5 lg:px-8 pt-20"
            >
                <div
                    className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#E46254]/20
                  bg-gradient-to-br
                  from-[#E46254]/15
                  via-[#171717]
                  to-[#111111]
                  p-8
                  lg:p-12
                "
                >
                    {/* Decorative Glow */}
                    <div
                        className="
                    absolute
                    -top-24
                    -right-24
                    w-64
                    h-64
                    bg-[#E46254]/20
                    rounded-full
                    blur-3xl
                  "
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

                        <div className="text-center lg:text-left">
                            <span className="text-[#E46254] text-sm font-semibold">
                                HAVE A PROJECT IN MIND?
                            </span>

                            <h2 className="text-4xl md:text-5xl font-black mt-3">
                                Let's Build Something <br />
                                <span className="text-[#E46254]"> Amazing.</span>
                            </h2>

                            <p className="text-gray-400 mt-4 max-w-xl">
                                Let's turn your ideas into a modern, fast, and
                                powerful digital experience.
                            </p>
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{
                                scale: 1.05,
                                x: 5,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                      shrink-0
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
                            Let's Talk
                            <ArrowUpRight size={19} />
                        </motion.a>

                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;