import React from 'react';
import { Link } from 'react-router-dom';

function BrandCard({ logoSrc, logoAlt, brandNameStrong, brandNameLight, description }) {
    return (
        <article className="brand-card">
            <div className="brand-logo-box">
                <img src={logoSrc} alt={logoAlt} className="brand-logo-img" />
            </div>
            <div className="brand-info">
                <h3 className="brand-name">
                    <strong>{brandNameStrong}</strong> 
                    {brandNameLight && <span className="brand-name-light"> – {brandNameLight}</span>}
                </h3>
                <p className="brand-desc">{description}</p>
                <Link to="/produkter" className="read-more">
                    Läs mer <img src="/assets/vector-arrow.svg" alt="" className="arrow-inline" />
                </Link>
            </div>
        </article>
    );
}

export default BrandCard;