import { useState, useEffect } from "react";
import classes from "./scroll-to-top-button.module.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div onClick={scrollToTop} className={classes.button}>
        <FaArrowAltCircleUp />
      </div>
    )
  );
}

export default ScrollToTopButton;
