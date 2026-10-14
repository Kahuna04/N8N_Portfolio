import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable full-bleed hero section for inner pages.
 * Props:
 *   label      – small badge text above title
 *   title      – plain part of the h1
 *   highlight  – gradient part of the h1
 *   description – subtitle paragraph
 *   stats      – optional array of { value, label }
 */
const PageHero = ({ label, title, highlight, description, stats }) => (
    <section className="page-hero">
        {/* Background grid + glows */}
        <div className="page-hero-grid" />
        <div className="page-hero-glow-a" />
        <div className="page-hero-glow-b" />

        <div className="container">
            <motion.div
                className="page-hero-inner"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            >
                {label && <span className="page-hero-label">{label}</span>}

                <h1 className="page-hero-title">
                    {title}{highlight && <> <span className="gradient-text">{highlight}</span></>}
                </h1>

                {description && <p className="page-hero-description">{description}</p>}

                {stats?.length > 0 && (
                    <div className="page-hero-stats">
                        {stats.map((s) => (
                            <div key={s.label} className="page-hero-stat">
                                <span className="stat-value">{s.value}</span>
                                <span className="stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    </section>
);

export default PageHero;
