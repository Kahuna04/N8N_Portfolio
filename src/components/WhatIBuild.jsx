import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Plug } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
    {
        icon: Layers,
        color: '#00E5FF',
        title: 'Full-Stack Engineering',
        body: 'End-to-end products: React SPAs, Next.js apps, Laravel REST APIs, and NestJS microservices, all built with TypeScript, tested, and deployed to production.',
        cta: 'View Projects',
        to: '/projects',
    },
    {
        icon: Zap,
        color: '#7B61FF',
        title: 'Workflow Automation',
        body: 'Custom N8N and Make.com systems that connect your tools, fire AI agents into real processes, and eliminate the manual work your team shouldn\'t be doing.',
        cta: 'See Automations',
        to: '/automations',
    },
    {
        icon: Plug,
        color: '#3ECF8E',
        title: 'API & Integration',
        body: 'Reliable REST API design, third-party service integration (Paystack, Firebase, Cloudinary, Twilio, OpenAI), and bulletproof webhook pipelines.',
        cta: 'About Me',
        to: '/about',
    },
];

const WhatIBuild = () => (
    <section className="section wib-section">
        <div className="container">
            <motion.div
                className="section-header center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">
                    What I <span className="gradient-text">Build</span>
                </h2>
                <p className="section-subtitle">
                    Three disciplines. One engineer. Shipped to production.
                </p>
            </motion.div>

            <div className="wib-grid">
                {pillars.map((p, i) => (
                    <motion.div
                        key={p.title}
                        className="wib-card"
                        style={{ '--pillar-color': p.color }}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                    >
                        <div className="wib-icon-wrap">
                            <p.icon size={26} style={{ color: p.color }} />
                        </div>
                        <h3 className="wib-title">{p.title}</h3>
                        <p className="wib-body">{p.body}</p>
                        <Link to={p.to} className="wib-link">
                            {p.cta} →
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default WhatIBuild;
