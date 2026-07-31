import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 text-2xl">

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

      <a
        href="mailto:Preethigajeganathan@gmail.com"
      >
        <FaEnvelope className="hover:text-cyan-400" />
      </a>

    </div>
  );
}

export default SocialLinks;