import './styles.css';
import { navItems } from './data';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  console.log(location)

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
      <img src="https://res.cloudinary.com/dpc8oscuf/image/upload/v1753117397/LOGO_hnq8uk.svg" alt="Logo" className="logo" />
      <ul className="menu">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link to={item.href}
              className={location.pathname === item.href ? 'active' : ''}
            >{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;