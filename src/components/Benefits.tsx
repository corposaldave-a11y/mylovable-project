import React from 'react';
import './Benefits.css';

const benefitsData = [
  {
    icon: '🚀',
    title: 'Performance Incrível',
    description: 'Experimente a velocidade e a eficiência que seu projeto merece com nossa tecnologia de ponta.',
  },
  {
    icon: '💡',
    title: 'Fácil de Usar',
    description: 'Interface intuitiva e design amigável para que você comece a produzir em minutos, sem complicações.',
  },
  {
    icon: '🔒',
    title: 'Segurança Robusta',
    description: 'Seus dados e projetos estão protegidos com as mais avançadas medidas de segurança do mercado.',
  },
  {
    icon: '🤝',
    title: 'Suporte Dedicado',
    description: 'Nossa equipe está sempre pronta para ajudar, garantindo que você tenha a melhor experiência possível.',
  },
  {
    icon: '📈',
    title: 'Escalabilidade Flexível',
    description: 'Cresça sem limites. Nossa solução se adapta às suas necessidades, desde pequenos projetos a grandes empresas.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        <h2>Por que escolher nosso produto?</h2>
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
