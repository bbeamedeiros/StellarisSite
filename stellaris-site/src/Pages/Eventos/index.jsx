import CardEventos from '../../components/CardEventos';
import './styles.css';
import { Link } from 'react-router-dom';

//Firebase + cloudinary
import ImagemEvento from '../../components/Imagens/ImagemEvento';
import { ref, onValue } from 'firebase/database';
import { database } from '../../Firebase/firebase';
import { useEffect, useState } from 'react';


export default function Eventos() {
const [eventos, setEventos] = useState([]);
    
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
  }, []);

const futuros = eventos.filter(e => e.status === 'futuro');
const passados = eventos.filter(e => e.status === 'passado');

    return (
        <div className="eventos-container">

            <div className="evento-futuro">
                <h1>Bora pro Próximo? Garanta o Seu Ingresso!</h1>
                <p>Em breve mais informações sobre o evento, clique em SAIBA MAIS e garanta o seu ingresso.</p>
                <div className='card-futuro'>
                    {futuros.map((evento) => (
                        <CardEventos
                            key={evento.id}
                            titulo={evento.titulo}
                            descricao={evento.descricao}
                            link={evento.link}
                            imagem={<ImagemEvento nome={evento.imagem} />}
                        />
                    ))}
                </div>

            </div>

            <div className="eventos-passados">
                <h1>Momentos Inesquecíveis</h1>
                <p>Só quem viveu sabe... Mas dá pra sentir o clima aqui.</p>
                <div className="card-passado">
                    {passados.map((evento) => (
                        <CardEventos
                            key={evento.id}
                            titulo={evento.titulo}
                            descricao={evento.descricao}
                            link={evento.link}
                            imagem={<ImagemEvento nome={evento.imagem} />}
                        />
                    ))}
                </div>

                <div className="avaliacao-eventos">
                    <p>
                        <strong>Avalie os eventos que você participou:</strong>{' '}
                        <Link to="/avaliar">Clique aqui</Link>. <br />
                        Eventos futuros terão opção de avaliação após a realização.
                    </p>
                </div>
            </div>
        </div>

    );
}