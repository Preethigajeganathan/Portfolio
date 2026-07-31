import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

const timeline = [
  {
    icon: <FaBriefcase />,
    title: "Junior Software Developer Trainee",
    organization: "CADD Technologies",
    duration: "May 2026 – Present",
    points: [
      "Developed responsive web applications using React.js, JavaScript and Tailwind CSS.",
      "Integrated REST APIs and built reusable components.",
      "Performed debugging, testing and troubleshooting.",
      "Worked with Git & GitHub for version control."
    ]
  },

  {
    icon: <FaBriefcase />,
    title: "Full Stack Web Developer Intern",
    organization: "TECHVOLT Software Pvt. Ltd.",
    duration: "July 2024 – August 2024",
    points: [
      "Built web applications using HTML, CSS, JavaScript and Bootstrap.",
      "Worked with REST API integration.",
      "Implemented features and fixed bugs.",
      "Collaborated using GitHub."
    ]
  },

  {
    icon: <FaGraduationCap />,
    title: "B.E. Electronics & Communication Engineering",
    organization: "Mohamed Sathak Engineering College",
    duration: "2021 – 2025",
    points: [
      "CGPA: 8.35 / 10",
      "Developed multiple web development projects.",
      "Built strong programming fundamentals."
    ]
  },

  {
    icon: <FaCertificate />,
    title: "Certifications",
    organization: "",
    duration: "",
    points: [
      "Full Stack Web Development",
      "Python Essentials 1 & 2",
      "HTML Certification"
    ]
  }
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Experience & <span className="text-cyan-400">Education</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            My professional journey so far.
          </p>
        </motion.div>

        <div className="relative border-l-4 border-cyan-400 ml-6">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7, delay: index * .2 }}
              viewport={{ once: true }}
              className="mb-14 ml-10 relative"
            >

              <div className="absolute -left-[58px] bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center text-xl text-white shadow-lg">
                {item.icon}
              </div>

              <div className="bg-slate-900 rounded-xl p-7 shadow-xl hover:shadow-cyan-500/30 transition">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <h4 className="text-cyan-400 mt-2">
                  {item.organization}
                </h4>

                <p className="text-gray-500 mt-1">
                  {item.duration}
                </p>

                <ul className="list-disc mt-5 ml-5 space-y-2 text-gray-300">

                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;