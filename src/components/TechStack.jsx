import React from 'react';
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
    // Flattened tools array
    const tools = [
        { name: 'N8N', icon: Workflow, color: '#EA4B71' },
        { name: 'Make.com', icon: Zap, color: '#6E3FF3' },
        { name: 'Python', icon: Code, color: '#3776AB' },
        { name: 'ChatGPT', icon: Brain, color: '#10A37F' },
        { name: 'Claude', icon: Brain, color: '#D97757' },
        { name: 'Gemini', icon: Brain, color: '#4285F4' },
        { name: 'OpenAI', icon: Code, color: '#10A37F' },
        { name: 'ElevenLabs', icon: Mic, color: '#7C3AED' },
        { name: 'Vapi', icon: Phone, color: '#FF6B6B' },
        { name: 'HubSpot', icon: Database, color: '#FF7A59' },
        { name: 'Airtable', icon: Table, color: '#18BFFF' },
        { name: 'GoHighLevel', icon: Zap, color: '#00C389' },
        { name: 'Supabase', icon: Database, color: '#3ECF8E' },
        { name: 'PostgreSQL', icon: Server, color: '#336791' },
        { name: 'Twilio', icon: Phone, color: '#F22F46' },
        { name: 'Apify', icon: Globe, color: '#FF9012' },
        { name: 'WordPress', icon: FileText, color: '#21759B' },
        { name: 'Shopify', icon: ShoppingCart, color: '#96BF48' },
        { name: 'Slack', icon: MessageSquare, color: '#4A154B' },
        { name: 'JavaScript', icon: Code, color: '#F7DF1E' },
        { name: 'Selenium', icon: Bot, color: '#43B02A' },
        { name: 'Playwright', icon: Bot, color: '#2EAD33' },
        { name: 'REST APIs', icon: Globe, color: '#61DAFB' },
    ];

    return (
        <section id="techstack" className="section tech-stack-section">
            <div className="container-fluid"> {/* Changed to fluid for full width marquee */}
                <div className="section-header center">
                    <h2 className="section-title">Tech Stack</h2>
                </div>

                <div className="marquee-container">
                    <div className="marquee-content">
                        {/* Render tools twice for seamless loop */}
                        {[...tools, ...tools].map((tool, index) => (
                            <div
                                key={`${tool.name}-${index}`}
                                className="tech-pill"
                                style={{ '--tech-color': tool.color }}
                            >
                                <tool.icon size={20} className="tech-icon" />
                                <span className="tech-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
