import React from "react"
import "./Footer.css" // Make sure to create a Footer.css file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/assets/images/logo2.png" alt="Logo" className="footer-logo" />
                <p className="footer-description">Ordinary technology made extraordinary</p>
                <div className="flex mb-10 mt-10">
                    <a href="https://www.instagram.com/garoo.inc?igsh=MTRucnBjdmQ0YnI5ZQ==" className="footer-social">
                        <img src="/assets/images/ig.svg" alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/share/abnfNG2zoiFng4Wf/?mibextid=LQQJ4d" className="footer-social">
                        <img src="/assets/images/fb.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/garoo-inc/" className="footer-social">
                        <img src="/assets/images/li.svg" alt="Twitter" />
                    </a>
                </div>
                <p className="footer-copyright">© 2023 Garoo Inc. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
