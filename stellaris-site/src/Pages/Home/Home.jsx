export default Home;
import CardEventos from '../../components/CardEventos';
import Tardezinha from '../../assets/Tardezinha.svg';
import PortalMeiaNoite from '../../assets/Portal00h.svg';
import BotaoBranco from '../../components/BotaoBranco';
import './Home.css'
import header from '../../assets/header.svg'
import StellarisGrupo from '../../assets/StellarisGrupo.svg'
import iconBuy from '../../assets/iconBuy.svg'
import iconHand from '../../assets/iconHand.svg'
import iconStar from '../../assets/iconStar.svg'
import iconMsg from '../../assets/iconMsg.svg'

function Home() {
    return (
        <div>
            <div className='header'>
                <img src={header}></img>
            </div>
            <div className="sobre-nos">
                <div className='sobre-nos-texto'>
                    <p className='title'>Quem somos <br /> na fila do rolê?</p>
                    <p className='quem-somos'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod laboriosam eligendi reiciendis eaque exercitationem! Quam ducimus cumque consequuntur in dolor officiis unde incidunt corrupti quas cupiditate? Labore, corporis alias.</p>
                </div>
                <div className='sobre-nos-imagem'>
                    <img src={StellarisGrupo}></img>
                </div>
            </div>
            <div className='eventos-stellaris'>
                <p className='title'>Eventos Stellaris</p>
                <p className='sub-title'>Tudo que é Stellaris, em um só lugar! Confira nossos eventos e viva a experiência completa.</p>
                <div className='eventos-cards'>
                    <CardEventos
                        className='card-evento'
                        titulo={"Tardezinha Stellaris - 2025"}
                        descricao={"Em breve mais informações sobre o evento."}
                        imagem={Tardezinha}
                        link={"#"} />

                    <CardEventos
                        className='card-evento'
                        titulo={"Portal da Meia Noite - 2025"}
                        descricao={"Finalizado com sucesso!"}
                        imagem={PortalMeiaNoite}
                        link={"#"} />
                </div>
                <BotaoBranco texto={"Explorar Eventos"} onClick={() => window.location.href = '/eventos'} />
            </div>
            <div className='produtos-stellaris'>
                <section>
                    <p className='title'>Produtos Stellaris</p>
                    <p className='sub-title'>Conheça os produtos oficiais!</p>
                    <div>
                        <BotaoBranco texto={"Ver catálogo completo"} onClick={() => window.location.href = '/produtos'} />
                    </div>
                </section>
            </div>
            <div className='missao-container'>
                <div className='missao'>
                    <h3 className='titulo-missao'>Nossa Missão</h3>
                    <p className='texto-missao'>Fazer da vida uma festa inesquecível. Na Stellaris, nossa missão é transformar ideias em experiências únicas - daquelas que viram boas histórias pra contar. Acreditamos no poder dos encontros, na energia dos eventos feitos com a alma e na magia de criar memórias que brilham mais que os flashes.</p>
                    <h3 className='titulo-valores'>Nossos Valores</h3>
                    <div className='texto-valores'>
                        <li>Experiência memorável - Criamos eventos que emocionam e conectam, garantindo momentos únicos para todos.</li>
                        <li>Transparência e confiança - Priorizamos uma comunicação clara e aberta, essencial para parcerias e relacionamento com o público.</li>
                        <li>Acessbilidade digital - Facilitamos o contato e participação via plataformas simples, como WhatsApp e formulários online.</li>
                        <li>Segurança de dados - Garantimos a proteção das informações dos nossos clientes e parceiros em todas as interações.</li>
                    </div>
                    <h3 className='titulo-oferecimenots'>O que oferecemos:</h3>
                    <div className='oferecimentos'>
                        <div className='parcerias'>
                            <img src={iconHand}></img>
                            <h4>Proposta de Parcerias</h4>
                            <p>Redirecionamento para formulário online para envio de propostas e parcerias.</p>
                        </div>
                        <div className='compra-ingressos'>
                            <img src={iconMsg}></img>
                            <h4>Compra de Ingressos via WhatsApp</h4>
                            <p>Atendimento direto para compra prática e rápida pelo WhatsApp da empresa.</p>
                        </div>
                        <div className='compra-produtos'>
                            <img src={iconBuy}></img>
                            <h4>Compra de Produtos</h4>
                            <p>Formulário online para controle e realização de vendas de produtos temáticos.</p>
                        </div>
                        <div className='avaliacao'>
                            <img src={iconStar}></img>
                            <h4>Avaliação dos Eventos</h4>
                            <p className='gap'>Formulário para que o público avalie eventos passados e ajude a melhorar sempre.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

