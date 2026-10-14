import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Workflow, ShieldCheck, Rocket } from 'lucide-react';

const offerings = [
    {
        icon: Code2,
        color: '#00E5FF',
        title: 'Full-Stack Products',
        body: 'I design and ship complete applications, from database schema and REST API to pixel-perfect UI, with auth, testing, and CI/CD baked in from day one.',
    },
    {
        icon: Workflow,
        color: '#7B61FF',
        title: 'Intelligent Automation',
        body: 'N8N and Make.com workflows that handle your lead capture, CRM sync, scheduling, notifications, and AI agent tasks, automatically and reliably.',
    },
    {
        icon: ShieldCheck,
        color: '#3ECF8E',
        title: 'Secure API Design',
        body: 'Role-based access control, OAuth, payment gateway integration, and advisory-locked financial transactions built to the standards production demands.',
    },
    {
        icon: Rocket,
        color: '#F97316',
        title: 'Fast Delivery',
        body: 'Simple automations in days. Complex multi-service apps in weeks. I communicate clearly, document thoroughly, and hand off cleanly every time.',
    },
];

const About = () => (
    <section className="section about-section">
        <div className="container">
            {/* Bio block */}
            <div className="about-bio-grid">
                <motion.div
                    className="about-bio-text"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <span className="about-eyebrow">Background</span>
                    <h2 className="about-bio-heading">
                        I build software that <span className="gradient-text">ships and scales</span>
                    </h2>
                    <p className="about-bio-para">
                        Hi, I'm Damilare, a Full-Stack Engineer and Automation Specialist based in Nigeria. I've spent the last few years building production applications for fintech companies, schools, and growing businesses across Africa and beyond.
                    </p>
                    <p className="about-bio-para">
                        On the engineering side, I work across the full stack. That means Laravel REST APIs, NestJS microservices, and React and TypeScript SPAs with Next.js, Redux Toolkit, and Chakra UI. I've shipped fintech platforms, school portals, merchant dashboards, and field officer tools, all with solid auth, testing pipelines, and Docker deployments.
                    </p>
                    <p className="about-bio-para">
                        On the automation side, I design N8N and Make.com systems that cut out repetitive work, plug AI agents into real business processes, and connect the tools your team already uses without fragile glue code. The goal is always the same: something that actually works in production, not just in a demo.
                    </p>

                    <div className="about-meta-strip">
                        <div className="about-meta-item">
                            <span className="about-meta-value">3+</span>
                            <span className="about-meta-label">Years Experience</span>
                        </div>
                        <div className="about-meta-item">
                            <span className="about-meta-value">10+</span>
                            <span className="about-meta-label">Products Shipped</span>
                        </div>
                        <div className="about-meta-item">
                            <span className="about-meta-value">9+</span>
                            <span className="about-meta-label">Automations Built</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-image-col"
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                >
                    <div className="about-photo-wrap">
                        <img src="/profile.png" alt="Damilare Ogundele" className="about-photo" />
                        <div className="about-photo-glow" />
                    </div>
                    <div className="about-badge-available">
                        <span className="about-badge-dot" />
                        Available for new projects
                    </div>
                </motion.div>
            </div>

            {/* What I Offer grid */}
            <motion.div
                className="section-header center"
                style={{ marginTop: '80px' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">What I Offer</h2>
                <p className="section-subtitle">Everything from first commit to production deploy.</p>
            </motion.div>

            <div className="about-offerings-grid">
                {offerings.map((o, i) => (
                    <motion.div
                        key={o.title}
                        className="about-offering-card"
                        style={{ '--offering-color': o.color }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.45 }}
                    >
                        <div className="about-offering-icon" style={{ background: `${o.color}15`, border: `1px solid ${o.color}28` }}>
                            <o.icon size={22} style={{ color: o.color }} />
                        </div>
                        <h3 className="about-offering-title">{o.title}</h3>
                        <p className="about-offering-body">{o.body}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default About;
