import { React } from 'react';

import Logo from '../assets/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container container">
                <div className="footer-logo">
                    <img src={Logo} alt="PrimeXBT Logo" />
                </div>
                <div className="footer-info">
                    <p>PrimeXBT © 2023. All rights reserved.</p>
                    <p>General information: <a href="mailto:info@primexbt.com">info@primexbt.com</a></p>
                    <p>Technical support: <a href="mailto:support@help.primexbt.com">support@help.primexbt.com</a></p>
                </div>
                <div className="footer-legal-terms">
                    <a href="/terms-and-conditions">Legal Terms</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;