import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Montrer le bouton après un certain scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // apparaît après 300px
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ⬆
      </button>
    )
  );
}
