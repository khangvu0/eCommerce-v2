import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

//temp
import shirt1 from '../assets/linen-shirt.png';
import shirt2 from '../assets/polo.avif';
import pants1 from '../assets/baggy-jeans.png';
import pants2 from '../assets/ultra-baggy-jeans.png';

export default function Main() {
    // Temporary static data (will later come from your Node/MySQL backend)
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const sampleProducts = [
            {
                id: 1,
                name: 'Cropped Linen Button-Up Shirt',
                price: 80.0,
                description:
                    'Comfortable long-sleeve button-up shirt in our 100% linen fabric and new cropped length. Features a classic collar, left chest pocket and straight hem.',
                image: shirt1,
                category: 'tops',
            },
            {
                id: 3,
                name: 'Summer Linen-Blend Polo',
                price: 60.0,
                description:
                    "Comfortable short-sleeve polo in our new lightweight and breathable summer linen-blend fabric, that's perfect for hot sunny days. Features a classic polo collar, three-button placket and straight hem.",
                image: shirt2,
                category: 'tops',
            },
            {
                id: 5,
                name: 'Baggy Jean',
                price: 90.0,
                description:
                    'Our new baggy jeans, that are relaxed and baggy-fitting through the leg, with a slight puddle at the shoe, in our 100% cotton no-stretch fabric and broken-in denim feel. Features a medium wash and clean hem.',
                image: pants1,
                category: 'bottoms',
            },
            {
                id: 6,
                name: 'Ultra Baggy Jean',
                price: 90.0,
                description:
                    'Our new ultra baggy fit jeans that sit slightly lower on the hip, and are our baggiest fit through the leg, in our 100% cotton no-stretch fabric and broken-in denim feel. Features a grey wash and clean hem.',
                image: pants2,
                category: 'bottoms',
            },
        ];
        setBestSellers(sampleProducts);
    }, []);

    return (
        <main className="main">
            {/* Hero Section */}
            <section className="hero">
                <img
                    src="../../public/crosswalk.jpg"
                    alt="Hero image featuring a man on a crosswalk"
                    className="hero-image"
                />
                <div className="hero-text-container">
                    <h1 className="hero-title">KHNG</h1>
                    <p className="hero-subtitle">Your Everyday Elevated</p>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories">
                <h2></h2>
            </section>

            {/* Best Sellers Section */}
            <section className="best-sellers">
                <h2>Best Sellers</h2>
                <div className="best-sellers-grid">
                    {bestSellers.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Promo Section */}
            <section className="promo">
                <img
                    src="../../public/jeans-banner.png"
                    alt="Denim jeans banner"
                    className="promo-image"
                />
                <div className="promo-text-container">
                    <h2 className="promo-title">KHNG Denim</h2>
                    <Link to="/products#bottoms">
                        <p className="promo-subtitle">Shop Now</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}
