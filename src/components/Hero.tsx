import React from 'react';
import './Hero.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          Transforme sua ideia em realidade digital
        </h1>
        <p className="hero-subtitle">
          Desenvolvimento web e mobile de alta qualidade para impulsionar seu negócio.
        </p>
        <button className="hero-button" aria-label="Saiba mais sobre nossos serviços">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
