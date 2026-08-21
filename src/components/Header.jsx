import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="wrapper header-grid">
        <div className="header-left">
          <button className="menu-toggle" aria-label="Öppna meny">
            <img src="/assets/menu.svg" alt="" width="32" height="32" />
          </button>
          <a href="/" className="logo">Guitarnet</a>
        </div>

        <nav className="nav" aria-label="Huvudmeny">
          <ul className="nav-list">
            <li><a href="/produkter" className="nav-link">Gitarrer</a></li>
            <li><a href="/produkter" className="nav-link">Basar</a></li>
            <li><a href="/produkter" className="nav-link">Akustiskt</a></li>
            <li><a href="/produkter" className="nav-link">Amps &amp; Effekter</a></li>
            <li><a href="/produkter" className="nav-link">Tillbehör &amp; Övrigt</a></li>
          </ul>
        </nav>

        <div className="header-icons">
          <a href="/under-konstruktion" className="icon-link" aria-label="Sök">
            <img src="/assets/search.svg" alt="" width="32" height="32" />
          </a>
          <a href="/under-konstruktion" className="icon-link" aria-label="Kundvagn">
            <img src="/assets/cart.svg" alt="" width="32" height="32" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
