import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaUserGraduate,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Passionate developer who enjoys building beautiful,
            scalable and responsive web applications.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              I'm a Junior Software Developer passionate about creating
              modern, responsive, and user-friendly web applications using
              React.js, JavaScript, Node.js, REST APIs, and SQL. I enjoy
              solving real-world problems, learning new technologies, and
              building clean, reusable components.
            </p>

            <p className="text-gray-300 leading-8">
              I'm also interested in AI tools, Prompt Engineering, and
              continuously improving my full-stack development skills.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >

            <div className="bg-slate-900 rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <FaLaptopCode className="text-5xl mx-auto text-cyan-400 mb-4" />

              <h2 className="text-4xl font-bold">15+</h2>

              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <FaProjectDiagram className="text-5xl mx-auto text-cyan-400 mb-4" />

              <h2 className="text-4xl font-bold">5+</h2>

              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <FaUserGraduate className="text-5xl mx-auto text-cyan-400 mb-4" />

              <h2 className="text-4xl font-bold">1+</h2>

              <p className="text-gray-400 mt-2">
                Years Learning
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;