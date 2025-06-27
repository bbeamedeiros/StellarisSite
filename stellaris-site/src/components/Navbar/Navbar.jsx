import './Navbar.css';
import { ReactComponent as Logo } from '/src/assets/logohorizontal.svg';
import { navItems } from './data';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="menu">
        <li><Logo className="logo" /></li>
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
