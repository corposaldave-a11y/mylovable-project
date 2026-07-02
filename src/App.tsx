import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import './App.css';

function App() {
  const benefitsData = [
    {
      icon: '🚀',
      title: 'Performance Incrível',
      description: 'Experimente a velocidade e a eficiência que seu projeto merece.',
    },
    {
      icon: '💡',
      title: 'Fácil de Usar',
      description: 'Interface intuitiva e documentação clara para você começar rapidamente.',
    },
    {
      icon: '🔒',
      title: 'Segurança Robusta',
      description: 'Proteja seus dados com as melhores práticas de segurança do mercado.',
    },
    {
      icon: '⚙️',
      title: 'Altamente Customizável',
      description: 'Adapte cada aspecto do produto às suas necessidades específicas.',
    },
    {
      icon: '🤝',
      title: 'Suporte Dedicado',
      description: 'Nossa equipe está pronta para ajudar você em cada etapa.',
    },
  ];

  return (
    <div className="App">
      <Hero />
      <Benefits benefits={benefitsData} />
    </div>
  );
}

export default App;
