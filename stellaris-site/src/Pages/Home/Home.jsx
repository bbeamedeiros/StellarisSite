export default Home;

//Firebase + cloudinary
import ImagemEvento from '../../components/Imagens/ImagemEvento';
import ImagemProduto from '../../components/Imagens/ImagemProduto';
import ImagemParceiro from '../../components/Imagens/ImagemParceiro';
import { ref, onValue } from 'firebase/database';
import { database } from '../../Firebase/firebase';
import { useEffect, useState, useRef } from 'react';


//componentes essencias
import CardEventos from '../../components/CardEventos';
import CardProdutos from '../../components/CardProdutos';
import BotaoBranco from '../../components/BotaoBranco';

//imagens dos eventos
import Tardezinha from '../../assets/Tardezinha.svg';
import PortalMeiaNoite from '../../assets/Portal00h.svg';

import './Home.css'
import header from '../../assets/header.svg'
import StellarisGrupo from '../../assets/StellarisGrupo.svg'

//icones da parte do que oferecemos
import iconDrink from '../../assets/iconDrink.svg'
import iconPaint from '../../assets/iconPaint.svg'
import iconHand from '../../assets/iconHand.svg'
import iconStar from '../../assets/iconStar.svg'
import iconMsg from '../../assets/iconMsg.svg'

import setaDireita from '../../assets/setaparaDireita.svg';
import setaEsquerda from '../../assets/setaparaEsquerda.svg';

//Saiba mais
import SaibaMaisPortal from '../SaibaMaisPortal/index';
import SaibaMaisTardezinha from '../SaibaMaisTardezinha/index';

function Home() {
    const [eventos, setEventos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [parceiros, setParceiros] = useState([]);
    //const [scrollPosition, setScrollPosition] = useState(0);
    const carrosselRef = useRef(null);
    
    //Evenetos
    useEffect(() => {
    const eventosRef = ref(database, 'eventos');
    onValue(eventosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.entries(data).map(([id, info]) => ({
          id,
          ...info
        }));
        setEventos(lista);
      }
    });

    //Produtos
    const produtosRef = ref(database, 'produtos');
    onValue(produtosRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const lista = Object.entries(data).map(([id, info]) => ({
        id,
        ...info
      }));
      setProdutos(lista);
    }
  });

    //Parceiros
    const parceirosRef = ref(database, 'parceiros');
    onValue(parceirosRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const lista = Object.entries(data).map(([id, info]) => ({
        id,
        ...info
      }));
      setParceiros(lista);
    }
  });
  
  }, []);

  const mostrarProximo = () => {
  if (carrosselRef.current) {
    carrosselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  }
};

