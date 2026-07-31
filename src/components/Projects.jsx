import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import quickbite from "../assets/quickbite.png";
import crypto from "../assets/crypto.png";
import vidtube from "../assets/vidtube.png";

const projects = [
  {
    title: "QuickBite",
    description:
      "A modern food delivery web application with restaurant listings, search, filtering, shopping cart, Redux Toolkit state management, and REST API integration.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "REST API"],
    image: quickbite,
    github: "https://github.com/Preethigajeganathan",
    live: "https://quick-bite-food-delivery-app-tau.vercel.app/",
  },

  {
    title: "Crypto Tracker",
    description:
      "Real-time cryptocurrency tracking application featuring search, detailed coin information, historical charts, Clerk authentication, and multi-currency support.",
    tech: ["React", "Vite", "CoinGecko API", "Clerk"],
    image: crypto,
    github: "https://github.com/Preethigajeganathan",
    live: "https://crypto-tracker-lilac-five.vercel.app/",
  },

  {
    title: "VidTube",
    description:
      "YouTube-inspired video streaming application with search, video playback, recommendations, responsive UI, and YouTube Data API integration.",
    tech: ["React", "JavaScript", "YouTube API", "CSS"],
    image: vidtube,
    github: "https://github.com/Preethigajeganathan",
    live: "https://youtube-clone-bay-chi.vercel.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Some of the projects I've built using modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-cyan-500/30 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-400"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;