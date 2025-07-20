import './styles.css';

export default function CardProdutos(props) {
    const handleClick = () => {
        // ve se o prop do link tar vazio
        if (props.link) {
            window.open(props.link, '_blank');
        } else {
            // se ele tiver vazio da um pop-up
            alert('Produto indisponível para compra no momento.');
        }
    };

    return (
        <div className="card-produtos">
            <div className="card-produto-imagem">
                {props.imagem}
            </div>

            <div className='card-produto-informacoes'>
                <h2 className="card-produto-titulo">{props.titulo}</h2>
                <p className="card-produto-descricao">{props.descricao}</p>
            </div>
            <div className='card-produto-acao'>
                <p className="card-produto-preco">R${props.preco}</p>
                <button className="botao-icon" onClick={handleClick}>
                    <span class="material-symbols-outlined card-icon">
                        shopping_cart
                    </span>
                </button>
            </div>

        </div>
    );
}
