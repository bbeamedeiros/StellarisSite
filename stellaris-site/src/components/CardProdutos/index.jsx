import './styles.css';

export default function CardProdutos({ titulo, descricao, imagem, link }) {
    //evento é um objeto que tem propriedade de imagem, titulo. 
    //cardEvento é uma caixa principal que envolve todo o conteudo
    //evento.imagem quer dizer que a imagem vem dentro do objeto evento. Ele é uma variavel, propriedade
    //evento.titulo quer dizer que o titulo vem dentro do objeto evento e assim por diante
    //vai criar um link clicável que leva para um chat do wpp
    return (
        <div className="card-produtos">
            <img src={imagem} alt={titulo} className="card-produto-imagem" />
            <h2 className="card-produto-titulo">{titulo}</h2>
            <p className="card-produto-descricao">{descricao}</p>
            <a href={link} className="card-produto-link">Compre aqui</a>
        </div>
    );
}
