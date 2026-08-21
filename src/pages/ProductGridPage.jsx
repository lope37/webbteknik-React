import React, { Component } from 'react';

class ProductGridPage extends Component {
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
                                <li><a href="produktgrid.html" className="nav-link active-link">Gitarrer</a></li>
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

                    {/* PRODUKT GRID */}
                    <section className="produktgrid-page" aria-labelledby="grid-title">
                        <div className="wrapper">

                            {/* Breadcrumb */}
                            <nav className="breadcrumb" aria-label="Brödsmulor">
                                <p><a href="index.html">Startsida</a>/<a href="produktgrid.html">Gitarrer</a>/<span>Stratocaster</span></p>
                            </nav>

                            {/* Kategoriy titel */}
                            <h1 className="produktgrid-title" id="grid-title">Stratocaster</h1>

                            {/* Filter, Sortering bar */}
                            <div className="filter-sort-bar">
                                <button className="filter-btn" aria-label="Visa filter">
                                    <img src="assets/filter.svg" alt="" width="24" height="24" />
                                    <span>Filter</span>
                                </button>
                                <button className="sort-btn" aria-label="Sortera produkter">
                                    <span>Sortera efter</span>
                                    <img src="assets/arrow-down.svg" alt="" width="12" height="24" className="sort-arrow" />
                                </button>
                            </div>

                            {/* Produkt grid */}
                            <div className="produktgrid">
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h2 className="product-card-name">Green ST Classic</h2>
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
                                            <h2 className="product-card-name">Green ST Classic</h2>
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
                                            <h2 className="product-card-name">Green ST Classic</h2>
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
                                            <h2 className="product-card-name">Green ST Classic</h2>
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
                                            <h2 className="product-card-name">Green ST Classic</h2>
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
                                            <h2 className="product-card-name">Green ST Classic</h2>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
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

export default ProductGridPage;