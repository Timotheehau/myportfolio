import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { id: "hero", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "Projects", label: "Projets" },
  { id: "Skills", label: "Compétences" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 80;
          if (window.scrollY >= top) current = link.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // fermer menu après clic
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Mon Portfolio</h1>

        {/* Burger menu */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Liens */}
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <div
              key={link.id}
              className={`navbar-link ${active === link.id ? "active" : ""}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
