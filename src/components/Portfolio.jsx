import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { portfolioItems } from '../data/portfolio';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

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
                        >
                            <div className="card-glow" />

                            <div className="card-content">
                                {item.image && (
                                    <div
                                        className="item-image-container clickable"
                                        onClick={() => setSelectedImage(item)}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="item-image"
                                            loading="lazy"
                                        />
                                        <div className="image-overlay">
                                            <span>View Workflow</span>
                                        </div>
                                    </div>
                                )}

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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="lightbox-close"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="lightbox-image"
                            />
                            <div className="lightbox-caption">
                                <h3>{selectedImage.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
