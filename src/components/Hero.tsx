import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Transforme sua ideia em realidade digital</h1>
          <p className="hero-subtitle">
            Desenvolvemos sites modernos, responsivos e otimizados para o sucesso do seu negócio online.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Solicitar Orçamento</a>
            <a href="#services" className="btn btn-secondary">Nossos Serviços</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="https://assets-global.website-files.com/65b7964e588321d603a6125d/65b7964e588321d603a6127e_hero-image.png"
            alt="Desenvolvimento Web Moderno"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
