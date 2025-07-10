import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../Firebase/firabase';
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
    }
  };

  const mostrarAnterior = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="parceiros-container">
      <h1>Vamos crescer juntos? <p></p> 
      Seja um parceiro da Stellaris!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
        Praesent ut malesuada nunc. <br></br>
        Curabitur vel lacus nec urna egestas aliquam. <br></br>
        Donec ac sem sed lorem commodo porttitor. <br></br>
      </p>
      
      <br></br>

      <p>
        <h1>Tem interesse em se tornar <p></p> 
        um parceiro da Stellaris? </h1>
      </p>
      <p>
        Clique abaixo e preencha nosso formulário de proposta.  <br></br>
        Vamos adorar conhecer sua ideia!
      </p>
    </div>
  );
}