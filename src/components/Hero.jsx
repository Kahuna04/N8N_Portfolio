import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Code2, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* Background Glows */}
            <div className="glow glow-primary"></div>
            <div className="glow glow-secondary"></div>

            <div className="container hero-container">
                <div className="hero-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-content"
                    >
                        <span className="badge">
                            Full-Stack Engineer & Automation Specialist
                        </span>
                        <h1 className="hero-title">
                            Building Products &
                            <br />
                            <span className="gradient-text">
                                Intelligent Automation
                            </span>
                        </h1>
                        <p className="hero-description">
                            I engineer full-stack products and intelligent automation systems. From
                            REST APIs and React SPAs to N8N workflows, AI agents, and LLM-powered pipelines.
                        </p>

                        <div className="hero-actions">
                            <Link to="/projects" className="cta-button primary">
                                View Projects
                            </Link>
                            <Link to="/automations" className="cta-button secondary">
                                See Automations
                            </Link>
                        </div>

                        <div className="hero-socials">
                            <SocialLink href="https://linkedin.com/in/damilare-ogundele/" icon={<Linkedin size={24} />} />
                            <SocialLink href="https://dev.to/kahuna04" icon={<Code2 size={24} />} />
                            <SocialLink href="mailto:ogundele.damilare4@gmail.com" icon={<Mail size={24} />} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-image-container"
                    >
                        <div className="hero-image-wrapper">
                            <img src="/profile.png" alt="Damilare Ogundele" className="hero-image" />
                            <div className="image-glow"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
    >
        {icon}
    </a>
);

export default Hero;
