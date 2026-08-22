import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

class ProductGridPage extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <section className="produktgrid-page" aria-labelledby="grid-title">
                        <div className="wrapper">
                            <nav className="breadcrumb" aria-label="Brödsmulor">
                                <p><Link to="/">Startsida</Link>/<Link to="/produkter">Gitarrer</Link>/<span>Stratocaster</span></p>
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
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        );
    }
}

export default ProductGridPage;