import React from 'react';
import './Avaliar.css';

function Avaliar() {
  return (
    <div className="avaliar-container">
      <h1>Avalie os Eventos</h1>
      <p>Sua opinião é muito importante para nós! Preencha o formulário abaixo:</p>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScrU1UNU6dFPqTScYd5YKqrLAWs3xQaZ4QyqgqaUqZJVNfj2g/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Formulário de Avaliação"
        style={{ border: 'none', marginTop: '30px' }}
      >
        Carregando…
      </iframe>
    </div>
  );
}

export default Avaliar;
