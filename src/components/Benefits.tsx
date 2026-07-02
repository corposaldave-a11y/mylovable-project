import React from 'react';
import './Benefits.css';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2>Por que escolher nosso produto?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
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
