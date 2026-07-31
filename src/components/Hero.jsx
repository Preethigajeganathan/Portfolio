import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";
import { TypeAnimation } from "react-type-animation";

import {
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import { FaAnglesDown } from "react-icons/fa6";

import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";


function Hero() {
  return (
    <>
      <Helmet>
        <title>Preethiga | Junior Software Developer</title>

        <meta
          name="description"
          content="Preethiga's portfolio showcasing React.js, JavaScript, Node.js, REST APIs, and Full Stack Web Development projects."
        />

        <meta
          name="keywords"
          content="Preethiga, React Developer, JavaScript, Frontend Developer, Node.js, Portfolio"
        />
      </Helmet>


      <section
        id="home"
        className="relative min-h-screen bg-slate-900 flex items-center overflow-hidden pt-28"
      >

        {/* Background Blur */}

        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>


        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">


          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 text-center md:text-left"
          >

            <p className="text-cyan-400 text-lg sm:text-xl mb-3 font-medium">
              👋 Hello, I'm
            </p>


            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Preethiga
            </h1>


            <TypeAnimation
              sequence={[
                "Junior Software Developer",
                2000,
                "React Developer",
                2000,
                "Frontend Developer",
                2000,
                "JavaScript Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              className="min-h-[50px] text-xl sm:text-2xl md:text-4xl font-semibold text-cyan-400 mb-6"
            />


            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 mb-8">
              Passionate about building modern, responsive, and user-friendly
              web applications using React.js, JavaScript, Node.js, REST APIs,
              SQL, and modern web technologies.
            </p>



            {/* BUTTONS */}

            <div className="flex flex-row justify-center md:justify-start gap-3 sm:gap-5">

              {/* Resume Button */}

              <a
                href={resume}
                download
                className="
                w-1/2 sm:w-auto
                flex items-center justify-center gap-2
                bg-cyan-500 
                hover:bg-cyan-400
                px-4 sm:px-7 
                py-3 
                rounded-xl
                text-sm sm:text-base
                font-semibold
                shadow-lg
                transition
                hover:scale-105
                whitespace-nowrap
                "
              >
                <FaDownload />
                Resume
              </a>



              {/* Projects Button */}

              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="
                w-1/2 sm:w-auto
                flex items-center justify-center gap-2
                border-2 
                border-cyan-400
                hover:bg-cyan-500
                px-4 sm:px-7
                py-3
                rounded-xl
                text-sm sm:text-base
                font-semibold
                cursor-pointer
                transition
                hover:scale-105
                whitespace-nowrap
                "
              >

                Projects
                <FaArrowRight />

              </Link>


            </div>


          </motion.div>




          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex justify-center"
          >

            <motion.img
              src={profile}
              alt="Preethiga"

              animate={{
                y: [0, -12, 0]
              }}

              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}

              className="
              w-56 h-56
              sm:w-72 sm:h-72
              md:w-96 md:h-96
              rounded-full
              object-cover
              border-4
              border-cyan-400
              shadow-[0_0_40px_rgba(34,211,238,0.4)]
              "
            />

          </motion.div>


        </div>



<motion.div
  animate={{
    y: [0, 12, 0]
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5
  }}
  className="
    hidden sm:block
    absolute
    bottom-6
    left-1/2
    -translate-x-1/2
    text-cyan-400
    text-3xl
  "
>
  <FaAnglesDown />
</motion.div>


      </section>
    </>
  );
}


export default Hero;