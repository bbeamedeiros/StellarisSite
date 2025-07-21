import './styles.css';
import Carrossel from '../../components/Carrossel';

export default function DetalhesPortal() {
  //array das imagens que importei ali em cima 
  const imagensDoPortal = [
    "https://res.cloudinary.com/dpc8oscuf/image/upload/v1753111971/APRESENTA%C3%87%C3%83O-EVENTOcorte2_siho9j.png"
  ];

  return (
    <div className="detalhes-portal-container">
      <h1 className='titulo-portal'>Tardezinha da Stellaris: Edição Sunset!</h1>
      {/*chamando o componente carrossel aqui*/}
      <Carrossel imagens={imagensDoPortal} />
      <div className='descricao-portal'>
        <h2>Descrição do Evento</h2>
        <br />
        <p>
          Prepare-se para uma tarde inesquecível! Em breve com mais informações.
          <br />
        </p>
        <br />
        <h3>Detalhes do evento:</h3>
        <br />
        <ul> 
          <li>
            <span className="detalhe-titulo">Data:</span>
            <span className="detalhe-texto"> 13 de setembro de 2025 (sábado)</span>
          </li>
          <li>
            <span className="detalhe-titulo">Local:</span>
            <span className="detalhe-texto"> Pinheiro Society</span>
          </li>
          <li>
            <span className="detalhe-titulo">Público Estimado:</span>
            <span className="detalhe-texto"> </span>
          </li>
          <li>
            <span className="detalhe-titulo">Foco:</span>
            <span className="detalhe-texto">Entretenimento ao ar livre com clima de pôr do sol, música e integração da galera. </span>
          </li>
        </ul>

        <br />
        <h3></h3>
        <br />
        <p>
         
        </p>
      </div>
    </div>
  );
}