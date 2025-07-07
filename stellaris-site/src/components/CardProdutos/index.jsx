import './styles.css';

export default function CardProdutos(props) {

    return (
        <div className="card-produtos">
            <img src={props.imagem} alt={props.titulo} className="card-produto-imagem" />
            <div className='card-produto-informacoes'>
                <h2 className="card-produto-titulo">{props.titulo}</h2>
                <p className="card-produto-descricao">{props.descricao}</p>
            </div>
            <div className='card-produto-acao'>
                <p className="card-produto-preco">R${props.preco}</p>
                <button className="botao-icon" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfw3d_rb5l_Bpv-2YfN3lSLuGT4UbgKbU1A7fmJpBstsF9uEQ/viewform', '_blank')}>
                    <i className="material-icons">shopping_cart</i>
                </button>
            </div>

        </div>
    );
}
