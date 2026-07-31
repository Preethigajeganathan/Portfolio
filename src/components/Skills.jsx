import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";

import { AiOutlineOpenAI } from "react-icons/ai";
import { DiVisualstudio } from "react-icons/di";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "REST APIs", icon: <FaDatabase className="text-cyan-400" /> },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
  },

  {
    title: "AI Skills",
    skills: [
      { name: "ChatGPT", icon: <AiOutlineOpenAI className="text-green-400" /> },
      { name: "Prompt Engineering", icon: <AiOutlineOpenAI className="text-cyan-400" /> },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build responsive and modern web applications.
          </p>
        </motion.div>

        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-8 text-center md:text-left">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {category.skills.map((skill) => (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                  }}
                  whileTap={{
                    scale: .95,
                  }}
                  key={skill.name}
                  className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 min-h-[180px]"
                >
                  <div className="text-5xl mb-4">
                    {skill.icon}
                  </div>

                  <h4 className="text-lg font-semibold">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;