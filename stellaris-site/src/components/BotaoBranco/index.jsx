import './styles.css';

export default function BotaoBranco({ texto, onClick }) {
    return (
        <button className="botao-branco" onClick={onClick}>
            {texto}
        </button>
    );
}