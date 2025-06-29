import './Navbar.css';
import logo from './logohorizontal.png';
import { navItems } from './data';

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="menu">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;