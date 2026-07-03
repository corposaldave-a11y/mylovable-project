import React from 'react';
import './Benefits.css';

const Benefits: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">Por que escolher o MyLovable Local?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="https://www.lovable.dev/images/icon-fast.svg" alt="Ícone de Velocidade" />
            </div>
            <h3>Geração Rápida</h3>
            <p>Obtenha código funcional em segundos, não em horas. Nosso assistente é otimizado para velocidade e eficiência.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="https://www.lovable.dev/images/icon-accurate.svg" alt="Ícone de Precisão" />
            </div>
            <h3>Código Preciso</h3>
            <p>Geração de código com alta fidelidade às suas especificações, minimizando erros e retrabalho.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="https://www.lovable.dev/images/icon-customizable.svg" alt="Ícone de Customização" />
            </div>
            <h3>Altamente Customizável</h3>
            <p>Adapte o código gerado às suas necessidades exatas. Controle total sobre o estilo e a lógica.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="https://www.lovable.dev/images/icon-integrations.svg" alt="Ícone de Integrações" />
            </div>
            <h3>Integrações Perfeitas</h3>
            <p>Integra-se facilmente com suas ferramentas e fluxos de trabalho existentes, sem interrupções.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="https://www.lovable.dev/images/icon-support.svg" alt="Ícone de Suporte" />
            </div>
            <h3>Suporte Dedicado</h3>
            <p>Nossa equipe está pronta para ajudar com qualquer dúvida ou problema que você possa ter.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="https://www.lovable.dev/images/icon-secure.svg" alt="Ícone de Segurança" />
            </div>
            <h3>Segurança em Primeiro Lugar</h3>
            <p>Seus dados e projetos são tratados com a máxima segurança e confidencialidade.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
