import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";

const Education = () => {

  const education = [

    {
      year: "2018 - 2021",
      title: "High School",
      desc: "Completed high school education."
    },

    {
      year: "2021 - Present",
      title: "Computer Engineering",
      desc: "Karabuk University, Türkiye"
    },

    {
      year: "2024 - Present",
      title: "Full-Stack Development",
      desc: "Building scalable backend and modern frontend applications."
    },

  ];

  return (

    <div
      id="education"
      className="
        relative
        w-full
        min-h-screen

        text-white

        py-20
        px-6
        md:px-10

        overflow-hidden
      "
    >

     

      {/* TITLE */}
      <div className="flex justify-center items-center mb-24 relative z-10">

        <SectionWrapper>
          <h2 className="section-title text-gradient">
            Education
          </h2>
        </SectionWrapper>

      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative max-w-6xl mx-auto">

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className='
            hidden md:block

            absolute
            top-1/2
            left-0

            h-1

            bg-gradient-to-r
            from-cyan-400
            to-blue-500

            rounded-full

            shadow-lg
            shadow-cyan-400/50
          '
        />

        {/* Mobile Vertical Line */}
        <div className='
          md:hidden

          absolute
          left-4
          top-0
          bottom-0

          w-[3px]

          bg-cyan-400
        '></div>

        {/* ITEMS */}
        <div className='
          flex
          flex-col
          md:flex-row

          justify-between
          gap-16
          relative
        '>

          {education.map((edu, index) => {

            const isTop = index % 2 === 0;

            return (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 80
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}

                viewport={{ once: true }}

                className='
                  relative
                  flex-1
                '
              >

                {/* DOT */}
                <div className='
                  absolute

                  left-4
                  top-4

                  md:left-1/2
                  md:top-1/2

                  md:-translate-x-1/2
                  md:-translate-y-1/2

                  w-5
                  h-5

                  rounded-full

                  bg-cyan-400

                  border-4
                  border-black

                  shadow-lg
                  shadow-cyan-400/70

                  z-20
                '></div>

                {/* CARD */}
                <div
                  className={`
                    ml-14

                    md:ml-0
                    md:absolute
                    md:left-1/2
                    md:-translate-x-1/2

                    ${isTop ? "md:-top-56" : "md:top-16"}

                    w-[260px]

                    bg-white/5
                    backdrop-blur-xl

                    border
                    border-white/10

                    rounded-2xl

                    p-6

                    shadow-xl
                    shadow-cyan-500/10

                    hover:border-cyan-400/40
                    hover:-translate-y-2
                    hover:shadow-cyan-400/20

                    transition-all
                    duration-500
                  `}
                >

                  <p className='
                    text-cyan-400
                    text-sm
                    mb-2
                  '>
                    {edu.year}
                  </p>

                  <h2 className='
                    text-xl
                    font-bold
                    mb-2
                  '>
                    {edu.title}
                  </h2>

                  <p className='
                    text-gray-400
                    text-sm
                    leading-6
                  '>
                    {edu.desc}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </div>

  );
};

export default Education;