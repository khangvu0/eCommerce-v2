import { useEffect, useState } from 'react';
import '../styles/Products.css';

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

function ProductsPage() {
    const [products, setProducts] = useState([]);

    // Image lookup table
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
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/products');
                const data = await res.json();

                // Map image filename from backend to imported image
                const productsWithImages = data.map((product) => ({
                    ...product,
                    image: imageMap[product.image] || null,
                }));

                setProducts(productsWithImages);
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        };

        fetchProducts();
    }, []);

    const categories = ['Tops', 'Bottoms', 'Shoes', 'Accessories'];

    return (
        <main className="main">
            {categories.map((category) => {
                const filtered = products.filter(
                    (product) =>
                        product.category.toLowerCase() ===
                        category.toLowerCase()
                );

                return (
                    <section
                        className="categories"
                        id={category.toLowerCase()}
                        key={category}>
                        <h2 className="categories-title">{category}</h2>
                        <div className="product-grid">
                            {filtered.length > 0 ? (
                                filtered.map((product) => (
                                    <div
                                        className="product-card"
                                        key={product.id}>
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="product-image"
                                            />
                                        ) : (
                                            <div className="image-placeholder">
                                                No image
                                            </div>
                                        )}
                                        <h3>{product.name}</h3>
                                        <p>${product.price}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No {category.toLowerCase()} available.</p>
                            )}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}

export default ProductsPage;
