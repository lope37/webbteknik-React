import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ name, price, imageFront, imageBack, colors }) {
    return (
        <Link to="/produkt" className="product-card-link">
            <article className="product-card">
                <div className="product-card-image">
                    <img src={imageFront} alt={`${name} framsida`} className="card-img-front" />
                    <img src={imageBack} alt={`${name} baksida`} className="card-img-back" />
                </div>
                <div className="product-card-info">
                    <h2 className="product-card-name">{name}</h2>
                    <p className="product-card-price">{price}</p>
                    <p className="product-card-colors">
                        {colors} färger <img src="/assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" />
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default ProductCard;