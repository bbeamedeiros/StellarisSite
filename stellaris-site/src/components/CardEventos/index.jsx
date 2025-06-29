export default function CardEventos({ titulo, descricao, imagem, link }) {
    //evento é um objeto que tem propriedade de imagem, titulo. 
    //cardEvento é uma caixa principal que envolve todo o conteudo
    //evento.imagem quer dizer que a imagem vem dentro do objeto evento. Ele é uma variavel, propriedade
    //evento.titulo quer dizer que o titulo vem dentro do objeto evento e assim por diante
    //vai criar um link clicável que leva para um chat do wpp
    return (
        <div className="card-evento">
            <img src={imagem} alt={titulo} className="card-evento-imagem" />
            <h2 className="card-evento-titulo">{titulo}</h2>
            <p className="card-evento-descricao">{descricao}</p>
            <a href={link} className="card-evento-link">Saiba mais</a>
        </div>
    );
}
