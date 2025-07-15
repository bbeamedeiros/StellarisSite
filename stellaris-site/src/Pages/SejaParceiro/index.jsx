import './styles.css';

function SocilitarParceria() {
  return (
    <div className="sejaparceiro-container">
      <h1>Seja nosso parceiro</h1>
      <p>Vamos caminhar juntos! Preencha o formulário abaixo:</p>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScB2B3W92rR1ZO1b1qUlPJWM8vCveyNv1PwWseovDcfNWXNaw/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Seja um Parceiro Stellaris"
        style={{ border: 'none', marginTop: '30px' }}
      >
        Carregando…
      </iframe>
    </div>
  );
}

export default SocilitarParceria;