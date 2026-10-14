import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { softwareProjects } from '../data/software-projects';
import { portfolioItems } from '../data/portfolio';

// Show 2 software + 1 automation as teasers
const featuredSoftware = softwareProjects.slice(0, 2);
const featuredAutomation = portfolioItems[0];

const SoftwareCard = ({ project }) => (
    <div className="fw-card" style={{ '--fw-color': project.color }}>
        <div className="fw-card-top">
            <div className="fw-icon-wrap" style={{ background: `${project.color}18`, border: `1px solid ${project.color}28` }}>
                <project.icon size={20} style={{ color: project.color }} />
            </div>
            <span className="fw-type-badge">{project.type}</span>
        </div>
        <h3 className="fw-title">{project.title}</h3>
        <p className="fw-desc">{project.description}</p>
        <div className="fw-tags">
            {project.tags.slice(0, 4).map(t => <span key={t} className="sw-tag">{t}</span>)}
        </div>
    </div>
);

const AutomationCard = ({ item }) => (
    <div className="fw-card fw-card--automation">
        <div className="fw-card-top">
            <div className="fw-icon-wrap" style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)' }}>
                <item.icon size={20} style={{ color: '#00E5FF' }} />
            </div>
            <span className="fw-type-badge" style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', color: '#00E5FF' }}>
                {item.category}
            </span>
        </div>
        <h3 className="fw-title">{item.title}</h3>
        <p className="fw-desc">{item.description}</p>
        <div className="fw-tags">
            {item.tags.slice(0, 4).map(t => <span key={t} className="sw-tag">{t}</span>)}
        </div>
    </div>
);

const FeaturedWork = () => (
    <section className="section fw-section">
        <div className="container">
            {/* Header row with CTA links */}
            <div className="fw-header-row">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Work</span>
                    </h2>
                    <p className="section-subtitle">A sample of what's been shipped.</p>
                </motion.div>
                <motion.div
                    className="fw-cta-links"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/projects" className="fw-view-link">
                        All Projects <ArrowRight size={14} />
                    </Link>
                    <Link to="/automations" className="fw-view-link">
                        All Automations <ArrowRight size={14} />
                    </Link>
                </motion.div>
            </div>

            {/* Cards */}
            <div className="fw-grid">
                {featuredSoftware.map((p, i) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <SoftwareCard project={p} />
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <AutomationCard item={featuredAutomation} />
                </motion.div>
            </div>
        </div>
    </section>
);

export default FeaturedWork;
