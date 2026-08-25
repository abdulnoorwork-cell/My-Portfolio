import React from "react";
import {
  MonitorSmartphone,
  ShoppingCart,
  LayoutDashboard,
  Globe,
  Database,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Frontend Development",
    description:
      "Modern, responsive, and interactive user interfaces using React.js, Tailwind CSS, and JavaScript.",
  },
  {
    icon: <Database size={40} />,
    title: "Backend Development",
    description:
      "Secure and scalable backend solutions with Node.js, Express.js, MySQL, and REST APIs.",
  },
  {
    icon: <ShoppingCart size={40} />,
    title: "E-Commerce Websites",
    description:
      "Complete online stores with product management, cart system, payments, and order management.",
  },
  {
    icon: <LayoutDashboard size={40} />,
    title: "Admin Dashboards",
    description:
      "Powerful admin panels for managing blogs, products, orders, customers, and content.",
  },
  {
    icon: <Globe size={40} />,
    title: "Business Websites",
    description:
      "Professional websites for startups, agencies, and businesses designed to generate leads.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Wordpress",
    description:
      "I have great experience to create WordPress websites. Perfect for blogs, business sites, or ecommerce with a focus on speed, design, and usability.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 70,
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
      id="services"
      className="sm:py-24 py-20 bg-[#111111] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="inline-block px-4 py-2 bg-[#E46254]/10 text-[#E46254] rounded-full text-sm font-semibold mb-5"
          >
            MY SERVICES
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1em]">
            What I Can
            <span className="text-[#E46254]"> Do For You</span>
          </h2>

          <p className="text-gray-400 mt-6 sm:text-lg leading-relaxed">
            I help businesses and individuals build powerful,
            modern, and scalable web solutions that deliver
            real results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                group
                bg-[#171717]
                border
                border-white/10
                p-8
                rounded-3xl
                hover:border-[#E46254]
                transition-colors
                duration-300
              "
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#E46254]/10
                  text-[#E46254]
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.05,
                }}
                className="h-1 bg-[#E46254] rounded-full mt-6"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;