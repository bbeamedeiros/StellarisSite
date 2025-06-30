import React, { useState } from 'react';

    <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScrU1UNU6dFPqTScYd5YKqrLAWs3xQaZ4QyqgqaUqZJVNfj2g/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Formulário de Avaliação Stellaris"
        style={{ border: 'none' }}
      >
        Carregando…
      </iframe>

{/*evita que a pag recarregue*/}
function handleSubmit(e) {
  e.preventDefault();
}

export default Formulario;



