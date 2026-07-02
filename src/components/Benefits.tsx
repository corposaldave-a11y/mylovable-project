import React from 'react';
import './Benefits.css';

const benefitsData = [
  {
    icon: '🚀',
    title: 'Lançamento Rápido',
    description: 'Coloque suas ideias no ar em tempo recorde com nossa plataforma otimizada.',
  },
  {
    icon: '💡',
    title: 'Design Intuitivo',
    description: 'Interfaces amigáveis e modernas que encantam seus usuários e facilitam a navegação.',
  },
  {
    icon: '📈',
    title: 'Escalabilidade Flexível',
    description: 'Cresça sem preocupações. Nossa arquitetura se adapta às suas necessidades futuras.',
  },
  {
    icon: '🔒',
    title: 'Segurança Robusta',
    description: 'Proteja seus dados e a privacidade de seus usuários com as melhores práticas de segurança.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2>Por que escolher MyLovable Local?</h2>
        <p className="benefits-subtitle">Descubra os diferenciais que nos tornam a melhor opção para o seu projeto.</p>
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="benefits-cta">
          <button className="cta-button">Comece Agora</button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
