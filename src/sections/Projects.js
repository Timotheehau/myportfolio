import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// On passe la fonction de zoom en "props" à l'enfant
const ProjectCarousel = ({ images, onImageClick }) => {
  // Sécurité simple : si pas d'images, on n'affiche rien
  if (!images || images.length === 0) return null;

  const isLoopable = images.length > 1;

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'} // S'adapte à la largeur CSS des slides
        loop={isLoopable}
        
        // --- CONFIGURATION PROPRE ---
        speed={600}
        //loopedSlides={images.length} // Aide Swiper à calculer les clones
        
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5, // Augmente l'écart visuel sans créer de vide
          slideShadows: false,
        }}
        navigation={isLoopable}
        pagination={isLoopable ? { clickable: true } : false}
        className="project-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} style={{ width: '70%' }}> 
            {/* 70% permet de voir TOUJOURS un bout des images suivantes/précédentes à 3 images */}
            <div className="img-wrapper" onClick={() => onImageClick(img)}>
              <img src={img} alt={`Slide ${index}`} />
              <div className="zoom-overlay">🔍</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function ProjectSection() {
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const dragodingoImages = ["/assets/dragodingo/home.png", "/assets/dragodingo/list.png", "/assets/dragodingo/modify.png"];
  const goalTeachImages = ["/assets/goalteach/GoalTeach1.png", "/assets/goalteach/GoalTeach2.png", "/assets/goalteach/GoalTeach3.png", "/assets/goalteach/GoalTeach4.png", "/assets/goalteach/GoalTeach5.png", "/assets/goalteach/GoalTeach6.png", "/assets/goalteach/GoalTeach7.png", "/assets/goalteach/GoalTeach8.png"];
  const jhprint3dImages = ["/assets/jhprint/jhprint1.png", "/assets/jhprint/jhprint2.png", "/assets/jhprint/jhprint3.png"];
  const matchImages = ["/assets/match/login.png", "/assets/match/registeruser.png", "assets/match/registerpro.png", "/assets/match/accueiluser.png", "/assets/match/homecoach.png", "/assets/match/searchuser.png", "/assets/match/avis.png", "/assets/match/reservation.png", "/assets/match/journalcoach.png", "/assets/match/calendaruser.png", "/assets/match/planninguser.png", "/assets/match/planningpro.png", "/assets/match/dispos.png", "/assets/match/profiluser.png"];
  
return (
    <section id="Projects">
      <div className="content-wrapper">
        <h2 className="section-title">Mes Projets</h2>
        <div className="grid">
          
          {/* --- JHPrint3D --- */}
          <div className="card">
            <div className="card-image-section">
              <ProjectCarousel 
                images={jhprint3dImages} 
                onImageClick={(img) => setFullscreenImg(img)} 
              />
            </div>
            <div className="card-info-section">
              <div className="card-header">
                <h3>JHPrint3D</h3>
                <span className="badge">Freelance</span>
              </div>
              <p className="description">
                Entreprise spécialisée dans l'impression 3D. Site vitrine avec catalogue de réalisations.
              </p>
              <div className="tech-stack">
                <span>WordPress</span>
                <span>Symfony</span>
                <span>React</span>
              </div>
              <a href="https://www.jhprint3d.fr" target="_blank" rel="noopener noreferrer" className="visit-link">
                Visiter le site →
              </a>
            </div>
          </div>

          {/* --- GoalTeach --- */}
          <div className="card">
            <div className="card-image-section">
              <ProjectCarousel 
                images={goalTeachImages} 
                onImageClick={(img) => setFullscreenImg(img)} 
              />
            </div>
            <div className="card-info-section">
              <div className="card-header">
                <h3>GoalTeach</h3>
                <span className="badge">Formation</span>
              </div>
              <p className="description">
                Plateforme éducative dédiée à l'apprentissage des matières scolaires pour les élèves du BTS SIO.
              </p>
              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <a href="/GoalTeach/accueil.html" target="_blank" rel="noopener noreferrer" className="visit-link">
                Visiter le site →
              </a>
            </div>
          </div>

          {/* --- Dragodingo --- */}
          <div className="card">
            <div className="card-image-section">
              <ProjectCarousel 
                images={dragodingoImages} 
                onImageClick={(img) => setFullscreenImg(img)} 
              />
            </div>
            <div className="card-info-section">
              <div className="card-header">
                <h3>Dragodingo</h3>
                <span className="badge">App Web</span>
              </div>
              <p className="description">
                Outil de gestion d'élevage pour le jeu Dofus. Automatisation des cycles de reproduction.
              </p>
              <div className="tech-stack">
                <span>Symfony</span>
                <span>MySQL</span>
                <span>Twig</span>
              </div>
              <a href="https://timohsymfoeval-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="visit-link">
                Visiter le site →
              </a>
            </div>
          </div>

          {/* --- .Match --- */}
          <div className="card">
            <div className="card-image-section">
              <ProjectCarousel 
                images={matchImages} 
                onImageClick={(img) => setFullscreenImg(img)} 
              />
            </div>
            <div className="card-info-section">
              <div className="card-header">
                <h3>.Match</h3>
                <span className="badge">BTS SIO</span>
              </div>
              <p className="description">
                Système de réservation de séances de coaching sportif pour la Maison des Ligues (M2L).
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>React Native</span>
                <span>JWT token</span>
                <span>Gestion de base de données</span>
                <span>Symfony</span>
                <span>MySQL</span>
              </div>
              <a href="https://pointmatchfront.vercel.app" target="_blank" rel="noopener noreferrer" className="visit-link">
                Visiter le site →
              </a>
            </div>
          </div>

          {/* --- Veille 5G --- */}
          <div className="card simple-card">
            <div className="card-info-section">
              <h3>Veille : La 5G verte</h3>
              <p className="description">
                Étude approfondie sur l'impact environnemental et les solutions de sobriété énergétique de la 5G.
              </p>
              <div className="download-links">
                <a href="/assets/5G/Veille_5G_Verte.pptx" target="_blank" rel="noopener noreferrer">PowerPoint</a>
                <a href="/assets/5G/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé PDF</a>
              </div>
            </div>
          </div>

          {/* --- Veille IA --- */}
          <div className="card simple-card">
            <div className="card-info-section">
              <h3>Veille : Risques liés à l'IA</h3>
              <p className="description">
                Analyse des enjeux éthiques et des risques de sécurité liés à l'intelligence artificielle.
              </p>
              <div className="download-links">
                <a href="/assets/IA/powerpoint_Veille_IA.pptx" target="_blank" rel="noopener noreferrer">PowerPoint</a>
                <a href="/assets/IA/resume_ia.pdf" target="_blank" rel="noopener noreferrer">Résumé PDF</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- Overlay Immersif (Sorti de la grid pour éviter les bugs) --- */}
      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImg(null)}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <img src={fullscreenImg} alt="Screenshot agrandi" />
            <button className="close-fullscreen-btn" onClick={() => setFullscreenImg(null)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}