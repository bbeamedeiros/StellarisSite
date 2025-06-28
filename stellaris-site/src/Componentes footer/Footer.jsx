import React from "react";
import './Footer.css'

export default function Footer() {
    return (
        <footer className="rodape">
            <div className="rodape-conteudo">
                <p>Todos os direitos reservados</p>

                 {}

                <div className="rodape-contatos">
                    <a href="mailto:contato@stellariseventos.com" className="rodape-contato-item">
                        stellariscontato@gmail.com
                    </a>
                    <a href="tel:+5588999999999" className="rodape-contato-item">
                        (88) 9 9999-9999
                    </a>
                </div>

                {}
                <div className="rodape-redes-sociais">
                    <a href="https://www.tiktok.com/@sua_conta_tiktok">
                        <img src={IconeTikTok} alt="TikTok" className="social-icone" />
                    </a>
                    <a href="https://www.instagram.com/sua_conta_instagram">
                        <img src={IconeInstagram} alt="Instagram" className="social-icone" />
                    </a>
                    <a href="https://twitter.com/sua_conta_x">
                        <img src={IconeX} alt="X (Twitter)" className="social-icone" />
                    </a>
                </div>
            </div>
        </footer>
    );
}