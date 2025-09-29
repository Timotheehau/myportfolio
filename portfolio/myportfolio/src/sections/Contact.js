import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>📬 Me Contacter</h2>
        <p>
          N’hésite pas à me contacter via mes réseaux ou par mail.  
          Je suis toujours ouvert à de nouvelles opportunités et collaborations.
        </p>

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
