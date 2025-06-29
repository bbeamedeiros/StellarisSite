import './styles.css'
import IconeTikTok from '../../assets/icontiktok.png';
import IconeInstagram from '../../assets/iconinstagram.png';
import IconeX from '../../assets/iconx.png';
import stellaris_Página3 from '../../assets/stellaris_Página 3.png';
import mensagem from '../../assets/Vectormensage.svg';
import wpp from '../../assets/Vectorwpp.svg';

export default function Footer() {
    return (
        <footer className="rodape">
            <div className="rodape-conteudo">

                <div className="rodape-contatos">
                    <h3>Entre em contato</h3>
                    <a href="mailto:contato@stellariseventos.com" className="rodape-contato-item">
                        <img src={mensagem}/>stellariscontato@gmail.com
                    </a>
                    <a href="https://w.app/stellarisqxd" className="rodape-contato-item">
                       <img src={wpp}/> +55 (85) 9147-8783
                    </a>
                </div>

                <div className="rodape-image">
                    <img src={stellaris_Página3} alt="Logo Stellaris Eventos" className="rodape-logo" />
                </div>

                <div className="rodape-redes-sociais">
                    <a href="https://www.tiktok.com/@stellarisqxd">
                        <img src={IconeTikTok} alt="TikTok" className="social-icone" />
                    </a>
                    <a href="https://www.instagram.com/stellarisqxd/">
                        <img src={IconeInstagram} alt="Instagram" className="social-icone" />
                    </a>
                    <a href="https://x.com/stellarisqxd">
                        <img src={IconeX} alt="X (Twitter)" className="social-icone" />
                    </a>
                </div>
            </div>
        </footer>
    );
}