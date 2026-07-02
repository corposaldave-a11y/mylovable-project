import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bem-vindo ao Nosso Produto Incrível!</h1>
        <p>A solução perfeita para todas as suas necessidades. Descubra o poder da inovação.</p>
        <button className="hero-button">Saiba Mais</button>
      </div>
    </section>
  );
};

export default Hero;
