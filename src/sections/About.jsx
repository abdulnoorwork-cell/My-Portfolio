import React from "react";
import {
    Code2,
    Briefcase,
    MonitorSmartphone,
    ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const About = () => {
    const reveal = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const cardReveal = {
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
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            id="about"
            className="sm:py-24 py-20 bg-[#0D0D0D] text-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.span
                            variants={reveal}
                            className="inline-block px-4 py-2 bg-[#E46254]/10 text-[#E46254] rounded-full text-sm font-semibold mb-5"
                        >
                            ABOUT ME
                        </motion.span>

                        <motion.h2
                            variants={reveal}
                            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1em]"
                        >
                            Building Modern
                            <span className="text-[#E46254]">
                                {" "}Web Experiences
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={reveal}
                            className="text-gray-400 mt-6 sm:text-lg leading-relaxed"
                        >
                            I'm{" "}
                            <span className="text-white font-semibold">
                                Abdul Noor
                            </span>
                            , a Full Stack Web Developer specializing in React,
                            Node.js, Express.js, MySQL, Wordpress, and modern web technologies.
                        </motion.p>

                        <motion.p
                            variants={reveal}
                            className="text-gray-400 mt-4 sm:text-lg leading-relaxed"
                        >
                            I create fast, responsive, and user-friendly websites that
                            help businesses grow online. My focus is writing clean code,
                            building scalable applications, and delivering high-quality
                            digital experiences.
                        </motion.p>

                        <motion.div
                            variants={reveal}
                            className="flex flex-wrap gap-4 mt-8"
                        >
                            <a
                                href="#projects"
                                className="bg-[#E46254] hover:bg-[#ff7666] px-7 sm:py-4 py-3.5 font-semibold rounded-xl transition flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} />
                            </a>

                            <a
                                href="#contact"
                                className="border border-white/10 hover:border-[#E46254] px-7 sm:py-4 py-3.5 rounded-xl transition"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:grid hiddem sm:grid-cols-2 gap-5"
                    >
                        {/* Card 1 */}
                        <motion.div
                            variants={cardReveal}
                            transition={{ delay: 0.1 }}
                            className="bg-[#111111] border border-white/10 p-7 rounded-3xl hover:border-[#E46254]/40 transition"
                        >
                            <Code2 size={35} className="text-[#E46254]" />

                            <h3 className="text-4xl font-black mt-5">
                                20+
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Completed Projects
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={cardReveal}
                            transition={{ delay: 0.2 }}
                            className="bg-[#111111] border border-white/10 p-7 rounded-3xl hover:border-[#E46254]/40 transition"
                        >
                            <Briefcase size={35} className="text-[#E46254]" />

                            <h3 className="text-4xl font-black mt-5">
                                2+
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Years Experience
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            variants={cardReveal}
                            transition={{ delay: 0.3 }}
                            className="bg-[#111111] border border-white/10 p-7 rounded-3xl hover:border-[#E46254]/40 transition"
                        >
                            <MonitorSmartphone
                                size={35}
                                className="text-[#E46254]"
                            />

                            <h3 className="text-4xl font-black mt-5">
                                30+
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Responsive Websites
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            variants={cardReveal}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-[#E46254] to-[#ff7666] p-7 rounded-3xl"
                        >
                            <h3 className="text-5xl font-black">
                                100%
                            </h3>

                            <p className="mt-3 text-white/90">
                                Client Satisfaction &
                                <br />
                                Quality Focused Development
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;