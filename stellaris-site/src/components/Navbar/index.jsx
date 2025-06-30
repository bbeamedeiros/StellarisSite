import './styles.css';
import logo from "../../assets/logohorizontal.svg";
import { navItems } from './data';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
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