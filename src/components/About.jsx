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
                    className="about-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="about-text">
                        Hi, I am Damilare, a passionate automation expert and developer dedicated to building efficient, scalable, and intelligent systems. With a deep understanding of workflow automation and full-stack development, I bridge the gap between complex technical requirements and seamless user experiences.
                    </p>
                    <p className="about-text">
                        My journey involves mastering tools like N8N, Make.com, and integrating advanced AI solutions to solve real-world problems. I thrive on optimizing processes and creating robust architectures that empower businesses to achieve more with less effort.
                    </p>
                    <p className="about-text">
                        When I'm not coding or designing workflows, I'm constantly exploring new technologies to stay ahead of the curve and deliver cutting-edge solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
