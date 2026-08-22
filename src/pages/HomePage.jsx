import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import BrandCard from '../components/BrandCard';

class HomePage extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    {/* HERO */}
                    <section className="hero" aria-label="Välkommen">
                        <div className="hero-bg">
                            <img src="/assets/gitarr.png" alt="" className="hero-bg-img" />
                        </div>
                        <img src="/assets/hero.svg" alt="" className="hero-overlay" aria-hidden="true" />

                        <div className="wrapper hero-content-wrapper">
                            <div className="hero-content">
                                <div className="hero-icons" aria-hidden="true">
                                    <img src="/assets/music-solid.svg" alt="" className="music-icon music-icon-1" />
                                    <img src="/assets/music-solid2.svg" alt="" className="music-icon music-icon-2" />
                                </div>
                                <h1 className="hero-title">Bäst ton för pengarna.</h1>
                                <p className="hero-subtitle">
                                    Kvalitetsgitarrer till bra priser. Handplockade märken från Sverige och världen.
                                </p>
                                <Link to="/produkter" className="btn-primary">
                                    Utforska nytt →
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* FEATURED PRODUCTS */}
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
                                        <img src="/assets/line2.svg" alt="" />
                                    </div>
                                    <p className="featured-cat">Other</p>
                                </div>
                                <div className="featured-product">
                                    <div className="featured-product-image">
                                        <img src="/assets/image4.png" alt="Green Guitars Mustang 11 elgitarr" />
                                    </div>
                                    <div className="featured-product-info">
                                        <p className="product-name-thin">Green Guitars Mustang 11</p>
                                        <p className="product-price-large">18 995 SEK</p>
                                        <p className="product-desc">En modern mustang-stil gitarr med fantastisk ton och spelbarhet. Tillverkad med noggrant utvalda material.</p>
                                        <Link to="/produkt" className="btn-outline">Läs mer →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* NYA PRODUKTER */}
                    <section className="new-products" aria-labelledby="new-heading" >
                        <div className="wrapper">
                            <div className="new-products-header">
                                <h2 className="section-label" id="new-heading">Nya produkter</h2>
                                <div className="arrows" role="group" aria-label="Bläddra produkter">
                                    <button className="arrow-btn arrow-left" aria-label="Föregående"><img src="/assets/arrow-left.svg" alt="" width="42" height="42" /></button>
                                    <button className="arrow-btn arrow-right" aria-label="Nästa"><img src="/assets/arrow-right.svg" alt="" width="42" height="42" /></button>
                                </div>
                            </div>
                            <div className="products-grid">
                                <ProductCard 
                                    name="Green ST Classic" 
                                    price="4 590 SEK" 
                                    imageFront="/assets/image10.png" 
                                    imageBack="/assets/image11.png" 
                                    colors="5" 
                                />
                                <ProductCard 
                                    name="Green ST Classic" 
                                    price="4 590 SEK" 
                                    imageFront="/assets/image10.png" 
                                    imageBack="/assets/image11.png" 
                                    colors="5" 
                                />
                                <ProductCard 
                                    name="Green ST Classic" 
                                    price="4 590 SEK" 
                                    imageFront="/assets/image10.png" 
                                    imageBack="/assets/image11.png" 
                                    colors="5" 
                                />
                                <ProductCard 
                                    name="Green ST Classic" 
                                    price="4 590 SEK" 
                                    imageFront="/assets/image10.png" 
                                    imageBack="/assets/image11.png" 
                                    colors="5" 
                                />
                            </div>
                            <div className="see-all-link">
                                <Link to="/produkter">Se alla nyheter <img src="/assets/vector-arrow.svg" alt="" className="arrow-inline" /></Link>
                            </div>
                        </div>
                    </section>

                    {/* VÄLJ DIN FORM */}
                    <section className="choose-form" aria-labelledby="form-heading">
                        <div className="wrapper">
                            <p className="section-label">Former</p>
                            <div className="form-content">
                                <div className="form-header">
                                    <h2 className="form-title" id="form-heading">Välj din form</h2>
                                    <div className="instrument-tabs">
                                        <Link to="/produkter" className="instrument-tab active" aria-current="true">Gitarr
                                            <span className="tab-underline" aria-hidden="true"><img src="assets/line1.svg" alt="" /></span>
                                        </Link>
                                        <Link to="/produkter" className="instrument-tab">Bas</Link>
                                        <Link to="/produkter" className="instrument-tab">Akustisk</Link>
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

                    {/* VARUMÄRKEN */}
                    <section className="brands-section" id="elgitarrer" aria-labelledby="el-heading">
                        <div className="wrapper">
                            <p className="section-label">Våra varumärken</p>
                            <h2 className="brand-category-title" id="el-heading">Elgitarrer</h2>
                            <div className="brand-cards-grid">
                                <BrandCard 
                                    logoSrc="/assets/group-logo.svg"
                                    logoAlt="Green Guitars logotyp"
                                    brandNameStrong="Green Guitars"
                                    brandNameLight="A new brand from Sweden"
                                    description="Green Guitars tillverkas i små serier med stort fokus på utseende, spelbarhet och ljud. Helt enkelt riktigt bra gitarrer. Dessutom jobbar vi för att hålla låga priser. Green Guitars matchar betydligt dyrare gitarrer. För närvarande tillverkas alla våra modeller i Asien av två olika gitarrbyggare."
                                />
                                <BrandCard 
                                    logoSrc="/assets/image6.png"
                                    logoAlt="Sonnemo Guitars logotyp"
                                    brandNameStrong="Sonnemo Guitars"
                                    brandNameLight="Handmade in Sweden"
                                    description="Japanska Fujijenfabriken startade 1960. På 80-talet var FUJIGEN världens största gitarrtillverkare. Man tillverkar åt många av de stora märkena och är erkänt väldigt skickliga gitarrbyggare."
                                />
                                <BrandCard 
                                    logoSrc="/assets/image5.png"
                                    logoAlt="FGN logotyp"
                                    brandNameStrong="FGN"
                                    brandNameLight="Made in Japan"
                                    description="Japanska Fujijenfabriken startade 1960. På 80-talet var FUJIGEN världens största gitarrtillverkare. Förmodligen världens främsta tillverkare."
                                />
                            </div>
                        </div>
                    </section>

                    {/* PRISJÄMFÖRELSE */}
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

                    {/* AKUSTISKA - VARUMÄRKEN */}
                    <section className="brands-section" id="akustiska" aria-labelledby="ak-heading">
                        <div className="wrapper">
                            <h2 className="brand-category-title" id="ak-heading">Akustiska gitarrer</h2>
                            <div className="brand-cards-grid">
                                <BrandCard 
                                    logoSrc="/assets/image7.png"
                                    logoAlt="Dowina logotyp"
                                    brandNameStrong="Dowina"
                                    brandNameLight="Made in Europe"
                                    description="Vid det historiska slottet Dowina startade man Dowina år 1979. Där varje gitarr är perfekt och unik, vilket resulterar i hög spelkomfort och mycket fin ton."
                                />
                            </div>
                        </div>
                    </section>

                    {/* TILLBEHÖR - VARUMÄRKEN */}
                    <section className="brands-section" id="tillbehor" aria-labelledby="tillbehor-heading">
                        <div className="wrapper">
                            <h2 className="brand-category-title" id="tillbehor-heading">Tillbehör</h2>
                            <div className="brand-cards-grid">
                                <BrandCard 
                                    logoSrc="/assets/image8.png"
                                    logoAlt="Lundgren Pickups logotyp"
                                    brandNameStrong="Lundgren Pickups"
                                    brandNameLight="Made in Sweden"
                                    description="Johan Lundgren har vunnit stor respekt världen över för sin förmåga att tillverka mickar som plockar fram det allra bästa ur en gitarr. Hela processen är ett hantverk och slutresultatet blir något över det vanliga."
                                />
                                <BrandCard 
                                    logoSrc="/assets/image5.png"
                                    logoAlt="NU-X logotyp"
                                    brandNameStrong="NU-X"
                                    brandNameLight=""
                                    description="NU-X förstärkare och effektpedaler är ett relativt nytt varumärke i Sverige. NU-X imponerar när det gäller pris, design, kvalité och ljud."
                                />
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