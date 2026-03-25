export default function ProjectSection() {
  return (
    <section id="Projects">
      <div className="content-wrapper">
        <h2>Projets</h2>
        <div className="grid">
          <div className="card">
            <h3>JHPrint3D</h3>
            <p>
              JHPrint3D est une entreprise spécialisée dans l'impression 3D...
            </p>
            {/* Ajout du rel ici */}
            <a href="https://www.jhprint3d.com" target="_blank" rel="noopener noreferrer">Visiter le site</a>
          </div>

          <div className="card">
            <h3>GoalTeach</h3>
            <p>
              GoalTeach est une plateforme éducative en ligne...
            </p>
            {/* Ajout du rel ici */}
            <a href="/GoalTeach/accueil.html" target="_blank" rel="noopener noreferrer">Visiter le site</a>
          </div>

          <div className="card">
            <h3>Dragodingo</h3>
            <p>
              Une application développée avec Symfony, gérant la gestion des montures et leurs statistiques.
            </p>
            <p className="skills">Compétences utilisées : Symfony, PHP, MySQL, HTML, CSS</p>
            <a href="https://timohsymfoeval-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
              Visiter le site
            </a>
          </div>

          <div className="card">
            <h3>.Match</h3>
            <p>Le projet de fin d'année de BTS SIO SLAM, les sportifs peuvent réserver une séance de coaching avec les coachs de la maison des ligues</p>
            {/* Ajout du rel ici */}
            <a href="https://pointmatchfront.vercel.app" target="_blank" rel="noopener noreferrer">Visiter le site</a>
          </div>

          <div className="card">
            <h3>Veille technologique : La 5G verte</h3>
            <p>
              Étude approfondie sur l'impact environnemental de la 5G...
            </p>
            <a href="/assets/5G/Veille_5G_Verte.pptx" target="_blank" rel="noopener noreferrer">Télécharger le powerpoint</a>
            <a href="/assets/5G/resume.pdf" target="_blank" rel="noopener noreferrer">Ouvrir le résumé PDF</a>
          </div>

          <div className="card">
            <h3>Veille technologique : Les risques liés à l'IA</h3>
            <p>
              Étude des risques liés à l'IA ...
            </p>
            <a href="/assets/IA/powerpoint_Veille_IA.pptx" target="_blank" rel="noopener noreferrer">Télécharger le powerpoint</a>
            <a href="/assets/IA/resume_ia.pdf" target="_blank" rel="noopener noreferrer">Ouvrir le résumé PDF</a>
          </div>

        </div>
      </div>
    </section>
  );
}