import React, { useEffect, useState, useRef } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../Firebase/firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SolicitarParceria from "../SejaParceiro/index";
import ImagemParceiro from '../../components/Imagens/ImagemParceiro';
import BotaoBranco from '../../components/BotaoBranco';
import setaCima from '../../assets/setaparaCima.svg';
import setaBaixo from '../../assets/setaparaBaixo.svg';
import './styles.css'

export default function Parceiros() {
  const [parceiros, setParceiros] = useState([]);
  //const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const carrosselRef = useRef(null);

  const [mostrarSetaCima, setMostrarSetaCima] = useState(false);
  const [mostrarSetaBaixo, setMostrarSetaBaixo] = useState(true);

  useEffect(() => {
    const parceirosRef = ref(database, 'parceiros');
    onValue(parceirosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.entries(data).map(([id, info]) => ({
          id, 
          ...info
        }));
        setParceiros(lista);
        setTimeout(checkScrollPosition, 100);
      }
    });
  }, []);

  const checkScrollPosition = () => {
      if (carrosselRef.current) {
        const { scrollTopo, scrollAltura, usuarioAltura } = carrosselRef.current;

        // Pode rolar para cima se não estiver no topo
        const podeScrollCima = scrollTopo > 0;
        // Pode rolar para baixo se a soma da rolagem com a altura visível for menor que a altura total
        const podeScrollBaixo = Math.round(scrollTopo + usuarioAltura) < scrollAltura;

        setMostrarSetaCima(podeScrollCima);
        setMostrarSetaBaixo(podeScrollBaixo);
      }
  };

const currentCarrosselRef = carrosselRef.current;
    if (currentCarrosselRef) {
      currentCarrosselRef.addEventListener('scroll', checkScrollPosition);
      // Também verifica a posição inicial se o conteúdo já estiver renderizado
      checkScrollPosition();
    }

    return () => {
      if (currentCarrosselRef) {
        currentCarrosselRef.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, [parceiros]);

  const mostrarProximo = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ top: 160, behavior: 'smooth' }); 
    }
  };

  const mostrarAnterior = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ top: -160, behavior: 'smooth' });
    }
  }

  return (
    <div className="parceiros-container">
      <div className="parceiros-texto">
      <div>
      <h1>Vamos crescer juntos? <p></p> 
      Seja um parceiro da Stellaris!</h1>
    
      <br></br>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
        Praesent ut malesuada nunc. <br></br>
        Curabitur vel lacus nec urna egestas aliquam. <br></br>
        Donec ac sem sed lorem commodo porttitor. <br></br>
      </p>
      </div>

      <br></br>

      <div>
        <h1>Tem interesse em se tornar <p></p> 
        um parceiro da Stellaris? </h1>
      <br></br>

      <p>
        Clique abaixo e preencha nosso formulário de proposta.  <br></br>
        Vamos adorar conhecer sua ideia!
      </p>
      

      <div className='parceiros-botao-wrapper'>
      <BotaoBranco texto="Quero ser parceiro" onClick={() => navigate('/seja-parceiro')}/>
      </div>

      </div>
  </div>

      <div className="carrossel-parceiros-wrapper">
      <div className="carrossel-parceiros" ref={carrosselRef}>
        {parceiros.map(parc => (
          <div key={parc.id} className="card-parceiros">
            <ImagemParceiro nome={parc.imagem} />
            <p>{parc.nome}</p>
      </div>
        ))}
        </div>

        <div className="setas">
          {mostrarSetaCima && (
            <button onClick={mostrarAnterior}>
              <img src={setaCima} alt='Anterior' />
            </button>
          )}
          {mostrarSetaBaixo && (
          <button onClick={mostrarProximo}>
            <img src={setaBaixo} alt='Próximo' />
          </button>
          )}

        </div>
      </div>
    </div>
  );
}