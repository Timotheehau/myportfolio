import React from 'react';
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="content">
        <h1>Bonjour, je suis Timothée Hauser</h1>
        <p>Développeur front-end passionné par l'innovation et la création d'expériences utilisateur exceptionnelles.</p>
        <a href="#Projects" className="cta-button">Découvrez mes projets</a>
      </div>
    </section>
  );
}
