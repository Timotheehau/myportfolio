import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const links = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "Projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  const [active, setActive] = useState("hero");

  // Mettre à jour le lien actif selon le scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 80; // ajuster si navbar fixe
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
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Mon Portfolio</h1>
        <div className="navbar-links">
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
