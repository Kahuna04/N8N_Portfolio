import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioItems } from '../data/portfolio';
import WorkflowVisualization from './WorkflowVisualization';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedWorkflow, setSelectedWorkflow] = useState(null);

    const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

    const filteredItems = activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">Featured Workflows</h2>
                    <p className="section-subtitle">Automated solutions delivering real business value.</p>
                </div>

                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            key={item.id}
                            className="card portfolio-item group"
                            onClick={() => setSelectedWorkflow(item.workflowFile)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-glow" />

                            <div className="card-content">
                                <div className="item-header">
                                    <div className="item-icon">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="item-category">
                                        {item.category}
                                    </span>
                                </div>

                                <h3 className="card-title group-hover-primary">
                                    {item.title}
                                </h3>

                                <p className="card-description clamped">
                                    {item.description}
                                </p>

                                <div className="tags-container">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="view-details">
                                    View Workflow
                                    <ArrowRight size={16} className="arrow-icon" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Workflow Visualization Modal */}
            {selectedWorkflow && (
                <WorkflowVisualization
                    workflowFile={selectedWorkflow}
                    onClose={() => setSelectedWorkflow(null)}
                />
            )}
        </section>
    );
};

export default Portfolio;
