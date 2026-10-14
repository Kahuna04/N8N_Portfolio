import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu, Workflow, Database, Zap, Bot, Code,
    Server, Monitor, Layers, TestTube, GitBranch, Shield
} from 'lucide-react';

const skills = [
    // Automation
    { name: 'N8N Automation',   icon: Workflow,   color: '#EA4B71', description: 'Complex workflow orchestration, custom nodes, sub-workflows.' },
    { name: 'Make.com',         icon: Zap,        color: '#6E3FF3', description: 'Rapid scenario building, routers, aggregators, and API modules.' },
    { name: 'AI Agents',        icon: Bot,        color: '#10A37F', description: 'LLM-powered agents with tool use, memory, and autonomous reasoning.' },
    // Frontend
    { name: 'React / Next.js',  icon: Monitor,    color: '#00E5FF', description: 'TypeScript SPAs and SSR apps with Redux Toolkit, Chakra UI, Tailwind.' },
    { name: 'TypeScript',       icon: Code,       color: '#3178C6', description: 'Strict typing, generics, utility types, and interface-first design.' },
    // Backend
    { name: 'Laravel',          icon: Server,     color: '#FF2D20', description: 'REST APIs, Spatie permissions, Horizon queues, Passport OAuth.' },
    { name: 'NestJS',           icon: Layers,     color: '#E0234E', description: 'Modular microservices, CASL auth, Bull queues, Prisma ORM.' },
    { name: 'PostgreSQL',       icon: Database,   color: '#336791', description: 'Schema design, advisory locks, migrations, and performance tuning.' },
    // DevOps / Quality
    { name: 'Docker',           icon: Cpu,        color: '#2496ED', description: 'Multi-stage builds, Sail, Compose, and Nginx reverse proxy configs.' },
    { name: 'Testing',          icon: TestTube,   color: '#43B02A', description: 'Cypress E2E, Vitest unit tests, React Testing Library, PHPUnit.' },
    { name: 'CI / CD',          icon: GitBranch,  color: '#F05032', description: 'GitHub Actions, Danger.js PR checks, schema dump optimisation.' },
    { name: 'API Security',     icon: Shield,     color: '#F97316', description: 'OAuth 2.0, JWT, role/permission guards, rate limiting, CORS.' },
];

const Skills = () => (
    <section className="section skills-section">
        <div className="container">
            <motion.div
                className="section-header center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Technical Expertise</h2>
                <p className="section-subtitle">
                    From automation to full-stack, the tools I ship with.
                </p>
            </motion.div>

            <div className="skills-grid-new">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        className="skill-card-new"
                        style={{ '--skill-color': skill.color }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                    >
                        <div className="skill-icon-new" style={{ background: `${skill.color}14`, border: `1px solid ${skill.color}28` }}>
                            <skill.icon size={20} style={{ color: skill.color }} />
                        </div>
                        <div>
                            <h3 className="skill-name-new">{skill.name}</h3>
                            <p className="skill-desc-new">{skill.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