const mostrarAnterior = () => {
  if (carrosselRef.current) {
    carrosselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

    return (
        <div>
            <div className='header'>
                <img src={header}></img>
            </div>
            <div className="sobre-nos">
                <div className='sobre-nos-texto'>
                    <p className='title'>Quem somos <br /> na fila do rolê?</p>
                    <p className='quem-somos'>A Stellaris é uma produtora que nasceu no universo universitário para criar experiências únicas e cheias de identidade. Mais do que festas, construímos momentos marcantes, com criatividade, inclusão e conexão real entre as pessoas.</p>
                </div>
                <div className='sobre-nos-imagem'>
                    <img src={StellarisGrupo}></img>
                </div>
            </div>
            <div className='eventos-stellaris'>
                <h1 className='title'>Eventos Stellaris</h1>
                <p className='sub-title'>Tudo que é Stellaris, em um só lugar! Confira nossos eventos e viva a experiência completa.</p>
                <div className='eventos-cards'>
                    {eventos.slice(0, 3).map((evento) => (
                    <CardEventos
                        key={evento.id}
                        titulo={evento.titulo}
                        descricao={evento.descricao}
                        link={evento.link}
                        imagem={<ImagemEvento nome={evento.imagem} />}
                    />
                    ))}
                </div>
                <BotaoBranco texto={"Explorar Eventos"} onClick={() => window.location.href = '/eventos'} />
            </div>
            <div className='produtos-stellaris'>
                <section>
                    <p className='title'>Produtos Stellaris</p>
                    <p className='sub-title'>Conheça os produtos oficiais!</p>
                    <div className='produtos-cards'>
                    {produtos.slice(0, 3).map(produto => (
                     <CardProdutos
                        key={produto.id}
                        titulo={produto.titulo}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        link={produto.link}
                        imagem={<ImagemProduto nome={produto.imagem} />}
                    />
                    ))}
                        </div>
                    <div>
                        <BotaoBranco texto={"Ver catálogo completo"} onClick={() => window.location.href = '/produtos'} />
                    </div>
                </section>

                <section className="parceiros-home-section">
  <h1 className="title">Nossos Parceiros</h1>
  <p className="sub-title">Conheça quem faz parte do nosso universo</p>
  
  <div className="carrossel-parceiros-home-wrapper">
    

    <div className="carrossel-parceiros-home" ref={carrosselRef}>
      {parceiros.map(parc => (
        <div key={parc.id} className="card-parceiros-home">
          <ImagemParceiro nome={parc.imagem} />
          <p>{parc.nome}</p>
        </div>
      ))}

 
      
    </div>
     <div className="setas">  
      <button onClick={mostrarAnterior}>
          <img src={setaDireita} alt='Anterior' />
        </button>
      <button onClick={mostrarProximo}>
          <img src={setaEsquerda} alt='Próximo' />
        </button>

        
        
      </div>
    
  </div>
</section>

            </div>
            <div className='missao-container'>
                <div className='missao'>
                    <h3 className='titulo-missao'>Nossa Missão</h3>
                    <p className='texto-missao'>A Stellaris tem como missão principal a conexão entre pessoas através de experiências únicas, criativas e inesquecíveis. Além disso, também é objetivado transformar eventos universitários em verdadeiros universos de celebração, onde energias, liberdade de expressão e o sentimento de pertencimento brilham como constelações.</p>
                    <h3 className='titulo-valores'>Nossos Valores</h3>
                    <div className='texto-valores'>
                        <li className='lista'>Criatividade com propósito - Valorizamos a originalidade em todas as etapas dos nossos serviços, acreditando que ideias criativas são essenciais para gerar experiências marcantes e diferenciadas.</li>
                        <li className='lista'>Compromisso com a excelência- Buscamos a máxima qualidade na concepção, planejamento e execução dos nossos eventos, sempre atentos aos detalhes que transformam uma festa em uma vivência inesquecível.</li>
                        <li className='lista'>Respeito e inclusão - Promovemos ambientes acolhedores, diversos e seguros, onde todas as pessoas possam se sentir pertencentes e respeitadas.</li>
                        <li className='lista'>Conexão com o público - Mantemos um diálogo aberto e próximo com o nosso público, compreendendo suas expectativas para entregar experiências que realmente façam sentido e gerem conexões.</li>
                        <li className='lista'>Ética e responsabilidade - Atuamos com transparência, responsabilidade e respeito às parcerias que firmamos, conscientes do nosso papel social dentro da sociedade.</li>
                        <li className='lista'>Evolução constante - Estamos sempre em movimento, acompanhando tendências, ouvindo nosso público e aprimorando nossos processos para manter a Stellaris em constante crescimento.</li>
                    </div>
                    <h3 className='titulo-oferecimenots'>O que oferecemos:</h3>
                    <div className='oferecimentos'>
                        <div className='parcerias'>
                            <img src={iconHand}></img>
                            <h4>Gestão de eventos em parceiras com CAs e Atléticas</h4>
                            <p className='txt-oferecimento'>Atuamos junto a centros acadêmicos e organizações estudantis, cuidando de toda a produção e logística.</p>
                        </div>
                        <div className='engajamento'>
                            <img src={iconMsg}></img>
                            <h4>Ações de engajamento e conteúdo</h4>
                            <p className='txt-oferecimento'>Produzimos conteúdos digitais que ampliam o alcance e o impacto dos nossos eventos.</p>
                        </div>
                        <div className='festa'>
                            <img src={iconDrink}></img>
                            <h4>Produção de festas temáticas para os públicos universitário e adulto</h4>
                            <p className='txt-oferecimento'>Eventos com identidade visual e conceito criativo – do planejamento à execução.</p>
                        </div>
                        <div className='imersao'>
                            <img src={iconStar}></img>
                            <h4>Experiências imersivas</h4>
                            <p className='txt-oferecimento'>Utilizamos narrativas e conceituações cósmicas para que cada evento pareça um salto intergaláctico – “da Terra para a Stellaris”.</p>
                        </div>
                        <div className='idd-visual'>
                            <img src={iconPaint}></img>
                            <h4>Criação de identidades visuais para eventos</h4>
                            <p className='txt-oferecimento'>Desenvolvemos nomes, temas, artes e narrativas que diferenciam cada festa e fortalecem a cultura universitária local.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

