import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import Kevin from './pages/Kevin';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Detail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/kevin" element={<Kevin />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
