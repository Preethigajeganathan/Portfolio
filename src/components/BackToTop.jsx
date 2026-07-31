import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtBottom =
        windowHeight + currentScrollY >= documentHeight - 100;

      const isScrollingUp = currentScrollY < lastScrollY;

      // Show at bottom OR while scrolling up after some scrolling
      setShow(isAtBottom || (isScrollingUp && currentScrollY > 300));

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        bg-cyan-500
        p-4
        rounded-full
        shadow-lg
        hover:bg-cyan-400
        transition
      "
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;