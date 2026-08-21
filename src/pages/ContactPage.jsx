import React, { Component } from 'react';
import '../styles/styles.css';

class ContactPage extends Component {
    render() {
        return (
            <>
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
                    {/* KONTAKT INNEHÅLL */}
                    <section className="contact-section" aria-labelledby="contact-heading">
                        <div className="wrapper">
                            {/* Breadcrumb */}
                            <nav className="breadcrumb" aria-label="Brödsmulor">
                                <p><a href="index.html">Startsida</a>/<span>Kontakt</span></p>
                            </nav>
                            <div className="contact-grid">

                                {/* KONTAKTFORM */}
                                <div className="contact-form-wrapper">
                                    <h2 className="produktgrid-title" id="contact-heading">Skicka ett meddelande</h2>
                                    <form className="contact-form" action="mailto:info@guitarnet.se" method="post" encType="text/plain">
                                        <div className="form-group">
                                            <label htmlFor="name">Namn <span className="required">*</span></label>
                                            <input type="text" id="name" name="name" required placeholder="Ditt namn" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">E-post <span className="required">*</span></label>
                                            <input type="email" id="email" name="email" required placeholder="din@email.se" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Telefon</label>
                                            <input type="tel" id="phone" name="phone" placeholder="070-000 00 00" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Ämne <span className="required">*</span></label>
                                            <select id="subject" name="subject" required defaultValue="">
                                                <option value="" disabled>Välj ämne…</option>
                                                <option value="order">Beställning</option>
                                                <option value="product">Fråga om produkt</option>
                                                <option value="showroom">Boka showroom</option>
                                                <option value="support">Support / Garanti</option>
                                                <option value="other">Övrigt</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Meddelande <span className="required">*</span></label>
                                            <textarea id="message" name="message" rows="6" required
                                                placeholder="Skriv ditt meddelande här…"></textarea>
                                        </div>
                                        <div className="form-group form-checkbox">
                                            <input type="checkbox" id="newsletter" name="newsletter" />
                                            <label htmlFor="newsletter">Ja, jag vill ta emot nyhetsbrev med erbjudanden</label>
                                        </div>
                                        <button type="submit" className="btn-primary btn-submit">Skicka meddelande →</button>
                                    </form>
                                </div>

                                {/* KONTAKT INFO */}
                                <aside className="contact-info">
                                    <div className="info-card">
                                        <h3>Besöksadress</h3>
                                        <p>Guitarnet AB<br />Gitarrvägen 12<br />411 00 Göteborg</p>
                                    </div>
                                    <div className="info-card">
                                        <h3>Öppettider showroom</h3>
                                        <p>Måndag – Fredag: 10:00 – 18:00<br />Lördag: 11:00 – 15:00<br />Söndag: Stängt</p>
                                    </div>
                                    <div className="info-card">
                                        <h3>Kontaktuppgifter</h3>
                                        <p>E-post: <a href="mailto:info@guitarnet.se">info@guitarnet.se</a><br />Telefon: <a
                                            href="tel:+46311234567">031-123 45 67</a></p>
                                    </div>
                                    <div className="info-card">
                                        <h3>Följ oss</h3>
                                        <ul className="social-list">
                                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
                                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook ↗</a></li>
                                            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube ↗</a></li>
                                        </ul>
                                    </div>
                                </aside>

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
                                <li><a href="https://www.youtube.com/results?search_query=best+guitarists+of+all+time" target="_blank"
                                    rel="noopener noreferrer">Världens främsta gitarrister ↗</a></li>
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

export default ContactPage;