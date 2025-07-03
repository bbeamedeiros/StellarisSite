import CardEventos from '../../components/CardEventos';
import './styles.css';
import Tardezinha from '../../assets/Tardezinha.svg';
import PortalMeiaNoite from '../../assets/Portal00h.svg';
import Avaliar from "../AvaliarEvento/avaliar";
import SaibaMaisPortal from '../SaibaMaisPortal/index';
import SaibaMaisTardezinha from '../SaibaMaisTardezinha/index';
import { Link } from 'react-router-dom';


export default function Eventos() {

    return (
        <div className="eventos-container">

            <div className="evento-futuro">
                <h1>Bora pro Próximo? Garanta o Seu Ingresso!</h1>
                <p>Em breve mais informações sobre o evento, clique em SAIBA MAIS e garanta o seu ingresso.</p>
                <div className='card-futuro'>
                    <CardEventos
                        titulo={"Tardezinha Stellaris"}
                        descricao={"Em breve!"}
                        imagem={Tardezinha}
                        link="/saiba-mais-tardezinha" />
                </div>

            </div>

            <div className="eventos-passados">
                <h1>Momentos Inesquecíveis</h1>
                <p>Só quem viveu sabe... Mas dá pra sentir o clima aqui.</p>
                <div className="card-passado">
                    <CardEventos
                        titulo={"Portal da Meia Noite (2025)"}
                        descricao={"Finalizado com sucesso!"}
                        imagem={PortalMeiaNoite}
                        link="/saiba-mais-portal"
                    />
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