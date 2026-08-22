import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AboutPage extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <section className="about-section" aria-labelledby="about-heading">
                        <div className="wrapper">
                            <nav className="breadcrumb" aria-label="Brödsmulor">
                                <p><Link to="/">Startsida</Link>/<span>Om oss</span></p>
                            </nav>
                            <div className="about-grid">
                                <div className="about-text">
                                    <h2 className="produktgrid-title" id="about-heading">Vår historia</h2>
                                    <p>Vi som startat Guitarnet är två som har ett passionerat intresse för musik i alla former. Och i centrum står elgitarren. Det allra bästa är att få spela själv. För oss är det viktigt att alla som vill ska ha råd att köpa en elgitarr som låter bra och är skön att spela på. Då hålls intresset vid liv, vi blir fler gitarrister och världen blir ännu bättre. Därför håller vi låga priser.</p>

                                    <p>Det ska vara ett sant nöje att äga och använda våra produkter. Något annat kommer vi inte att leverera. Våra gitarrer beställer vi direkt från fabrik, undantaget är Jay Turser och Oscar Schmidt som vi köper från generalagenten i Sverige. Dessutom har vi små omkostnader. Vårt mål är att du ska få något alldeles extra, mer än du betalar för. Vi har också bestämt oss för att ett köp inte ska göra något avtryck i klimatet. Därför klimatkompenserar vi för utvinning av råvaror till transporten hem till dig. Hör gärna av dig om du har synpunkter på vår hemsida eller våra gitarrer.</p>

                                    <p>Rock On!</p>

                                    <h2 className="section-title" id="about-values">Vad vi står för</h2>
                                    <ul className="about-list">
                                        <li>Handplockade märken med kvalitet i fokus</li>
                                        <li>Konkurrenskraftiga priser utan att kompromissa</li>
                                        <li>Personlig service och rådgivning</li>
                                        <li>Snabb leverans inom Sverige</li>
                                        <li>Garanti och support på alla produkter</li>
                                    </ul>

                                    <h2 className="section-title" id="about-showroom">Vårt showroom</h2>
                                    <p>Besök gärna vårt showroom i Göteborg där du kan provspela alla våra gitarrer. Vi bokar gärna in en tid så att du får den uppmärksamhet du förtjänar.
                                        <br />
                                        <Link to="/kontakt">Kontakta oss för att boka tid →</Link>
                                    </p>
                                </div>
                                <aside className="about-sidebar">
                                    <div className="about-image-box">
                                        <img src="/assets/gitarr.png" alt="Gitarrer i vårt showroom" />
                                    </div>
                                    <div className="about-fact-box">
                                        <h3>Guitarnet i siffror</h3>
                                        <dl className="fact-list">
                                            <dt>Grundat</dt>
                                            <dd>2002</dd>
                                            <dt>Antal märken</dt>
                                            <dd>6+</dd>
                                            <dt>Modeller i lager</dt>
                                            <dd>100+</dd>
                                            <dt>Nöjda kunder</dt>
                                            <dd>100 000+</dd>
                                        </dl>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>

                    <section className="video-section" aria-labelledby="video-heading">
                        <div className="wrapper">
                            <h2 className="section-title" id="video-heading">Se en rundtur i vårt showroom</h2>
                            <p className="section-intro">Kom in och känn atmosfären i vår butik.</p>
                            <div className="video-container">
                                <video controls poster="/assets/gitarr.png" style={{ width: '100%' }}>
                                    <source src="/assets/showroom.mp4" type="video/mp4" />
                                    <p>Din webbläsare stöder inte videouppspelning. <a href="/assets/showroom.mp4">Ladda ner videon istället</a>.</p>
                                </video>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        );
    }
}

export default AboutPage;