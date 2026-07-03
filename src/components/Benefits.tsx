import React from 'react';
import './Benefits.css';

const Benefits: React.FC = () => {
  const benefitsData = [
    {
      icon: '🚀',
      title: 'Performance Otimizada',
      description: 'Sites rápidos e responsivos que encantam seus usuários e melhoram seu SEO.',
    },
    {
      icon: '🎨',
      title: 'Design Personalizado',
      description: 'Criações únicas que refletem a identidade da sua marca e se destacam da concorrência.',
    },
    {
      icon: '📱',
      title: 'Responsividade Total',
      description: 'Experiência perfeita em qualquer dispositivo, do desktop ao smartphone.',
    },
    {
      icon: '🔒',
      title: 'Segurança Reforçada',
      description: 'Proteção avançada para seus dados e a tranquilidade de seus clientes.',
    },
    {
      icon: '📈',
      title: 'SEO Amigável',
      description: 'Otimização para motores de busca que impulsiona sua visibilidade online.',
    },
    {
      icon: '💡',
      title: 'Suporte Dedicado',
      description: 'Atendimento rápido e eficiente para todas as suas necessidades e dúvidas.',
    },
  ];

  return (
    <section className="benefits-section">
      <div className="container">
        <h2>Por que escolher a Lovable?</h2>
        <p className="subtitle">Descubra as vantagens de ter um site desenvolvido por especialistas.</p>
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div className="benefit-card" key={index}>
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
