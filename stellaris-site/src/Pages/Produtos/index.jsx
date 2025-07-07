import CardProdutos from '../../components/CardProdutos';
import tardezinhaprodutos from '../../assets/tardezinhaprodutos.svg';
import copo from '../../assets/copo.svg';
import chaveiro from '../../assets/chaveiro.svg';   
import combo from '../../assets/combo.svg';
import './styles.css';

export default function Produtos() {
  let googleFormsLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfw3d_rb5l_Bpv-2YfN3lSLuGT4UbgKbU1A7fmJpBstsF9uEQ/viewform';
  return (
    <div className="produtos-container">
      <div className='produtos-header'>
        <h1>Explore o Catálogo Stellaris</h1>
        <p>Produtos oficiais, feitos para quem vive a experiência.</p>
      </div>

      <div className='produtos-colecao'>
        <h1>Tardezinha da Stellaris</h1>
        <p>Conheça os produtos exclusivos dessa coleção especial.</p>
        <div className='produtos-cards-tarde'>
          <CardProdutos
            titulo={"Tardezinha Stellaris"}
            descricao={"Produto indisponível no momento. Em breve mais informações."}
            imagem={tardezinhaprodutos}
            preco={"0,00"} />
        </div>
      </div>

      <div className='produtos-colecao'>
        <h1>Portal da Meia Noite 1ª Edição</h1>
        <p>Descubra os itens únicos que foram vendidos na primeira edição desse evento icônico.</p>

        <div className='produtos-cards-portal'>
          <CardProdutos
            titulo={"Copo"}
            descricao={"Copo personalizado do evento."}
            imagem={copo}
            preco={" 7,00"} 
            link={googleFormsLink}
            />

          <CardProdutos
            titulo={"Chaveiro "}
            descricao={"Chaveiro exclusivo do evento."}
            imagem={chaveiro}
            preco={" 6,00"} 
            link={googleFormsLink}
            />

          <CardProdutos
            titulo={"Combo intergaláctico"}
            descricao={"Combinação de produtos do evento."}
            imagem={combo}
            preco={" 11,00"} 
            link={googleFormsLink}
            />

        </div>

      </div>

    </div>
  );
}