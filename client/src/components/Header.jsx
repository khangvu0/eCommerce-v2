import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    // Smoothly scrolls to a section after navigation
    const handleNavClick = (sectionId) => {
        if (location.pathname === '/products') {
            // If already on the products page, just scroll
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate first
            navigate(`/products#${sectionId}`);
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300); // wait for Products page to render
        }
    };

    return (
        <header className="header" id="header">
            <nav className="nav">
                <Link to="/" className="nav_logo">
                    KHNG
                </Link>

                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <Link to="/" className="nav_link">
                                Home
                            </Link>
                        </li>

                        <li className="nav_item dropdown">
                            <Link to="/products" className="nav_link">
                                Products
                            </Link>
                            <ul className="dropdown_menu">
                                <li>
                                    <button
                                        onClick={() => handleNavClick('tops')}
                                        className="dropdown_item">
                                        Tops
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            handleNavClick('bottoms')
                                        }
                                        className="dropdown_item">
                                        Bottoms
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavClick('shoes')}
                                        className="dropdown_item">
                                        Shoes
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            handleNavClick('accessories')
                                        }
                                        className="dropdown_item">
                                        Accessories
                                    </button>
                                </li>
                            </ul>
                        </li>

                        <li className="nav_item">
                            <Link to="/contact" className="nav_link">
                                Contact
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/cart" className="nav_link">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
