import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { softwareProjects } from '../data/software-projects';

const WHATSAPP_NUMBER = '2348070859502';

const getWhatsAppLink = (projectTitle) => {
    const message = `Hi Damilare! I saw your "${projectTitle}" project on your portfolio and I'd love to discuss a similar solution for my business. Can we talk?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const typeBadgeColors = {
    Backend: { bg: 'rgba(255, 45, 32, 0.12)', border: 'rgba(255, 45, 32, 0.35)', color: '#FF6B5B' },
    Frontend: { bg: 'rgba(0, 229, 255, 0.1)', border: 'rgba(0, 229, 255, 0.3)', color: '#00E5FF' },
    'Full-Stack': { bg: 'rgba(123, 97, 255, 0.12)', border: 'rgba(123, 97, 255, 0.35)', color: '#A78BFF' },
};

const ProjectCard = ({ project, index }) => {
    const [expanded, setExpanded] = useState(false);
    const badge = typeBadgeColors[project.type] || typeBadgeColors['Full-Stack'];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="sw-card"
            style={{ '--project-color': project.color }}
        >
            {/* Accent line */}
            <div className="sw-card-accent" />

            <div className="sw-card-inner">
                {/* Header */}
                <div className="sw-card-header">
                    <div className="sw-icon-wrap" style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}>
                        <project.icon size={22} style={{ color: project.color }} />
                    </div>
                    <span
                        className="sw-type-badge"
                        style={{ background: badge.bg, border: `1px solid ${badge.border}`, color: badge.color }}
                    >
                        {project.type}
                    </span>
                </div>

                <h3 className="sw-card-title">{project.title}</h3>
                <p className="sw-card-description">{project.description}</p>

                {/* Tags */}
                <div className="sw-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="sw-tag">{tag}</span>
                    ))}
                </div>

                {/* Expandable highlights */}
                <button
                    className="sw-expand-btn"
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                >
                    <span>{expanded ? 'Hide Highlights' : 'View Highlights'}</span>
                    {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <AnimatePresence>
                    {expanded && (
                        <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="sw-highlights"
                        >
                            {project.highlights.map((h, i) => (
                                <li key={i} className="sw-highlight-item">
                                    <CheckCircle2 size={14} style={{ color: project.color, flexShrink: 0, marginTop: '2px' }} />
                                    <span>{h}</span>
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                {/* Actions */}
                <div className="sw-card-actions">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sw-action-btn sw-action-live"
                        >
                            <ExternalLink size={14} />
                            <span>Live Site</span>
                        </a>
                    )}
                    <a
                        href={getWhatsAppLink(project.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sw-action-btn sw-action-wa"
                    >
                        <MessageCircle size={14} />
                        <span>Discuss a Project</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const SoftwareProjects = ({ showHeader = true }) => {
    const [activeType, setActiveType] = useState('All');
    const types = ['All', 'Backend', 'Frontend', 'Full-Stack'];

    const filtered = activeType === 'All'
        ? softwareProjects
        : softwareProjects.filter((p) => p.type === activeType);

    return (
        <section id="software" className="section sw-section">
            <div className="container">
                {showHeader && (
                    <motion.div
                        className="section-header center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="sw-section-label">Software Engineering</span>
                        <h2 className="section-title">
                            Products I've <span className="gradient-text">Engineered</span>
                        </h2>
                        <p className="section-subtitle">
                            Full-stack applications and APIs built for real-world production, from fintech backends to school platforms.
                        </p>
                    </motion.div>
                )}

                {/* Filter Tabs */}
                <div className="sw-filter-row">
                    {types.map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={`sw-filter-btn ${activeType === type ? 'active' : ''}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="sw-grid">
                    <AnimatePresence>
                        {filtered.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SoftwareProjects;
