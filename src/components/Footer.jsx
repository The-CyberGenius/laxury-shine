const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <img src="/assets/logo.png" alt="Laxury Shine" className="footer-logo" />
                    <p>Turning moments into memories.<br />Rajasthan, India.</p>
                </div>
                <div className="footer-links">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h5>Follow Us</h5>
                    <a href="https://www.instagram.com/luxury_shine07" target="_blank" rel="noreferrer" className="social-link" id="footer-ig">
                        Instagram @luxury_shine07
                    </a>
                    <a href="tel:+916367074582" className="social-link" id="footer-phone">
                        📞 +91 63670 74582
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Laxury Shine. All Rights Reserved. | Crafted with ♥ in Rajasthan</p>
            </div>
        </footer>
    )
}

export default Footer
