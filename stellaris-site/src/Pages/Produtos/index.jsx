import CardProdutos from '../../components/CardProdutos';
import tardezinhaprodutos from '../../assets/tardezinhaprodutos.svg';
import './styles.css';

export default function Produtos() {
  return (
    <div className="produtos-container">
      <h1>Explore o Catálogo Stellaris</h1>
      <p>Produtos oficiais, feitos para quem vive a experiência.</p>

      <div className='produtos-colecao'>
        <h1>Tardezinha da Stellaris</h1>
        <p>Conheça os produtos exclusivos dessa coleção especial.</p>

        <CardProdutos
          titulo={"Tardezinha Stellaris"}
          descricao={"Produto indisponível no momento. Em breve mais informações."}
          imagem={tardezinhaprodutos}
          preco={"0,00"} />
      </div>

      <div className='produtos-colecao'>
        <h1>Portal da Meia Noite 1ª Edição</h1>
        <p>Descubra os itens únicos que foram vendidos na primeira edição desse evento icônico.</p>

        <div className='produtos-cards-container'>
          <CardProdutos
            titulo={"Copo"}
            descricao={"Copo personalizado do evento."}
            imagem={tardezinhaprodutos}
            link={"#"} />

          <CardProdutos
            titulo={"Chaveiro "}
            descricao={"Chaveiro exclusivo do evento."}
            imagem={tardezinhaprodutos}
            link={"#"} />

          <CardProdutos
            titulo={"Combo intergaláctico"}
            descricao={"Combinação de produtos do evento."}
            imagem={tardezinhaprodutos}
            link={"#"} />

        </div>

      </div>

    </div>
  );
}