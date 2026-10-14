import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowUpRight, Twitter } from 'lucide-react';

const contactMethods = [
    {
        icon: Mail,
        color: '#00E5FF',
        label: 'Email',
        value: 'ogundele.damilare4@gmail.com',
        sub: 'Usually responds within 24 hours',
        href: 'mailto:ogundele.damilare4@gmail.com',
    },
    {
        icon: Phone,
        color: '#25D366',
        label: 'WhatsApp',
        value: '+234 807 085 9502',
        sub: 'For quick conversations',
        href: 'https://wa.me/2348070859502',
    },
    {
        icon: Linkedin,
        color: '#0A66C2',
        label: 'LinkedIn',
        value: 'damilare-ogundele',
        sub: 'Connect professionally',
        href: 'https://linkedin.com/in/damilare-ogundele/',
    },
];

const Contact = () => (
    <section className="section contact-section">
        <div className="container">
            <div className="contact-layout">
                {/* Left col — copy */}
                <motion.div
                    className="contact-copy"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <span className="about-eyebrow">Get In Touch</span>
                    <h2 className="contact-heading">
                        Let's build something <span className="gradient-text">worth shipping</span>
                    </h2>
                    <p className="contact-body">
                        Whether you need a full-stack application, a workflow automation, or an API integration, I'm open to freelance, contract, and full-time roles.
                    </p>
                    <p className="contact-body">
                        I communicate clearly, deliver on time, and hand off with documentation. Pick a channel below and let's get started.
                    </p>

                    <div className="contact-availability">
                        <span className="contact-avail-dot" />
                        <span>Currently available for new projects</span>
                    </div>

                    {/* Social row */}
                    <div className="contact-social-row">
                        <a href="https://x.com/k_automate" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Twitter">
                            <Twitter size={18} />
                        </a>
                        <a href="https://dev.to/kahuna04" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Dev.to">
                            <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '13px' }}>DEV</span>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~017e047abd04495dd1" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Upwork">
                            <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '11px' }}>UP</span>
                        </a>
                    </div>
                </motion.div>

                {/* Right col — contact cards */}
                <div className="contact-cards-col">
                    {contactMethods.map((m, i) => (
                        <motion.a
                            key={m.label}
                            href={m.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-method-card"
                            style={{ '--contact-color': m.color }}
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.45 }}
                        >
                            <div className="contact-method-icon" style={{ background: `${m.color}14`, border: `1px solid ${m.color}28` }}>
                                <m.icon size={20} style={{ color: m.color }} />
                            </div>
                            <div className="contact-method-text">
                                <span className="contact-method-label">{m.label}</span>
                                <span className="contact-method-value">{m.value}</span>
                                <span className="contact-method-sub">{m.sub}</span>
                            </div>
                            <ArrowUpRight size={18} className="contact-method-arrow" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
