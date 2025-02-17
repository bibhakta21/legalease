import React from "react";
import { GiGavel } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const WhyChooseData = [
  {
    id: 1,
    title: "Instant Legal Advice",
    desc: "Our chatbot provides instant legal solutions for a wide range of topics.",
    icon: <GiGavel />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Accessibility",
    desc: "Get legal assistance at any time, with no waiting required.",
    link: "/",
    icon: <FaUsers />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Comprehensive Legal Resources",
    desc: "Access a variety of legal articles, case studies, and expert opinions directly through the chatbot.",
    link: "/",
    icon: <IoMdHelpCircle />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Legal Assistance",
    desc: "Get access to affordable legal resources and expert guidance.",
    link: "/",
    icon: <GiGavel />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of using our legal solution chatbot
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
