import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        country: '',
    });

    const [errors, setErrors] = useState({});
    const [inputStatus, setInputStatus] = useState({});
    const [successMessage, setSuccessMessage] = useState(''); // ✅ new success message state

    const nameRegex = /^[a-zA-Z]{2,12}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
        setSuccessMessage(''); // reset success message when typing again
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;
        let newErrors = {};
        let newInputStatus = {};

        // --- Validation Logic ---
        if (!nameRegex.test(formData.firstName)) {
            valid = false;
            newErrors.firstName =
                'First name must be between 2 and 12 letters.';
            newInputStatus.firstName = 'input-invalid';
        } else {
            newInputStatus.firstName = 'input-valid';
        }

        if (!nameRegex.test(formData.lastName)) {
            valid = false;
            newErrors.lastName = 'Last name must be between 2 and 12 letters.';
            newInputStatus.lastName = 'input-invalid';
        } else {
            newInputStatus.lastName = 'input-valid';
        }

        if (!emailRegex.test(formData.email)) {
            valid = false;
            newErrors.email = 'Please enter a valid email address.';
            newInputStatus.email = 'input-invalid';
        } else {
            newInputStatus.email = 'input-valid';
        }

        if (formData.message.trim().length < 2) {
            valid = false;
            newErrors.message =
                'Please enter a valid message (more than 2 letters).';
            newInputStatus.message = 'input-invalid';
        } else {
            newInputStatus.message = 'input-valid';
        }

        if (!formData.country) {
            valid = false;
            newErrors.country = 'Please select a country.';
            newInputStatus.country = 'input-invalid';
        } else {
            newInputStatus.country = 'input-valid';
        }

        setErrors(newErrors);
        setInputStatus(newInputStatus);

        if (valid) {
            setSuccessMessage('Your message has been successfully submitted!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
                country: '',
            });
            setErrors({});
            setInputStatus({});
        } else {
            setSuccessMessage(''); // hide success message if validation fails
        }
    };

    return (
        <main className="main">
            <section className="contact-section">
                <div className="contact-left">
                    <h2>Contact Us</h2>
                    <p className="intro">
                        Let us know how we can help. Fill out the form and our
                        team will get back to you shortly.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="contact-form"
                        id="form">
                        <div className="form-row">
                            <div>
                                <label htmlFor="first-name">First name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={inputStatus.firstName || ''}
                                />
                                {errors.firstName && (
                                    <div className="contact-error">
                                        {errors.firstName}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="last-name">Last name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={inputStatus.lastName || ''}
                                />
                                {errors.lastName && (
                                    <div className="contact-error">
                                        {errors.lastName}
                                    </div>
                                )}
                            </div>
                        </div>

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputStatus.email || ''}
                        />
                        {errors.email && (
                            <div className="contact-error">{errors.email}</div>
                        )}

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className={inputStatus.message || ''}
                        />
                        {errors.message && (
                            <div className="contact-error">
                                {errors.message}
                            </div>
                        )}

                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={inputStatus.country || ''}>
                            <option value="">Select</option>
                            <option value="USA">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                        {errors.country && (
                            <div className="contact-error">
                                {errors.country}
                            </div>
                        )}

                        <button type="submit" className="btn">
                            Send message
                        </button>

                        {/* ✅ Success message appears below button */}
                        {successMessage && (
                            <div className="contact-success">
                                {successMessage}
                            </div>
                        )}
                    </form>

                    <p className="privacy-note">
                        By submitting this form, you consent to KHNG collecting,
                        processing, and storing your information in accordance
                        with our <a href="#">Privacy Policy</a>.
                    </p>
                </div>

                <div className="contact-right">
                    <h3 className="support">Product & account support</h3>
                    <p>
                        Check our Help Center for quick answers to common
                        questions.
                    </p>
                    <a href="#" className="help-link">
                        Visit Help Center →
                    </a>

                    <h3 className="talk">Talk with us</h3>
                    <p>
                        Call us at <strong>1-980-333-2042</strong>
                        <br />
                        Mon–Fri, 8am–6pm EST
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Contact;
