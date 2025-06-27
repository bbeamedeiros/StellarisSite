import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header-conteudo">

                <nav className="menu">
                    <Link to="/" className="nav-item">Início</Link>
                    <Link to="/produtos" className="nav-item">Produtos</Link>
                    <Link to="/parcerias" className="nav-item">Parceiros</Link>
                    <Link to="/eventos" className="nav-item">Eventos</Link>
                </nav>
            </div>
        </header>
    )
}