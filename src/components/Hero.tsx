import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bem-vindo ao MyLovable Local</h1>
        <p>Sua solução completa para gerenciar e expandir seu negócio local.</p>
        <button className="hero-button">Saiba Mais</button>
      </div>
    </section>
  );
};

export default Hero;
