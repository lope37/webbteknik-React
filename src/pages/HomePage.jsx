import React, { Component } from 'react';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class HomePage extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <section className="hero" aria-label="Välkommen" />
                    <div className="hero-bg">
                        <img src="assets/gitarr.png" alt="" className="hero-bg-img" />
                    </div>
                    <img src="assets/hero.svg" alt="" className="hero-overlay" aria-hidden="true" />
                    <div className="wrapper hero-content-wrapper">
                        <div className="hero-content">
                            <div className="hero-icons" aria-hidden="true">
                                <img src="assets/music-solid.svg" alt="" className="music-icon music-icon-1" />
                                <img src="assets/music-solid2.svg" alt="" className="music-icon music-icon-2" />
                            </div>
                            <h1 className="hero-title">Bäst ton för pengarna.</h1>
                            <p className="hero-subtitle">Kvalitetsgitarrer till bra priser. Handplockade märken från Sverige och världen.</p>
                            <div style={{ display: 'flex', gap: '12px', maxWidth: '440px', width: '100%', marginBottom: '20px' }}>
                                <button id="hello-btn" className="btn-outline" style={{ width: '50%', maxWidth: 'none', margin: 0 }}>Visa meddelande</button>
                                <button id="animate-btn" className="btn-outline" style={{ width: '50%', maxWidth: 'none', margin: 0 }}>Animera text</button>
                            </div>
                            <div id="random-container" style={{ marginTop: '20px', color: '#ffffff' }}></div>
                            <a href="produktgrid.html" className="btn-primary">Utforska nytt →</a>
                        </div>
                    </div>
                    <section />

                    <section className="featured-products" aria-labelledby="featured-heading">
                        <div className="wrapper">
                            <h2 className="section-label" id="featured-heading">Utvalda produkter</h2>
                            <div className="featured-layout">
                                <div className="featured-categories">
                                    <p className="featured-cat">Stratocaster</p>
                                    <p className="featured-cat">Telecaster</p>
                                    <p className="featured-cat">Les Paul</p>
                                    <p className="featured-cat active">Mustang</p>
                                    <div className="featured-cat-line" aria-hidden="true">
                                        <img src="assets/line2.svg" alt="" />
                                    </div>
                                    <p className="featured-cat">Other</p>
                                </div>
                                <div className="featured-product">
                                    <div className="featured-product-image">
                                        <img src="assets/image4.png" alt="Green Guitars Mustang 11 elgitarr" />
                                    </div>
                                    <div className="featured-product-info">
                                        <p className="product-name-thin">Green Guitars Mustang 11</p>
                                        <p className="product-price-large">18 995 SEK</p>
                                        <p className="product-desc">En modern mustang-stil gitarr med fantastisk ton och spelbarhet. Tillverkad med noggrant utvalda material.</p>
                                        <a href="produkt.html" className="btn-outline">Läs mer →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="new-products" aria-labelledby="new-heading" >
                        <div className="wrapper">
                            <div className="new-products-header">
                                <h2 className="section-label" id="new-heading">Nya produkter</h2>
                                <div className="arrows" role="group" aria-label="Bläddra produkter">
                                    <button className="arrow-btn arrow-left" aria-label="Föregående"><img src="assets/arrow-left.svg" alt="" width="42" height="42" /></button>
                                    <button className="arrow-btn arrow-right" aria-label="Nästa"><img src="assets/arrow-right.svg" alt="" width="42" height="42" /></button>
                                </div>
                            </div>
                            <div className="products-grid">
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-name">Green ST Classic</h3>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-name">Green ST Classic</h3>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-name">Green ST Classic</h3>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-name">Green ST Classic</h3>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
                            </div>
                            <div className="see-all-link">
                                <a href="produktgrid.html">Se alla nyheter <img src="assets/vector-arrow.svg" alt="" className="arrow-inline" /></a>
                            </div>
                        </div>
                    </section>

                    <section className="choose-form" aria-labelledby="form-heading">
                        <div className="wrapper">
                            <p className="section-label">Former</p>
                            <div className="form-content">
                                <div className="form-header">
                                    <h2 className="form-title" id="form-heading">Välj din form</h2>
                                    <div className="instrument-tabs">
                                        <a href="produktgrid.html" className="instrument-tab active" aria-current="true">Gitarr
                                            <span className="tab-underline" aria-hidden="true"><img src="assets/line1.svg" alt="" /></span>
                                        </a>
                                        <a href="produktgrid.html" className="instrument-tab">Bas</a>
                                        <a href="produktgrid.html" className="instrument-tab">Akustisk</a>
                                    </div>
                                    <div className="arrows">
                                        <button className="arrow-btn arrow-left" aria-label="Föregående form"><img src="assets/arrow-left.svg" alt="" width="42" height="42" /></button>
                                        <button className="arrow-btn arrow-right" aria-label="Nästa form"><img src="assets/arrow-right.svg" alt="" width="42" height="42" /></button>
                                    </div>
                                </div>
                                <div className="shapes-area">
                                    <div className="shapes-circles" aria-hidden="true">
                                        <img src="assets/cirklar.svg" alt="" className="circles-bg" />
                                    </div>
                                    <div className="shapes-labels">
                                        <span>Stratocaster</span>
                                        <span>Telecaster</span>
                                        <span>Les Paul</span>
                                        <span>Modern</span>
                                    </div>
                                </div>
                                <div className="page-dots" aria-hidden="true">
                                    <img src="assets/sidoval.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="brands-section" id="elgitarrer" aria-labelledby="el-heading">
                        <div className="wrapper">
                            <p className="section-label">Våra varumärken</p>
                            <h2 className="brand-category-title" id="el-heading">Elgitarrer</h2>
                            <div className="brand-cards-grid">
                                <article className="brand-card">
                                    <div className="brand-logo-box">
                                        <img src="assets/group-logo.svg" alt="Green Guitars logotyp" />
                                    </div>
                                    <div className="brand-info">
                                        <h3 className="brand-name"><strong>Green Guitars</strong> <span className="brand-name-light">– A new brand from Sweden</span></h3>
                                        <p className="brand-desc">Green Guitars tillverkas i små serier med stort fokus på utseende, spelbarhet och ljud. Helt enkelt riktigt bra gitarrer. Dessutom jobbar vi för att hålla låga priser. Green Guitars matchar betydligt dyrare gitarrer. För närvarande tillverkas alla våra modeller i Asien av två olika gitarrbyggare.</p>
                                        <a href="produktgrid.html" className="read-more">Läs mer <img src="assets/vector-arrow.svg" alt="" className="arrow-inline" /></a>
                                    </div>
                                </article>

                                <article className="brand-card">
                                    <div className="brand-logo-box">
                                        <img src="assets/image6.png" alt="Sonnemo Guitars logotyp" className="brand-logo-img" />
                                    </div>
                                    <div className="brand-info">
                                        <h3 className="brand-name"><strong>Sonnemo Guitars</strong> <span className="brand-name-light">– Handmade in Sweden</span></h3>
                                        <p className="brand-desc">Japanska Fujijenfabriken startade 1960. På 80-talet var FUJIGEN världens största gitarrtillverkare. Man tillverkar åt många av de stora märkena och är erkänt väldigt skickliga gitarrbyggare. Fujigen har fortsatt att utveckla och förfina sin gitarrtillverkning och tagit fram ett eget gitarrmärke med en kvalité som slår det mesta.</p>
                                        <a href="produktgrid.html" className="read-more">Läs mer <img src="assets/vector-arrow.svg" alt="" className="arrow-inline" /></a>
                                    </div>
                                </article>

                                <article className="brand-card">
                                    <div className="brand-logo-box">
                                        <img src="assets/image5.png" alt="FGN logotyp" className="brand-logo-img" />
                                    </div>
                                    <div className="brand-info">
                                        <h3 className="brand-name"><strong>FGN</strong> <span className="brand-name-light">– Made in Japan</span></h3>
                                        <p className="brand-desc">Japanska Fujijenfabriken startade 1960. På 80-talet var FUJIGEN världens största gitarrtillverkare. Man tillverkar åt många av de stora märkena och är erkänt väldigt skickliga gitarrbyggare. Fujigen har fortsatt att utveckla och förfina sin gitarrtillverkning och tagit fram ett eget gitarrmärke med en kvalité som slår det mesta. Förmodligen världens främsta tillverkare.</p>
                                        <a href="produktgrid.html" className="read-more">Läs mer <img src="assets/vector-arrow.svg" alt="" className="arrow-inline" /></a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>


                    <section className="price-section" aria-labelledby="price-heading">
                        <div className="wrapper">
                            <h2 className="section-title" id="price-heading">Prisjämförelse – Elgitarrer</h2>
                            <p className="section-intro">Nedan ser du en översikt av våra mest populära elgitarrer och deras prisklasser.</p>
                            <div className="table-responsive">
                                <table className="price-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Modell</th>
                                            <th scope="col">Märke</th>
                                            <th scope="col">Typ</th>
                                            <th scope="col">Mikrofoner</th>
                                            <th scope="col">Pris (SEK)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ST Classic</td>
                                            <td>Green Guitars</td>
                                            <td>Stratocaster</td>
                                            <td>SSS</td>
                                            <td>4 590</td>
                                        </tr>
                                        <tr>
                                            <td>Mustang 11</td>
                                            <td>Green Guitars</td>
                                            <td>Mustang</td>
                                            <td>HH</td>
                                            <td>18 995</td>
                                        </tr>
                                        <tr>
                                            <td>Neo Classic LS20</td>
                                            <td>FGN</td>
                                            <td>Les Paul</td>
                                            <td>HH</td>
                                            <td>12 500</td>
                                        </tr>
                                        <tr>
                                            <td>Odyssey JOS2</td>
                                            <td>FGN</td>
                                            <td>Stratocaster</td>
                                            <td>SSS</td>
                                            <td>9 995</td>
                                        </tr>
                                        <tr>
                                            <td>Rustic D</td>
                                            <td>Dowina</td>
                                            <td>Akustisk</td>
                                            <td>–</td>
                                            <td>7 990</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>


                    <section className="brands-section" id="akustiska" aria-labelledby="ak-heading">
                        <div className="wrapper">
                            <h2 className="brand-category-title" id="ak-heading">Akustiska gitarrer</h2>
                            <div className="brand-cards-grid">

                                <article className="brand-card">
                                    <div className="brand-logo-box">
                                        <img src="assets/image7.png" alt="Dowina logotyp" className="brand-logo-img" />
                                    </div>
                                    <div className="brand-info">
                                        <h3 className="brand-name"><strong>Dowina</strong> <span className="brand-name-light">– Made in Europe</span></h3>
                                        <p className="brand-desc">Vid det historiska slottet Dowina – beläget mellan Bratislava (Slovakien) och Wien (Österrike) – startade man Dowina år 1979. Från början tillverkades violiner. Inspirerade av framgångarna med violintillverkningen föddes idén att tillverka akustiska gitarrer. Där varje gitarr är perfekt och unik, vilket resulterar i hög spelkomfort och mycket fin ton.</p>
                                        <a href="produktgrid.html" className="read-more">Läs mer <img src="assets/vector-arrow.svg" alt="" className="arrow-inline" /></a>
                                    </div>
                                </article>

                            </div>
                        </div>
                    </section>

                    <section className="brands-section" id="tillbehor" aria-labelledby="tillbehor-heading">
                        <div className="wrapper">
                            <h2 className="brand-category-title" id="tillbehor-heading">Tillbehör</h2>
                            <div className="brand-cards-grid">

                                <article className="brand-card">
                                    <div className="brand-logo-box brand-logo-box-centered">
                                        <img src="assets/image8.png" alt="Lundgren Pickups logotyp" className="brand-logo-img" />
                                    </div>
                                    <div className="brand-info">
                                        <h3 className="brand-name"><strong>Lundgren Pickups</strong> <span className="brand-name-light">– Made in Sweden</span></h3>
                                        <p className="brand-desc">Johan Lundgren har vunnit stor respekt världen över för sin förmåga att tillverka mickar som plockar fram det allra bästa ur en gitarr. Hela processen är ett hantverk och slutresultatet blir något över det vanliga.</p>
                                        <a href="produktgrid.html" className="read-more">Läs mer <img src="assets/vector-arrow.svg" alt="" className="arrow-inline" /></a>
                                    </div>
                                </article>

                                <article className="brand-card">
                                    <div className="brand-logo-box">
                                        <img src="assets/image5.png" alt="NU-X logotyp" className="brand-logo-img" />
                                    </div>
                                    <div className="brand-info">
                                        <h3 className="brand-name"><strong>NU-X</strong></h3>
                                        <p className="brand-desc">NU-X förstärkare och effektpedaler är ett relativt nytt varumärke i Sverige. NU-X imponerar när det gäller pris, design, kvalité och ljud.</p>
                                        <a href="produktgrid.html" className="read-more">Läs mer <img src="assets/vector-arrow.svg" alt="" className="arrow-inline" /></a>
                                    </div>
                                </article>

                            </div>
                        </div>
                    </section>

                </main>

                <Footer />
            </>
        );
    }
}

export default HomePage;