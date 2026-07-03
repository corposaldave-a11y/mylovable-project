import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Gere Código <span className="highlight">Instantaneamente</span> com MyLovable Local
        </h1>
        <p className="hero-subtitle">
          Seu assistente pessoal de IA para desenvolvimento, transformando ideias em código funcional em segundos.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Comece Agora</button>
          <button className="btn btn-secondary">Saiba Mais</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          src="https://www.lovable.dev/images/hero-mockup.webp"
          alt="MyLovable Local Interface Mockup"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
