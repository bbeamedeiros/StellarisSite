import './styles.css';
import logo from '../../assets/logohorizontal.png';
import { navItems } from './data';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
      const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        // Quando passar de 60px de rolagem, aplica o fundo preto
        setScrolled(window.scrollY > 60);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll); // limpeza
    }, []);
  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className="menu">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;