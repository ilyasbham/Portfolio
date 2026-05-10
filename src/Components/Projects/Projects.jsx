import React from "react";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import StudySpot from "../../assets/W5.png";
import Staff from "../../assets/W3.png";
import Complain from "../../assets/W4.png";

import SectionWrapper from "../SectionWrapper";

const Projects = () => {
  const projects = [
    {
      title: "Smart Study Spot Finder",

      image: StudySpot,

      desc: "AI-powered real-time crowd monitoring system using YOLOv8 and OpenCV to detect people, classify crowd levels, and help students find quiet study locations through a live React dashboard.",

      features: [
        "Real-time People Detection",
        "YOLOv8 Object Detection",
        "Crowd Classification",
        "Live Webcam Processing",
        "Spring Boot REST API",
        "React Dashboard",
        "Real-time Monitoring",
        "Computer Vision Integration",
      ],

      tech: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "Ultralytics",
        "Spring Boot",
        "Java",
        "React",
        "Axios",
        "REST API",
      ],

      demo: "#",
      github: "https://github.com/ilyasbham/Smart-Study-Spot-Finder.git",
    },

    {
      title: "E-Commerce Platform",
      image: StudySpot,
      desc: "A full-featured online shopping experience.",

      features: [
        "JWT Authentication",
        "Stripe Payment System",
        "Redis Caching",
        "Cloudinary Integration",
      ],

      tech: ["Java", "Spring Boot", "JPA", "MySQL", "Redis"],

      demo: "https://ecommerce-website-mern-stack-fronte.vercel.app/",
      github: "https://github.com/ilyasbham/Ecommerce-website-mern-stack.git",
    },

    {
      title: "C# Application",
      image: Staff,
      desc: "A modern c# application with a clean UI.",

      features: ["Desktop UI", "CRUD Operations", "Authentication System"],

      tech: ["C#", ".NET", "SQL Server"],

      demo: "#",
      github: "https://github.com/ilyasbham/C-Staffify-.git",
    },

    {
      title: "AI Complaint Classification System",
      image: Complain,
      desc: "AI-powered complaint management system that automatically classifies complaints into categories (IT, Food, Hostel, Academic) and predicts urgency levels (Low, Medium, High) using Machine Learning and NLP.",

      features: [
        "Complaint Classification",
        "Urgency Prediction",
        "TF-IDF Text Processing",
        "Model Comparison",
        "Confusion Matrix Visualization",
        "FastAPI Integration",
        "React Frontend",
        "Real-time Prediction",
      ],

      tech: [
        "Python",
        "FastAPI",
        "Scikit-learn",
        "Pandas",
        "TF-IDF",
        "Logistic Regression",
        "Random Forest",
        "React",
        "Axios",
        "Matplotlib",
        "Seaborn",
      ],

      demo: "#",
      github: "https://github.com/ilyasbham/Ai-Complain-system.git",
    },
  ];

  return (
    <div id="projects" className="w-full text-white py-20 px-6 md:px-10">
      {/* Title */}
      <div className="flex justify-center items-center mb-14">
        <SectionWrapper>
          <h2 className="section-title text-gradient">Projects</h2>
        </SectionWrapper>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="
  group
  w-full
  sm:w-[320px]
  md:w-[340px]

  rounded-3xl
  overflow-hidden

  bg-white/5
  backdrop-blur-xl

  border border-white/10

  shadow-lg
  shadow-cyan-500/10

  hover:-translate-y-3
  hover:border-cyan-400/40
  hover:shadow-cyan-400/20

  transition-all
  duration-500

  flex
  flex-col
"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="
                  w-full
                  h-52
                  object-cover

                  group-hover:scale-110
                  transition-all
                  duration-700
                "
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Title + Icons */}
              <div className="flex justify-between items-start mb-4">
                <h2
                  className="
                  text-2xl
                  font-bold
                  group-hover:text-cyan-400
                  transition
                "
                >
                  {p.title}
                </h2>

                <div className="flex gap-3">
                  {/* GitHub */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      p-2
                      rounded-full
                      bg-white/5
                      hover:bg-cyan-400
                      hover:text-black
                      transition
                    "
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>

                  {/* Demo */}
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      p-2
                      rounded-full
                      bg-white/5
                      hover:bg-cyan-400
                      hover:text-black
                      transition
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-5">{p.desc}</p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {p.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-cyan-400 shadow-md"></div>

                    {feature}
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1
                      rounded-full
                      text-xs
                      text-cyan-300
                      bg-cyan-400/10
                      border border-cyan-400/20
                      hover:bg-cyan-400
                      hover:text-black
                      transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto pt-4 ">
                {/* Demo */}
                <button
                  onClick={() => window.open(p.demo, "_blank")}
                  className="
                    flex-1
                    bg-cyan-400
                    hover:bg-cyan-300
                    text-black
                    font-semibold
                    py-2.5
                    rounded-xl
                    transition
                    cursor-pointer
                  "
                >
                  Demo
                </button>

                {/* Code */}
                <button
                  onClick={() => window.open(p.github, "_blank")}
                  className="
                    flex-1
                    border border-cyan-400
                    text-cyan-400
                    hover:bg-cyan-400
                    hover:text-black
                    font-semibold
                    py-2.5
                    rounded-xl
                    transition
                    cursor-pointer
                  "
                >
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
<div className="justify-center flex mt-4">
  <button
    onClick={() => window.open("https://github.com/ilyasbham", "_blank")}
    className="flex items-center cursor-pointer gap-2 px-4 py-2 border border-gray-600 bg-black text-white rounded-xl hover:bg-gray-900 transition"
  >
    <FaGithub className="w-4 h-4" />
    <span>View All Projects On GitHub</span>
  </button>
</div>
    </div>
  );
};

export default Projects;
