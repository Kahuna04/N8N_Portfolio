import React from 'react';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio';
import useSEO from '../hooks/useSEO';

const stats = [
    { value: '9+',  label: 'Workflows Built' },
    { value: '5+',  label: 'Tools Connected' },
    { value: 'N8N', label: '& Make.com' },
    { value: 'AI',  label: 'Agents Included' },
];

const AutomationsPage = () => {
    useSEO({
        title: 'Automation Workflows | Damilare Ogundele',
        description: 'N8N and Make.com workflow portfolio by Damilare Ogundele. Custom automation systems connecting APIs, AI agents, CRMs, and business tools to eliminate manual work.',
    });

    return (
        <div className="page-wrapper">
            <PageHero
                label="Automation & AI"
                title="Intelligent"
                highlight="Workflow Portfolio"
                description="N8N and Make.com systems connecting APIs, AI agents, and business tools. Built to replace manual work and run reliably in production, not just in demos."
                stats={stats}
            />
            <Portfolio showHeader={false} />
        </div>
    );
};

export default AutomationsPage;
