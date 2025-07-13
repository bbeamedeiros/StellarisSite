import React, { useState } from 'react';

    <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScB2B3W92rR1ZO1b1qUlPJWM8vCveyNv1PwWseovDcfNWXNaw/viewform?usp=dialog"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Formulário de Solicitação de Parceria"
        style={{ border: 'none' }}
      >
        Carregando…
      </iframe>

{/*evita que a pag recarregue*/}
function handleSubmit(e) {
  e.preventDefault();
}

export default Formulario;