// ApplicationComponents/FooterComponent.jsx

import React from 'react';
import './styles/Footer.css';

const FooterComponent = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content-container">
                
                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>
                
                <div className="footer-column">
                    <h4>Communities</h4>
                    <ul>
                        <li><a href="#">For Artists</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Advertising</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Web Player</a></li>
                        <li><a href="#">Mobile App</a></li>
                    </ul>
                </div>
                
                <div className="footer-social">
                    <button className="social-btn">📘</button>
                    <button className="social-btn">🐦</button>
                    <button className="social-btn">📸</button>
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} TUNES</p>
            </div>
        </footer>
    );
};

export default FooterComponent;