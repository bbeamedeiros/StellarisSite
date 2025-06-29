export default Home;
import BotaoBranco from '../../components/BotaoBranco';
import './Home.css'
import header from '../../assets/header.svg'

function Home() {
    return(
        <div>
            <div className='header'>
                <img src={header}></img>
            </div>
        <div className="sobre-nos">
            <section>
                <p className='title'>Quem somos <br/> na fila do rolê?</p>
                <p className='quem-somos'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod laboriosam eligendi reiciendis eaque exercitationem! Quam ducimus cumque consequuntur in dolor officiis unde incidunt corrupti quas cupiditate? Labore, corporis alias.</p>
            </section>
            </div>
        <div className='eventos-stellaris'>
            <section>
                <p className='title'>Eventos Stellaris</p>
                <p className='sub-title'>Tudo que é Stellaris, em um só lugar! Confira nossos eventos e viva a experiência completa.</p>
                <BotaoBranco texto={"Explorar Eventos"} onClick={null}/>
            </section>
        </div>
         <div className='produtos-stellaris'>
            <section>
               <p className='title'>Produtos Stellaris</p>
                <p className='sub-title'>Conheça os produtos oficiais!</p>
                <BotaoBranco texto={"Ver catálogo completo"} onClick={null}/>
            </section>
        </div>
        <div className='missao'>
            <h3>Nossa Missão</h3>
            <p>Fazer da vida uma festa inesquecível. Na Stellaris, nossa missão é transformar ideias em experiências únicas - daquelas que viram boas histórias pra contar. Acreditamos no poder dos encontros, na energia dos eventos feitos com a alma e na magia de criar memórias que brilham mais que os flashes.</p>
            <h3>Nossos Valores</h3>
            <li>Experiência memorável</li>
            <li>Transparência e confiança</li>
            <li>Acessbilidade digital</li>
            <li>Segurança de dados</li>
            <h3>O que oferecemos</h3>
            <div className='oferecimentos'>
                dddd
            </div>
        </div>
</div>
    )
}

