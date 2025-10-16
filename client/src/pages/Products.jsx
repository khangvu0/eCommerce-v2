import { useEffect, useState } from 'react';
import '../styles/Products.css';

function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/products');
                const data = await res.json();
                setProducts(data);
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
                                        <img
                                            src={`../${product.image}`}
                                            alt={product.name}
                                            className="product-image"
                                        />
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
