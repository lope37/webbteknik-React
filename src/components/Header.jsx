import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="wrapper header-grid">
        <div className="header-left">
          <button className="menu-toggle" aria-label="Öppna meny">
            <img src="/assets/menu.svg" alt="" width="32" height="32" />
          </button>
          <Link to="/" className="logo">Guitarnet</Link>
        </div>

        <nav className="nav" aria-label="Huvudmeny">
          <ul className="nav-list">
            <li><Link to="/produkter" className="nav-link">Gitarrer</Link></li>
            <li><Link to="/produkter" className="nav-link">Basar</Link></li>
            <li><Link to="/produkter" className="nav-link">Akustiskt</Link></li>
            <li><Link to="/produkter" className="nav-link">Amps &amp; Effekter</Link></li>
            <li><Link to="/produkter" className="nav-link">Tillbehör &amp; Övrigt</Link></li>
          </ul>
        </nav>

        <div className="header-icons">
          <Link to="/under-konstruktion" className="icon-link" aria-label="Sök">
            <img src="/assets/search.svg" alt="" width="32" height="32" />
          </Link>
          <Link to="/under-konstruktion" className="icon-link" aria-label="Kundvagn">
            <img src="/assets/cart.svg" alt="" width="32" height="32" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;