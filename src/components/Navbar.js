import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { id: "hero", label: "Accueil" },
  { id: "about", label: "Parcours" },
  { id: "Projects", label: "Projets" },
  { id: "Skills", label: "Compétences" },
  { id: "Documentation", label: "Documentation" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Gestion du scroll (ton code actuel est correct)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "hero";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            current = link.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Ferme le menu mobile après clic
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Mon Portfolio</h1>

        {/* Bouton Burger */}
        <div 
          className={`burger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu de navigation */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li
              key={link.id}
              className={`nav-item ${active === link.id ? "active-link" : ""}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}