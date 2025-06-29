import CardEventos from '../../components/CardEventos';
import './styles.css';

export default function Eventos() {

    const evento = {
        titulo: "Próximo Evento",
        descricao: "Em breve mais informações sobre o evento.",
        imagem: "https://stellarisqxd.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-11.22.08-AM.jpeg",
        link: "#"
    }

    return (
        <div className="eventos-container">

            <div className="evento-futuro">
                <h1>Bora pro Próximo? Garanta o Seu Ingresso!</h1>
                <p>Em breve mais informações sobre o evento.</p>
                <CardEventos evento={evento} />

            </div>

            <div className="eventos-passados">
                <h1>Momentos Inesquecíveis</h1>
                <p>Só quem viveu sabe... Mas dá pra sentir o clima aqui.</p>
            </div>
        </div>
    );
}