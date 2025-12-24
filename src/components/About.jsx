import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">About Me</h2>
                </div>

                <motion.div
                    className="about-content centered-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="about-text">
                        Hi, I am Damilare. I’m a <strong>AI Agent and automation specialist</strong> who builds workflow-driven operations layers for growing service brands.
                    </p>
                    <p className="about-text">
                        I specialize in <strong>N8N and Make.com</strong> to design systems that reduce repetitive admin work, create consistent workflows, and improve leadership visibility—all with reliability and clean handoff to human teams.
                    </p>
                    <p className="about-text">
                        I design reliable, documented, and fully custom automations that handle lead capture, CRM syncing, customer communication, scheduling, and more — all built to fit your real workflow, not a template.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
