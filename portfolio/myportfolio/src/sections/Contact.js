import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 id="contact-h2">📬 Me Contacter</h2>
        <p>
          N’hésite pas à me contacter via mes réseaux ou par mail.  
          Je suis toujours ouvert à de nouvelles opportunités et collaborations.
        </p>

        <p>
          Je suis spécialisé en développement front-end et back-end, avec une passion pour les interfaces modernes et l'expérience utilisateur.  
          Disponible pour des projets freelance, des collaborations ou des stages.
        </p>

        <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
          "La technologie est au service des idées, pas l’inverse."
        </p>

        <ul style={{ textAlign: "left", maxWidth: "500px", margin: "2rem auto", listStyleType: "square" }}>
          <li>Développement Web (React, Node.js)</li>
          <li>UI / UX Design</li>
          <li>Création de sites vitrines et applications web</li>
          <li>Optimisation performance et SEO</li>
        </ul>

        <div className="contact-buttons">
          <a
            href="https://www.linkedin.com/in/timothée-hauser16/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn linkedin"
          >
            <Linkedin size={22} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/timotheehau"
            target="_blank"
            rel="noopener noreferrer"
            className="btn github"
          >
            <Github size={22} />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:16.hauser@gmail.com"
            className="btn email"
          >
            <Mail size={22} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
