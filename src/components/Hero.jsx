import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Code2 } from 'lucide-react';

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
                            Available for Automation Projects
                        </span>
                        <h1 className="hero-title">
                            Building Intelligent <br />
                            <span className="gradient-text">
                                AI Agents &amp; Automation
                            </span>
                        </h1>
                        <p className="hero-description">
                            I streamline operations and enhance productivity by building custom workflows with N8N and Make.com.
                            Expert in connecting APIs, LLMs, and business logic.
                        </p>

                        <div className="hero-actions">
                            <a
                                href="#portfolio"
                                className="cta-button primary"
                            >
                                View Workflows
                            </a>
                            <a
                                href="#contact"
                                className="cta-button secondary"
                            >
                                Contact Me
                            </a>
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
