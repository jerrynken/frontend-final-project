// Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <>
                <div className="footer-column">
                    <img
                        src={require("../assets/logo.jpg")}
                        alt="little lemon restaurant"
                        height={20}
                    />
                </div>
            </>
            <>
                <div className="footer-column">
                    <h2>Important Links</h2>
                    <nav>
                        <ul>
                            <li><a href="home" className="nav-item">Home</a></li>
                            <li><a href="about" className="nav-item">About</a></li>
                            <li><a href="menu" className="nav-item">Menu</a></li>
                            <li><a href="reservation" className="nav-item">Reservations</a></li>
                            <li><a href="order" className="nav-item">Order Online</a></li>
                            <li><a href="login" className="nav-item">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </>
            <>
                <div className="footer-column">
                    <h2>Contact</h2>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
            </>
            <>
                <div className="footer-column">
                    <h2>Social Media Links</h2>
                    <ul>
                        <li><a href="facebook" className="nav-item">Facebook</a></li>
                        <li><a href="linkedin" className="nav-item">LinkedIn</a></li>
                        <li><a href="twitter" className="nav-item">Twitter</a></li>
                    </ul>
                </div>
            </>
        </footer>
    );
}

export default Footer;
