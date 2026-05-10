import React, { useEffect, useMemo, useState } from "react";
import img from "../../assets/mine.jpg";
import pdf from "../../assets/CV.pdf";
import { motion } from "framer-motion";

const Home = () => {
  const roles = useMemo(
    () => [
      "Web Developer",
      "Backend Engineer",
      "React Developer",
      "Mobile Engineer",
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
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <div className="text-white flex flex-col md:flex-row w-full min-h-screen mt-10 items-center p-6 md:p-20 gap-10 relative">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 order-2 md:order-1 relative">

        {/* glow top */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[80px] animate-pulse"></div>
        </div>

        {/* typing text */}
        <motion.div
          className="text-xl md:text-3xl font-semibold tracking-wide min-h-[60px] md:min-h-[80px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>{roles[index].substring(0, subIndex)}</span>
          <span
            className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
            style={{ height: "1em" }}
          ></span>
        </motion.div>

        {/* name */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello I'm
          <br />
          <span className="text-white font-bold text-5xl md:text-6xl">
            ZIN KO KO LATT
          </span>
        </motion.h1>

        {/* description */}
        <p className="text-sm md:text-lg mt-4 text-gray-300">
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>

        {/* buttons */}
        <div className="flex gap-6 mt-6">
          <button className="py-2 px-4 rounded-3xl shadow-2xl shadow-cyan-950 bg-cyan-400 text-black hover:scale-105 duration-300 cursor-pointer">
            Contact Me
          </button>

          <a
            href={pdf}
            download
            className="py-2 px-4 rounded-3xl shadow-lg shadow-gray-800 hover:scale-105 duration-300 cursor-pointer"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <div className="w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl">
          <img
            src={img}
            alt="profile"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* glow bottom */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[80px] animate-pulse"></div>
    </div>
  );
};

export default Home;