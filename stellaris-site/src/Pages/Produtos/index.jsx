import CardProdutos from '../../components/CardProdutos';
import ImagemProduto from '../../components/Imagens/ImagemProduto';
import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../Firebase/firebase';
import './styles.css';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosRef = ref(database, 'produtos');
    onValue(produtosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.entries(data).map(([id, info]) => ({
          id,
          ...info
        }));
        setProdutos(lista);
      }
    });
  }, []);

const produtosTardezinha = produtos.filter(e => e.evento === 'tardezinha');
const produtosPortal = produtos.filter(e => e.evento === 'portal');

//let googleFormsLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfw3d_rb5l_Bpv-2YfN3lSLuGT4UbgKbU1A7fmJpBstsF9uEQ/viewform';

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
          {produtosTardezinha.map(produto => (
            <CardProdutos
              key={produto.id}
              titulo={produto.titulo}
              descricao={produto.descricao}
              preco={produto.preco}
              link={produto.link}
              imagem={<ImagemProduto nome={produto.imagem} />}
            />
          ))}
        </div>
      </div>

      <div className='produtos-colecao'>
        <h1>Portal da Meia Noite 1ª Edição</h1>
        <p>Descubra os itens únicos que foram vendidos na primeira edição desse evento icônico.</p>

        <div className='produtos-cards-portal'>
          {produtosPortal.map(produto => (
            <CardProdutos
              key={produto.id}
              titulo={produto.titulo}
              descricao={produto.descricao}
              preco={produto.preco}
              link={produto.link}
              imagem={<ImagemProduto nome={produto.imagem} />}
            />
          ))}

        </div>

      </div>

    </div>
  );
}