import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">
                    © {new Date().getFullYear()} Damilare Ogundele. All rights reserved.
                </p>
                <div className="footer-links">
                    <a href="https://www.upwork.com/freelancers/~017e047abd04495dd1" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Upwork
                    </a>
                    <a href="https://dev.to/kahuna04" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Dev.to
                    </a>
                    <a href="https://linkedin.com/in/damilare-ogundele/" target="_blank" rel="noopener noreferrer" className="footer-link">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
