import React from "react"
import "./Footer.css" // Make sure to create a Footer.css file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/assets/images/logo2.png" alt="Logo" className="footer-logo" />
                <p className="footer-description">Ordinary technology made extraordinary</p>
                <div className="flex mb-10 mt-10">
                    {/* Replace # with your social media links */}
                    <a href="#" className="footer-social">
                        <img src="/assets/images/fb.svg" alt="Facebook" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/assets/images/tw.svg" alt="Instagram" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/assets/images/li.svg" alt="Twitter" />
                    </a>
                </div>
                <p className="footer-copyright">© 2023 Garoo Inc. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
