import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../Firebase/firebase';
import Setacima from '../../assets/setaparaCima.svg';
import Setabaixo from '../../assets/setaparaBaixo.svg';
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
    if (index < parceiros.length - 3) {
      setIndex(index + 1);
  };

  const mostrarAnterior = () => {
    if (index > 0) {
      setIndex(index - 1);
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
      <button className="botao-parceiro">Quero ser parceiro</button>
      </div>
  </div>

      <div className="carrossel-wrapper">
        <div className="carrossel-content">
          <div className="carrossel-parceiros">
            {parceiros.slice(index, index + 3).map(parc => (
              <div key={parc.id} className="card-container">
                <div className="imagem-container">
                  <div className="foto-parceiro"></div>
                </div>
                <p className="nome-parceiro">{parc.nome}</p>
              </div>
            ))}
          </div>

          <div className="setas">
            <button 
              onClick={mostrarAnterior} 
              className={index === 0 ? "disabled" : ""}
              disabled={index === 0}
            >
              <img src={Setacima} alt='Anterior' />
            </button>
            
            <button 
              onClick={mostrarProximo} 
              className={index >= parceiros.length - 3 ? "disabled" : ""}
              disabled={index >= parceiros.length - 3}
            >
              <img src={Setabaixo} alt='Próximo' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} }