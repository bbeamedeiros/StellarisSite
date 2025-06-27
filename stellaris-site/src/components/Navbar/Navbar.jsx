import './Navbar.css';
import logo from './logohorizontal.png';
import { navItems } from './data';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="menu">
        <li><img src={logo} alt="Logo" className="logo" /></li> {}
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