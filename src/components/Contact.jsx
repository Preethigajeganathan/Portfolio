import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}
    `;

    window.location.href = `mailto:Preethigajeganathan@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <span>Preethigajeganathan@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>

            <div className="flex gap-6 text-3xl">

              <a
                href="https://github.com/Preethigajeganathan"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400" />
              </a>

              <a
                href="https://linkedin.com/in/preethiga-j-665a43286"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400" />
              </a>

            </div>

          </div>

          {/* Right */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            />

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;