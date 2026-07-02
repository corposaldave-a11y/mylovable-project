import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>TESTE FUNCIONANDO</h1>
        <p>
          Descubra o futuro da tecnologia com nossas soluções inovadoras.
          Simplifique sua vida, otimize seu trabalho e conecte-se com o mundo de uma nova maneira.
        </p>
        <button className="hero-button">Saiba Mais</button>
      </div>
    </section>
  );
};

export default Hero;
