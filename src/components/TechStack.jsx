import React from 'react';
import { motion } from 'framer-motion';
import {
    Workflow,
    Zap,
    Database,
    Mail,
    MessageSquare,
    FileText,
    Table,
    Brain,
    Code,
    Globe,
    Server,
    Phone,
    ShoppingCart,
    Mic,
    Bot
} from 'lucide-react';

const TechStack = () => {
    const techCategories = [
        {
            name: 'Automation Platforms',
            tools: [
                { name: 'N8N', icon: Workflow, color: '#EA4B71', proficiency: 98 },
                { name: 'Make.com', icon: Zap, color: '#6E3FF3', proficiency: 90 },
                { name: 'Python', icon: Code, color: '#3776AB', proficiency: 88 },
            ]
        },
        {
            name: 'AI & Voice Tools',
            tools: [
                { name: 'ChatGPT', icon: Brain, color: '#10A37F', proficiency: 95 },
                { name: 'Claude', icon: Brain, color: '#D97757', proficiency: 92 },
                { name: 'Gemini', icon: Brain, color: '#4285F4', proficiency: 90 },
                { name: 'OpenAI API', icon: Code, color: '#10A37F', proficiency: 95 },
                { name: 'ElevenLabs', icon: Mic, color: '#7C3AED', proficiency: 85 },
                { name: 'Vapi', icon: Phone, color: '#FF6B6B', proficiency: 88 },
            ]
        },
        {
            name: 'CRM & Database',
            tools: [
                { name: 'HubSpot', icon: Database, color: '#FF7A59', proficiency: 90 },
                { name: 'Airtable', icon: Table, color: '#18BFFF', proficiency: 95 },
                { name: 'GoHighLevel', icon: Zap, color: '#00C389', proficiency: 88 },
                { name: 'Supabase', icon: Database, color: '#3ECF8E', proficiency: 85 },
                { name: 'PostgreSQL', icon: Server, color: '#336791', proficiency: 87 },
            ]
        },
        {
            name: 'Integrations & Web',
            tools: [
                { name: 'Twilio', icon: Phone, color: '#F22F46', proficiency: 90 },
                { name: 'Apify', icon: Globe, color: '#FF9012', proficiency: 85 },
                { name: 'WordPress', icon: FileText, color: '#21759B', proficiency: 88 },
                { name: 'Shopify', icon: ShoppingCart, color: '#96BF48', proficiency: 85 },
                { name: 'Slack', icon: MessageSquare, color: '#4A154B', proficiency: 92 },
            ]
        },
        {
            name: 'Development & Scripting',
            tools: [
                { name: 'JavaScript', icon: Code, color: '#F7DF1E', proficiency: 93 },
                { name: 'Python', icon: Code, color: '#3776AB', proficiency: 90 },
                { name: 'Selenium', icon: Bot, color: '#43B02A', proficiency: 85 },
                { name: 'Playwright', icon: Bot, color: '#2EAD33', proficiency: 82 },
                { name: 'REST APIs', icon: Globe, color: '#61DAFB', proficiency: 95 },
            ]
        }
    ];

    return (
        <section id="techstack" className="section tech-stack-section">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="section-subtitle">
                        Tools and technologies I use to build powerful automation solutions.
                    </p>
                </div>

                {techCategories.map((category, categoryIndex) => (
                    <div key={category.name} className="tech-category">
                        <motion.h3
                            className="tech-category-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            {category.name}
                        </motion.h3>

                        <div className="tech-grid">
                            {category.tools.map((tool, toolIndex) => (
                                <motion.div
                                    key={tool.name}
                                    className="tech-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: (categoryIndex * 0.1) + (toolIndex * 0.05),
                                        duration: 0.3
                                    }}
                                >
                                    <div className="tech-card-content">
                                        <div
                                            className="tech-icon-wrapper"
                                            style={{ '--tech-color': tool.color }}
                                        >
                                            <tool.icon size={32} />
                                        </div>
                                        <h4 className="tech-name">{tool.name}</h4>
                                        <div className="proficiency-bar">
                                            <motion.div
                                                className="proficiency-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tool.proficiency}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (categoryIndex * 0.1) + (toolIndex * 0.05) + 0.3, duration: 0.8 }}
                                                style={{ backgroundColor: tool.color }}
                                            />
                                        </div>
                                        <span className="proficiency-text">{tool.proficiency}%</span>
                                    </div>
                                    <div className="tech-card-glow" style={{ '--glow-color': tool.color }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
