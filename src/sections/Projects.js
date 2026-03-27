import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// On passe la fonction de zoom en "props" à l'enfant
const ProjectCarousel = ({ images, onImageClick }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="project-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="img-wrapper" onClick={() => onImageClick(img)}>
              <img src={img} alt={`Screenshot ${index}`} />
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
        <h2>Projets</h2>
        <div className="grid">
          <div className="card">
            <h3>JHPrint3D</h3>
              <ProjectCarousel 
                images={jhprint3dImages} 
                onImageClick={(img) => setFullscreenImg(img)} 
              />
            <p>
              JHPrint3D est une entreprise spécialisée dans l'impression 3D...
            </p>
            {/* Ajout du rel ici */}
            <p className="skills">Site créé via WordPress, mise à jour à venir en Symfony et React !</p>
            <a href="https://www.jhprint3d.fr" target="_blank" rel="noopener noreferrer">Visiter le site</a>
          </div>

          <div className="card">
            <h3>GoalTeach</h3>
              <ProjectCarousel 
                images={goalTeachImages} 
                onImageClick={(img) => setFullscreenImg(img)} 
              />
            <p>
              GoalTeach est un site vitrine, une plateforme éducative en ligne dédiée à l'apprentissage des matières scolaires pour les élèves du BTS SIO...
            </p>
            <p className="skills">Compétences utilisées : HTML, CSS</p>
            {/* Ajout du rel ici */}
            <a href="/GoalTeach/accueil.html" target="_blank" rel="noopener noreferrer">Visiter le site</a>
          </div>

          <div className="card">
            {/* On donne la fonction setFullscreenImg au carrousel */}
            <h3>Dragodingo</h3>
            <ProjectCarousel 
                images={dragodingoImages} 
                onImageClick={(img) => setFullscreenImg(img)} 
            />
            
            <p>Application Symfony de gestion de montures pour le jeu Dofus.</p>
            <p className="skills">Symfony, MySQL, HTML, CSS</p>
            <a href="https://timohsymfoeval-production.up.railway.app/" target="_blank" rel="noopener noreferrer">Visiter le site</a>
          </div>

          <div className="card">
            <h3>.Match</h3>
              <ProjectCarousel 
                images={matchImages} 
                onImageClick={(img) => setFullscreenImg(img)} 
              />
            <p>Le projet de fin d'année de BTS SIO SLAM. Dans le cadre de la M2L, les sportifs peuvent réserver une séance de coaching avec les coachs de la maison des ligues</p>
            <p className="skills">Compétences utilisées : Symfony, React, MySQL, Mise en place de sécurité, Système de mailer</p>
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
      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImg(null)}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <img src={fullscreenImg} alt="Zoom" />
            <button className="close-fullscreen-btn" onClick={() => setFullscreenImg(null)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}