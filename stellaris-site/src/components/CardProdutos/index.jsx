import './styles.css';

export default function CardProdutos(props) {

    return (
        <div className="card-produtos">
            <img src={props.imagem} alt={props.titulo} className="card-produto-imagem" />
            <div>
                <h2 className="card-produto-titulo">{props.titulo}</h2>
                <p className="card-produto-descricao">{props.descricao}</p>
            </div>
            <div className='card-produto-acao'>
                <p className="card-produto-preco">R${props.preco}</p>
                <button className="botao-icon" onClick={() => window.location.href = props.link}>
                    <i className="material-icons">shopping_cart</i>
                </button>
            </div>

        </div>
    );
}
