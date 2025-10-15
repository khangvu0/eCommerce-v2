import React from 'react';
import '../styles/ProductCard.css';

export default function ProductCard({ product }) {
    const { name, description, price, image, category } = product;

    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />

            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-category">{category}</p>
                <p className="product-description">{description}</p>
                <p className="product-price">${price}</p>

                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}
