import './styles.css';

export default function BotaoBranco(props) {
    return (
        <button className="botao-branco" onClick={props.onClick}>
            {props.texto}
        </button>
    );
}