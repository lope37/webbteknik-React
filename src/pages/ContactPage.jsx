import React, { Component } from 'react';
import MathCaptcha from '../components/MathCaptcha';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ContactPage extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <section className="contact-section" aria-labelledby="contact-heading">
                        <div className="wrapper">
                            <nav className="breadcrumb" aria-label="Brödsmulor">
                                <p><Link to="/">Startsida</Link>/<span>Kontakt</span></p>
                            </nav>
                            <div className="contact-grid">
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
                                        <MathCaptcha buttonText="Skicka meddelande →" onSuccess={() => alert('Meddelandet har skickats.')} />
                                    </form>
                                </div>

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

                <Footer />
            </>
        );
    }
}

export default ContactPage;