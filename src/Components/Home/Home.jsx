import React, { useEffect, useMemo, useState } from "react";
import img from "../../assets/mine.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const roles = useMemo(
    () => [
      "Web Developer",
      "Backend Engineer",
      "React Developer",
      "Mobile Engineer",
      "Computer Engineering Student",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <div className="text-white flex flex-col md:flex-row w-full min-h-screen items-center justify-center pt-28 md:pt-20 p-6 md:p-20 gap-10 relative overflow-hidden z-0">

      {/* TOP GLOW */}
      <div className="absolute -top-20 -left-20 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[100px] animate-pulse"></div>

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 order-2 md:order-1 z-10">

        {/* Typing Animation */}
        <motion.div
          className="text-xl md:text-3xl font-semibold tracking-wide min-h-[60px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400">
            {roles[index].substring(0, subIndex)}
          </span>

          <span
            className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
            style={{ height: "1em" }}
          ></span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mt-3 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Hello I'm <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
            ZIN KO KO LATT
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 mt-6 text-sm md:text-lg leading-relaxed max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Final Year Computer Engineering student at Karabük University,
          passionate about Full-Stack Development, Backend Engineering,
          AI Systems, and modern web technologies. Experienced in building
          scalable applications using React, Spring Boot, Laravel, MySQL,
          MongoDB, and Java.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-5 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#footer"
            className="py-3 px-7 rounded-full bg-cyan-400 text-black font-semibold shadow-2xl shadow-cyan-900 hover:scale-105 hover:bg-cyan-300 transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="/cv.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-7 rounded-full border border-cyan-400 text-white font-semibold shadow-lg shadow-cyan-950 hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300"
          >
            View CV
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center order-1 md:order-2 z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[70px] opacity-20 animate-pulse"></div>

          {/* Image */}
          <div className="w-52 h-52 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)] relative">
            <img
              src={img}
              alt="profile"
              className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </motion.div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[100px] animate-pulse"></div>
    </div>
  );
};

export default Home;