import React, { useState } from 'react';
import '../styles/Footer.css';

// Import images from public
import appleApp from '/apple-app.svg';
import googleApp from '/google-app.svg';
import instagramIcon from '/instagram.svg';
import facebookIcon from '/facebook.svg';
import tiktokIcon from '/tiktok.svg';
import pinterestIcon from '/pinterest.svg';
import youtubeIcon from '/youtube.svg';

export default function Footer() {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(''); // used for both success & error
    const [isError, setIsError] = useState(false); // determines message color

    const validate = (e) => {
        e.preventDefault();
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            setMessage('Please enter a valid phone number.');
            setIsError(true);
            return;
        }

        // Success message
        setMessage('Success! You’ve been signed up for KHNG texts.');
        setIsError(false);

        // Clear the input field
        setPhone('');
    };

    return (
        <footer className="footer">
            {/* --- Sign-Up Section --- */}
            <section className="sign-up">
                <form onSubmit={validate} className="footer-form" id="form">
                    <div className="laptop-display">
                        <div className="footer-form_intro">
                            <h3>Sign-Up for Texts</h3>
                            <p>
                                Sign up to receive KHNG texts and get first dibs
                                on new arrivals, sales, exclusive content,
                                events and more!
                            </p>
                        </div>

                        <div className="footer-form_input-container">
                            <div className="footer-form_input">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {message && (
                                    <div
                                        className={`footer-error ${
                                            isError ? 'error' : 'success'
                                        }`}>
                                        {message}
                                    </div>
                                )}
                            </div>

                            <div className="footer-form_input">
                                <input
                                    type="submit"
                                    className="btn"
                                    value="Submit"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="footer-form_disclaimer">
                        By entering your phone number, you agree to receive KHNG
                        offers, promotions, and other commercial messages. You
                        can view our Privacy Policy here and unsubscribe at any
                        time.
                    </p>
                </form>
            </section>

            {/* --- Socials Section --- */}
            <section className="socials">
                <div className="app-store">
                    <a href="https://www.apple.com/app-store/" target="_blank">
                        <img src={appleApp} alt="Apple store app download" />
                    </a>
                    <a
                        href="https://play.google.com/store/apps"
                        target="_blank">
                        <img src={googleApp} alt="Google store app download" />
                    </a>
                </div>

                <div className="social-media">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="footer-social">
                        <img src={instagramIcon} alt="Instagram logo" />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="footer-social">
                        <img src={facebookIcon} alt="Facebook logo" />
                    </a>
                    <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        className="footer-social">
                        <img src={tiktokIcon} alt="Tiktok logo" />
                    </a>
                    <a
                        href="https://www.pinterest.com/"
                        target="_blank"
                        className="footer-social">
                        <img src={pinterestIcon} alt="Pinterest logo" />
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        className="footer-social">
                        <img src={youtubeIcon} alt="Youtube logo" />
                    </a>
                </div>
            </section>

            {/* --- Copyright --- */}
            <section className="copyright">
                <p>
                    &copy; 2025 Khang Vu Ecommerce Project. All Rights Reserved.
                    This project is intended for educational purposes only.
                </p>
                <p>Icons made by Icon Mafia, Pixel Icons, Enamo Studios</p>
            </section>
        </footer>
    );
}
