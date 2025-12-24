import React from 'react';
import { Mail, Linkedin, Phone, Twitter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Ready to Automate?</h2>
                    <p className="contact-subtitle">
                        Let's discuss how we can streamline your operations and save hours of manual work.
                        <br className="desktop-only" />
                        Get in touch and I'll map out a tailored strategy within 24 hours.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-actions"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <a href="mailto:ogundele.damilare4@gmail.com" className="email-cta-button">
                        <Mail size={20} className="btn-icon" />
                        <span>ogundele.damilare4@gmail.com</span>
                        <ArrowUpRight size={20} className="arrow-icon" />
                    </a>

                    <div className="social-links-row">
                        <SocialLink
                            href="https://wa.me/2348070859502"
                            icon={<Phone size={20} />}
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/damilare-ogundele/"
                            icon={<Linkedin size={20} />}
                        />
                        <SocialLink
                            href="https://x.com/k_automate"
                            icon={<Twitter size={20} />}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-circle-btn"
    >
        {icon}
    </a>
);

export default Contact;
