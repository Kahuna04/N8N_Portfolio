import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home',        path: '/' },
    { name: 'Projects',    path: '/projects' },
    { name: 'Automations', path: '/automations' },
    { name: 'About',       path: '/about' },
    { name: 'Contact',     path: '/contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setMenuOpen(false), [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <NavLink to="/" className="logo">
                    <img src="/logo.png" alt="Damilare Ogundele" className="logo-image" />
                </NavLink>

                {/* Desktop */}
                <div className="nav-links desktop-only">
                    {navLinks.map(({ name, path }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end={path === '/'}
                            className={({ isActive }) =>
                                `nav-link${isActive ? ' nav-link--active' : ''}`
                            }
                        >
                            {name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    className="menu-toggle mobile-only"
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mobile-menu"
                >
                    <div className="mobile-nav-links">
                        {navLinks.map(({ name, path }) => (
                            <NavLink
                                key={path}
                                to={path}
                                end={path === '/'}
                                className={({ isActive }) =>
                                    `mobile-nav-link${isActive ? ' nav-link--active' : ''}`
                                }
                            >
                                {name}
                            </NavLink>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
