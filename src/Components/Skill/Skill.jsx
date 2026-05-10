import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGithub,
} from "react-icons/fa";

import {
  SiC,
  SiKotlin,
  SiMysql,
  SiTensorflow,
  SiFlutter,
  SiTailwindcss,
  SiBootstrap,
  SiDjango,
  SiLaravel,
  SiSpringboot,
  SiPandas,
  SiNumpy,
  SiRedis,
  SiPhp,
  SiPython,
  SiSharp,
} from "react-icons/si";

import { GrOracle } from "react-icons/gr";


const Skill = () => {
  const languages = [
    { name: "Java", level: 90, icon: <FaJava className="text-orange-500" /> },
    {
      name: "JavaScript",
      level: 85,
      icon: <FaJs className="text-yellow-400" />,
    },
    { name: "C#", level: 80, icon: <SiSharp className="text-purple-500" /> },
    { name: "C", level: 75, icon: <SiC className="text-blue-400" /> },
    {
      name: "Kotlin",
      level: 70,
      icon: <SiKotlin className="text-purple-400" />,
    },
    {
      name: "Flutter",
      level: 65,
      icon: <SiFlutter className="text-cyan-400" />,
    },
    { name: "SQL", level: 80, icon: <SiMysql className="text-blue-500" /> },
    { name: "PHP", level: 60, icon: <SiPhp className="text-indigo-400" /> },
    {
      name: "Python",
      level: 85,
      icon: <SiPython className="text-yellow-300" />,
    },
  ];

  const frameworksLibraries = [
    {
      name: "Spring Boot",
      level: 85,
      icon: <SiSpringboot className="text-green-500" />,
    },
    { name: "React", level: 80, icon: <FaReact className="text-cyan-400" /> },
    {
      name: "Bootstrap",
      level: 75,
      icon: <SiBootstrap className="text-purple-500" />,
    },
    {
      name: "Tailwind",
      level: 70,
      icon: <SiTailwindcss className="text-sky-400" />,
    },
    {
      name: "Flutter",
      level: 65,
      icon: <SiFlutter className="text-cyan-400" />,
    },
    {
      name: "Laravel",
      level: 60,
      icon: <SiLaravel className="text-red-500" />,
    },
    {
      name: "Django",
      level: 75,
      icon: <SiDjango className="text-green-400" />,
    },
    {
      name: "TensorFlow",
      level: 50,
      icon: <SiTensorflow className="text-orange-500" />,
    },
    { name: "Pandas", level: 70, icon: <SiPandas className="text-white" /> },
    { name: "NumPy", level: 70, icon: <SiNumpy className="text-blue-400" /> },
  ];

  const toolsTechnologies = [
    { name: "GitHub", level: 95, icon: <FaGithub className="text-white" /> },
    { name: "Docker", level: 80, icon: <FaDocker className="text-blue-400" /> },
    { name: "Redis", level: 75, icon: <SiRedis className="text-red-500" /> },
    {
      name: "REST API",
      level: 90,
      icon: <FaNodeJs className="text-green-500" />,
    },
    { name: "Oracle", level: 85, icon: <GrOracle className="text-red-400" /> },
  ];

  return (
    <>
      <div id="skills" className=" flex-col flex justify-center items-center">
        <SectionWrapper>
        <h2 className="section-title text-gradient">
  Skills & Technologies
</h2>
        </SectionWrapper>
      </div>

      <div className="text-center mb-10">
        <p className="text-gray-400 mt-2">
          Technologies and tools I use to build modern applications.
        </p>
      </div>
      <div className="w-full min-h-screen py-10  grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Languages Section */}
        <motion.div  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
   className="border border-gray-700 p-6 m-4 rounded-2xl text-white diagonal-gray-gradient hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
          <h3 className="text-xl font-bold mb-4 text-cyan-500">Languages</h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-3 text-lg">
                    {lang.icon}
                    <span>{lang.name}</span>
                  </div>
                  <span>{lang.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                   className="bg-cyan-400 h-3 rounded-full shadow-lg shadow-cyan-400/50"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks and Libraries Section */}
        <div className="border border-gray-700 p-6 m-4 rounded-2xl text-white diagonal-gray-gradient hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
          <h3 className="text-xl font-bold mb-4 text-cyan-500">
            Frameworks and Libraries
          </h3>
          <div className="space-y-4">
            {frameworksLibraries.map((fw, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-3 text-lg">
                    {fw.icon}
                    <span>{fw.name}</span>
                  </div>
                  <span>{fw.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${fw.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="bg-cyan-400 h-3 rounded-full shadow-lg shadow-cyan-400/50"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Technologies Section */}
        <div className="border border-gray-700 p-6 m-4 rounded-2xl text-white diagonal-gray-gradient hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
          <h3 className="text-xl font-bold mb-4 text-cyan-500">
            Tools and Technologies
          </h3>
          <div className="space-y-4">
            {toolsTechnologies.map((tool, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-3 text-lg">
                    {tool.icon}
                    <span>{tool.name}</span>
                  </div>
                  <span>{tool.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                   className="bg-cyan-400 h-3 rounded-full shadow-lg shadow-cyan-400/50"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
