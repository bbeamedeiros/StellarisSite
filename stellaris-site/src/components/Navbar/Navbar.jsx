import './Navbar.css';
import { navItems } from './data';

function Navbar() {
  return (
    <nav className="nav">
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
