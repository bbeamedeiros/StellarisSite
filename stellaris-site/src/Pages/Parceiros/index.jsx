import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../Firebase/firebase';
import BotaoBranco from '../../components/BotaoBranco';
import setaCima from '../../assets/setaparaCima.svg';
import setaBaixo from '../../assets/setaparaBaixo.svg';
import './styles.css'

export default function Parceiros() {
  const [parceiros, setParceiros] = useState([]);
  const [index, setIndex] = useState(0);

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
      }
    });
  }, []);

  const mostrarProximo = () => {
    if (parceiros.length > 3 && index < parceiros.length - 3) {
      setIndex(index + 1);
    }
  };

  const mostrarAnterior = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const ehUltimo = index >= parceiros.length - 3;

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
      <BotaoBranco texto="Quero ser parceiro" onClick={() => window.location.href = '/SejaParceiro'}/>
      </div>

      </div>
  </div>

      <div className="carrossel-parceiros-wrapper">
      <div className="carrossel-parceiros">
        {parceiros.slice(index, index + 3).map(parc => (
          <div key={parc.id} className="card-parceiros">
            <div className="foto-parceiro"></div>
            <p>{parc.nome}</p>
      </div>
        ))}
        </div>

        <div className="setas">
          {index > 0 && (
            <button onClick={mostrarAnterior}>
              <img src={setaCima} alt='Anterior' />
            </button>
          )}
          <button onClick={mostrarProximo}>
            <img 
              src={ehUltimo ? setaCima : setaBaixo} 
              alt='Próximo' 
            />
          </button>
        </div>
      </div>
    </div>
  );
}