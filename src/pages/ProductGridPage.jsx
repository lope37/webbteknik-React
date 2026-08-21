import React, { Component } from 'react';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ProductGridPage extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <section className="produktgrid-page" aria-labelledby="grid-title">
                        <div className="wrapper">
                            <nav className="breadcrumb" aria-label="Brödsmulor">
                                <p><a href="index.html">Startsida</a>/<a href="produktgrid.html">Gitarrer</a>/<span>Stratocaster</span></p>
                            </nav>

                            <h1 className="produktgrid-title" id="grid-title">Stratocaster</h1>

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

                <Footer />
            </>
        );
    }
}

export default ProductGridPage;