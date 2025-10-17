import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Detail.css';

// Import images from assets
import baggyJeans from '../assets/baggy-jeans.png';
import chain from '../assets/chain.png';
import dressShirt from '../assets/dress-shirt.avif';
import dunks from '../assets/dunks.png';
import linenPants from '../assets/linen-pants.png';
import linenShirt from '../assets/linen-shirt.png';
import loafers from '../assets/loafers.png';
import pendant from '../assets/pendant.png';
import plaidShirt from '../assets/plaid-shirt.avif';
import polo from '../assets/polo.avif';
import tokuten from '../assets/tokuten.png';
import ultraBaggyJeans from '../assets/ultra-baggy-jeans.png';
import workwearPants from '../assets/workwear-pants.avif';

function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [added, setAdded] = useState(false);

    const imageMap = {
        'baggy-jeans.png': baggyJeans,
        'chain.png': chain,
        'dress-shirt.avif': dressShirt,
        'dunks.png': dunks,
        'linen-pants.png': linenPants,
        'linen-shirt.png': linenShirt,
        'loafers.png': loafers,
        'pendant.png': pendant,
        'plaid-shirt.avif': plaidShirt,
        'polo.avif': polo,
        'tokuten.png': tokuten,
        'ultra-baggy-jeans.png': ultraBaggyJeans,
        'workwear-pants.avif': workwearPants,
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/api/products/${id}`
                );
                if (!res.ok) throw new Error('Failed to fetch product');
                const data = await res.json();
                setProduct({
                    ...data,
                    image: imageMap[data.image] || null,
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    if (loading) return <p className="loading">Loading product details...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!product) return <p>No product found.</p>;

    return (
        <main className="detail-page">
            <div className="detail-container">
                <div className="detail-image">
                    {product.image ? (
                        <img src={product.image} alt={product.name} />
                    ) : (
                        <div className="image-placeholder">No Image</div>
                    )}
                </div>
                <div className="detail-info">
                    <h1>{product.name}</h1>
                    <p className="price">${product.price}</p>
                    <p className="description">{product.description}</p>

                    <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}>
                        Add to Cart
                    </button>

                    {added && <p className="added-message">Added to cart</p>}

                    <Link to="/products" className="back-btn">
                        ← Back to Products
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Detail;
