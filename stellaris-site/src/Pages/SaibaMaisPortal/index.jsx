import './styles.css';
import Carrossel from '../../components/Carrossel';

export default function DetalhesPortal() {
  const imagensDoPortal = [
    "https://res.cloudinary.com/dpc8oscuf/image/upload/v1753111242/CARTAZ_OFICIAL_8_oclusa.svg",
    "https://res.cloudinary.com/dpc8oscuf/image/upload/v1753111241/IMG_2503_2_rw7hdj.svg",
    "https://res.cloudinary.com/dpc8oscuf/image/upload/v1753111242/IMG_2542_1_afvakz.svg",
    "https://res.cloudinary.com/dpc8oscuf/image/upload/v1753111242/IMG-20250412-WA0081_1_nt0xuj.svg",
    "https://res.cloudinary.com/dpc8oscuf/image/upload/v1753111242/IMG-20250412-WA0089_1_yq1zie.svg",
  ];
  return (
    <div className="detalhes-portal-container">
      <h1 className='titulo-portal'>Portal da Meia Noite: Uma Experiência Inesquecível! </h1>
      {/*chamando o componente carrossel aqui*/}
      <Carrossel imagens={imagensDoPortal} />
      <div className='descricao-portal'>
        <h2>Descrição do Evento</h2>
        <br />
        <p>
          Prepare-se para reviver a experiência que redefiniu o conceito de festa universitária em Quixadá!
          <br />
          A Stellaris, produtora de eventos com a energia universitária que você conhece, teve a honra de apresentar o <strong>Portal da Meia Noite</strong>,
          um evento que abriu as portas para uma nova dimensão de entretenimento.
        </p>
        <br />
        <h3>Detalhes do evento:</h3>
        <br />
        <ul> 
          <li>
            <span className="detalhe-titulo">Data:</span>
            <span className="detalhe-texto"> 11 de abril de 2025 (sexta-feira)</span>
          </li>
          <li>
            <span className="detalhe-titulo">Local:</span>
            <span className="detalhe-texto"> Vila Sertão</span>
          </li>
          <li>
            <span className="detalhe-titulo">Público Estimado:</span>
            <span className="detalhe-texto"> Aproximadamente 300 jovens, reunindo estudantes de diversas universidades.</span>
          </li>
          <li>
            <span className="detalhe-titulo">Foco:</span>
            <span className="detalhe-texto"> Uma calourada intergaláctica e inesquecível, pensada para integrar e celebrar a energia universitária com muita música e diversão.</span>
          </li>
        </ul>

        <br />
        <h3>Nossos agradecimentos</h3>
        <br />
        <p>
          A equipe Stellaris vem por meio deste, agradecer de coração a cada um de vocês que colou na nossa calourada e fez esse evento acontecer!
          <br />
          <strong>Quem viveu, sabe... foi uma noite insana!</strong> Agradecemos imensamente a cada um que fez parte dessa história, contribuindo para que o Portal da Meia Noite fosse um sucesso de primeira viagem.
          Fiquem ligados, pois o próximo evento já está sendo preparado com muito carinho e surpresas! 
          <br />
          Acompanhe a Stellaris (@stellarisqxd) para não perder nenhuma novidade!
        </p>
      </div>
    </div>
  );
}