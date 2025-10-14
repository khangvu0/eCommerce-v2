import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
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
                                    <a
                                        href="/products#tops"
                                        className="dropdown_item">
                                        Tops
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/products#bottoms"
                                        className="dropdown_item">
                                        Bottoms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/products#shoes"
                                        className="dropdown_item">
                                        Shoes
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/products#accessories"
                                        className="dropdown_item">
                                        Accessories
                                    </a>
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
