import React from "react";
import { IoArrowForward } from "react-icons/io5";
import SectionWrapper from "../SectionWrapper";

const About = () => {
  const roles = [
    {
      title: "Backend Developer",
      desc: "Building secure and scalable REST APIs with Spring Boot.",
    },

    {
      title: "Full-Stack Developer",
      desc: "Creating responsive web applications using React and Tailwind CSS.",
    },

    {
      title: "Software Engineer",
      desc: "Focused on clean architecture and modern application development.",
    },
  ];

  return (
    <div
      id="about"
      className="
        
        w-full
        text-white
        py-20
        px-6
        md:px-10
        overflow-hidden
      "
    >
 

      

      {/* Title */}
      <div className="flex justify-center items-center relative z-10">
        <SectionWrapper>
          <h2 className="section-title text-gradient">About Me</h2>
        </SectionWrapper>
       
      </div >
       <p className="flex justify-center items-center relative z-10 text-gray-400">Building clean, scalable, and high-performance software.</p>

      {/* Main Content */}
      <div className="Maindiv
    flex
    flex-col
    lg:flex-row

    mt-16
    gap-8
    justify-between">


        {/* RIGHT SIDE */}
        <div
          className="rightdiv
  w-full
  lg:w-2/5
  h-full shadow-lg
                  shadow-cyan-500/5

                  hover:border-cyan-400/40
                  hover:shadow-cyan-400/20
                  hover:-translate-y-2

                  transition-all
                  duration-300">
          {/* About Text */}
          <div
            className="
            bg-white/5
            backdrop-blur-xl

            border
            border-white/10

            rounded-3xl

            p-8

            shadow-2xl
            shadow-cyan-500/10

            hover:border-cyan-400/30
            transition
          "
          >
            <p
              className="
              text-gray-400
              leading-8
              text-[16px]
            "
            >
              I'm a{" "}
              <span className="text-white font-semibold">
                backend-focused full-stack developer
              </span>
              {""} passionate about building scalable and secure applications.
              <br />
              <br />I specialize in{" "}
              <span className="text-white font-semibold">
                Java, Spring Boot, JWT Authentication, React, Tailwind CSS,
                MySQL, and Redis
              </span>
              {""} while developing modern full-stack systems and APIs.
              <br />
              <br />
              Currently studying{" "}
              <span className="text-white font-semibold">
                Computer Engineering at Karabuk University
              </span>
              {""} and continuously improving my software engineering skills.
            </p>
          </div>
        </div>


        {/*LeftDiv Roles */}
          <div className=" leftdiv
  flex
  flex-col

  w-full
  lg:w-1/2

  gap-6
  mt-2">
            {roles.map((role, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  backdrop-blur-xl

                  border
                  border-white/10

                  rounded-2xl

                  p-6

                  shadow-lg
                  shadow-cyan-500/5

                  hover:border-cyan-400/40
                  hover:shadow-cyan-400/20
                  hover:-translate-y-2

                  transition-all
                  duration-300
                "
              >
                <h2
                  className="
                  text-xl
                  font-bold

                  flex
                  items-center
                  gap-3

                  mb-3

                  text-white
                "
                >
                  <IoArrowForward className="text-cyan-400" />

                  {role.title}
                </h2>

                <p
                  className="
                  text-gray-400
                  pl-8
                  leading-7
                "
                >
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default About;
