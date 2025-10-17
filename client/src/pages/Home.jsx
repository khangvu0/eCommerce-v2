import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Home.css';

// Import images from assets
import baggyJeans from '../assets/baggy-jeans.png';
import linenShirt from '../assets/linen-shirt.png';
import loafers from '../assets/loafers.png';
import polo from '../assets/polo.avif';
import tokuten from '../assets/tokuten.png';
import ultraBaggyJeans from '../assets/ultra-baggy-jeans.png';
import pendant from '../assets/pendant.png';

export default function Home() {
    const [bestSellers, setBestSellers] = useState([]);

    // Map backend image filenames to local imports
    const imageMap = {
        'baggy-jeans.png': baggyJeans,
        'linen-shirt.png': linenShirt,
        'polo.avif': polo,
        'ultra-baggy-jeans.png': ultraBaggyJeans,
        'tokuten.png': tokuten,
        'loafers.png': loafers,
        'pendant.png': pendant,
    };

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                const res = await fetch(
                    'http://localhost:5000/api/best-sellers'
                );
                const data = await res.json();

                const bestSellersWithImages = data.map((product) => ({
                    ...product,
                    image: imageMap[product.image] || null,
                }));

                setBestSellers(bestSellersWithImages);
            } catch (err) {
                console.error('Error fetching best sellers:', err);
            }
        };

        fetchBestSellers();
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    const handlePromoClick = () => {
        if (location.pathname === '/products') {
            const section = document.getElementById('bottoms');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/products');
            setTimeout(() => {
                const section = document.getElementById('bottoms');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    return (
        <main className="main">
            {/* Hero Section */}
            <section className="hero">
                <img
                    src="/crosswalk.jpg"
                    alt="Hero image featuring a man on a crosswalk"
                    className="hero-image"
                />
                <div className="hero-text-container">
                    <h1 className="hero-title">KHNG</h1>
                    <p className="hero-subtitle">Your Everyday Elevated</p>
                </div>
            </section>

            {/* Best Sellers Section */}
            <section className="best-sellers">
                <h2>Best Sellers</h2>
                <div className="best-sellers-slider">
                    {bestSellers.length > 0 ? (
                        bestSellers.map((product) => (
                            <div key={product.id} className="slider-card">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="slider-image"
                                    />
                                ) : (
                                    <div className="image-placeholder">
                                        No image
                                    </div>
                                )}
                                <p className="slider-name">{product.name}</p>
                            </div>
                        ))
                    ) : (
                        <p>Loading best sellers...</p>
                    )}
                </div>
            </section>

            {/* Promo Section */}
            <section className="promo">
                <img
                    src="/jeans-banner.png"
                    alt="Denim jeans banner"
                    className="promo-image"
                />
                <div className="promo-text-container">
                    <h2 className="promo-title">KHNG Denim</h2>
                    <button
                        className="promo-subtitle"
                        onClick={handlePromoClick}>
                        Shop Now
                    </button>
                </div>
            </section>
        </main>
    );
}
