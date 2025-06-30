import CardEventos from '../../components/CardEventos';
import './styles.css';
import Tardezinha from '../../assets/Tardezinha.svg';
import PortalMeiaNoite from '../../assets/Portal00h.svg';

export default function Eventos() {

    return (
        <div className="eventos-container">

            <div className="evento-futuro">
                <h1>Bora pro Próximo? Garanta o Seu Ingresso!</h1>
                <p>Em breve mais informações sobre o evento.</p>
                <CardEventos
                    titulo={"Tardezinha Stellaris - 2025"}
                    descricao={"Em breve mais informações sobre o evento."}
                    imagem={Tardezinha}
                    link={"#"} />
            </div>

            <div className="eventos-passados">
                <h1>Momentos Inesquecíveis</h1>
                <p>Só quem viveu sabe... Mas dá pra sentir o clima aqui.</p>
                <CardEventos 
                    titulo={"Portal da Meia Noite - 2025"}
                    descricao={"Finalizado com sucesso!"}
                    imagem={PortalMeiaNoite}
                    link={"#"}
                />
            </div>
        </div>
    );
}