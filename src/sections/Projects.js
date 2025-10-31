export default function ProjectSection() {
  return (
    <section id="Projects">
      <div className="max-w-5xl mx-auto">
        <h2>🚀 Projets</h2>
        <div className="grid">
          <div className="card">
            <h3>JHPrint3D</h3>
            <p>
              JHPrint3D est une entreprise spécialisée dans l'impression 3D...
            </p>
            <a href="https://www.jhprint3d.com">Visiter le site</a>
          </div>
          <div className="card">
            <h3>GoalTeach</h3>
            <p>
              GoalTeach est une plateforme éducative en ligne...
            </p>
            <a href="/GoalTeach/accueil.html">Visiter le site</a>
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
