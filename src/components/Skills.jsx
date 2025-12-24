import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Database, Zap, Bot, Code } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'N8N Automation', icon: Workflow, description: 'Complex workflow orchestration and custom node development.' },
        { name: 'Make.com', icon: Zap, description: 'Rapid scenario building and integrations.' },
        { name: 'AI Agents', icon: Bot, description: 'Building autonomous agents with LangChain and vector databases.' },
        { name: 'API Integration', icon: Code, description: 'Connecting disparate services via REST and GraphQL.' },
        { name: 'Database Design', icon: Database, description: 'Structuring data flow for scale and reliability.' },
        { name: 'System Architecture', icon: Cpu, description: 'Designing robust automation infrastructure.' },
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">Technical Expertise</h2>
                    <p className="section-subtitle">Tools and technologies I use to build automation.</p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card skill-card group"
                        >
                            <div className="icon-box">
                                <skill.icon size={24} />
                            </div>
                            <h3 className="card-title">{skill.name}</h3>
                            <p className="card-description">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
