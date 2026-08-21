import React, { Component } from 'react';
import '../styles/styles.css';

class UnderConstructionPage extends Component {
    render() {
        return (
            <>
                {/* HEADER */}
                <header className="header">
                    <div className="wrapper header-grid">
                        <div className="header-left">
                            <button className="menu-toggle" aria-label="Öppna meny"><img src="assets/menu.svg" alt="" width="32" height="32" /></button>
                            <a href="index.html" className="logo">Guitarnet</a>
                        </div>
                        <nav className="nav" aria-label="Huvudmeny">
                            <ul className="nav-list">
                                <li><a href="produktgrid.html" className="nav-link">Gitarrer</a></li>
                                <li><a href="produktgrid.html" className="nav-link">Basar</a></li>
                                <li><a href="produktgrid.html" className="nav-link">Akustiskt</a></li>
                                <li><a href="produktgrid.html" className="nav-link">Amps &amp; Effekter</a></li>
                                <li><a href="produktgrid.html" className="nav-link">Tillbehör &amp; Övrigt</a></li>
                            </ul>
                        </nav>
                        <div className="header-icons">
                            <a href="under-konstruktion.html" className="icon-link" aria-label="Sök"><img src="assets/search.svg" alt="" width="32" height="32" /></a>
                            <a href="under-konstruktion.html" className="icon-link" aria-label="Kundvagn"><img src="assets/cart.svg" alt="" width="32" height="32" /></a>
                        </div>
                    </div>
                </header>

                <main>

                    {/* UNDER KONSTRUKTION INNEHÅLL */}
                    <section className="contact-section" aria-labelledby="construction-heading">
                        <div className="wrapper">
                            {/* Breadcrumb */}
                            <nav className="breadcrumb" aria-label="Brödsmulor">
                                <p><a href="index.html">Startsida</a>/<span>Under konstruktion</span></p>
                            </nav>

                            {/* Här är styles omskrivna till JavaScript-objekt! */}
                            <div style={{ textAlign: 'center', padding: '110px 0' }}>
                                <h1 className="produktgrid-title" id="construction-heading" style={{ marginBottom: '42px' }}>Under konstruktion</h1>
                                <a href="index.html" className="btn-primary" style={{ maxWidth: '480px', margin: '0 auto' }}>Tillbaka till startsidan →</a>
                            </div>
                        </div>
                    </section>

                </main>

                {/* FOOTER */}
                <footer className="footer">
                    <div className="wrapper footer-grid">
                        <div className="footer-col">
                            <h2 className="footer-heading">Information</h2>
                            <ul className="footer-links">
                                <li><a href="om-oss.html">Om oss</a></li>
                                <li><a href="kontakt.html">Showroom</a></li>
                                <li><a href="under-konstruktion.html">Återförsäljare</a></li>
                                <li><a href="under-konstruktion.html">Köpvillkor</a></li>
                                <li><a href="under-konstruktion.html">CITES - Handelsregler</a></li>
                                <li><a href="under-konstruktion.html">Om tillverkare →</a></li>
                                <li><a href="under-konstruktion.html">Klimatet &amp; gitarrer</a></li>
                                <li><a href="under-konstruktion.html">Artister &amp; band</a></li>
                                <li><a href="under-konstruktion.html">Önskemål</a></li>
                                <li><a href="under-konstruktion.html">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h2 className="footer-heading">Tips &amp; Tricks</h2>
                            <ul className="footer-links">
                                <li><a href="under-konstruktion.html">Gitarrens delar →</a></li>
                                <li><a href="under-konstruktion.html">Så skapas tonen →</a></li>
                                <li><a href="under-konstruktion.html">Gitarrteori</a></li>
                                <li><a href="under-konstruktion.html">Underhåll &amp; justering →</a></li>
                                <li><a href="under-konstruktion.html">Uppgradering →</a></li>
                                <li><a href="under-konstruktion.html">Problemlösning →</a></li>
                                <li><a href="under-konstruktion.html">Skapa rätt sound →</a></li>
                                <li><a href="under-konstruktion.html">Spelövningar</a></li>
                                <li><a href="under-konstruktion.html">Test av instrument →</a></li>
                                <li><a href="https://www.youtube.com/results?search_query=best+guitarists+of+all+time" target="_blank" rel="noopener noreferrer">Världens främsta gitarrister ↗</a></li>
                                <li><a href="under-konstruktion.html">Sköna band &amp; artister</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h2 className="footer-heading"><a href="kontakt.html" className="footer-contact-link">Kontakta oss →</a></h2>
                        </div>
                    </div>
                </footer>

            </>
        );
    }
}

export default UnderConstructionPage;