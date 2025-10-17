import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState('All');

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
    const priceRanges = ['All', 'Under $75', '$75–$100', 'Over $100'];

    // Helper function that filters products within each section
    const filterProducts = (section) => {
        return products.filter((product) => {
            const matchCategory =
                product.category &&
                product.category.toLowerCase() === section.toLowerCase();

            const matchPrice =
                selectedPrice === 'All' ||
                (selectedPrice === 'Under $75' && product.price < 75) ||
                (selectedPrice === '$75–$100' &&
                    product.price >= 75 &&
                    product.price <= 100) ||
                (selectedPrice === 'Over $100' && product.price > 100);

            return matchCategory && matchPrice;
        });
    };

    // Determine which sections to render
    const visibleSections =
        selectedCategory === 'All'
            ? categories
            : categories.filter(
                  (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
              );

    return (
        <main className="main">
            {/* --- FILTER CONTROLS --- */}
            <div className="filters">
                <div className="filter">
                    <label htmlFor="category">Filter by Type:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="All">All</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter">
                    <label htmlFor="price">Filter by Price:</label>
                    <select
                        id="price"
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}>
                        {priceRanges.map((range) => (
                            <option key={range} value={range}>
                                {range}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* --- CATEGORY SECTIONS --- */}
            {visibleSections.map((section) => {
                const filteredProducts = filterProducts(section);
                if (filteredProducts.length === 0) return null; // Hide empty sections

                return (
                    <section
                        key={section}
                        id={section.toLowerCase()} // Add section ID for anchor links
                        className="product-section">
                        <h2 className="section-title">{section}</h2>
                        <div className="product-grid">
                            {filteredProducts.map((product) => (
                                <Link
                                    to={`/products/${product.id}`}
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
                                    <h3 className="name">{product.name}</h3>
                                    <p className="price">${product.price}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}

export default ProductsPage;
