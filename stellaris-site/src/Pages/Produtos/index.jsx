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
          titulo={"Tardezinha Stellaris - 2025"}
          descricao={"Produto indisponível no momento. Em breve mais informações."}
          imagem={tardezinhaprodutos}
          link={"#"} />
      </div>

      <div className='produtos-colecao'>
        <h1>Portal da Meia Noite</h1>
        <p>Descubra os itens únicos que foram vendidos na primeira edição desse evento icônico.</p>

        <div className='card-produtos-container'>
          <CardProdutos
            titulo={"Copo Portal 00h"}
            descricao={"Copo personalizado do evento."}
            imagem={tardezinhaprodutos}
            link={"#"} />

          <CardProdutos
            titulo={"Chaveiro Portal 00h"}
            descricao={"Chaveiro exclusivo do evento."}
            imagem={tardezinhaprodutos}
            link={"#"} />


          <CardProdutos
            titulo={"Combo intergaláctico Portal 00h"}
            descricao={"Combinação de produtos do evento."}
            imagem={tardezinhaprodutos}
            link={"#"} />

        </div>

      </div>

    </div>
  );
}