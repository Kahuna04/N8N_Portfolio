import React from 'react';
import PageHero from '../components/PageHero';
import SoftwareProjects from '../components/SoftwareProjects';
import Skills from '../components/Skills';
import useSEO from '../hooks/useSEO';

const stats = [
    { value: '10+', label: 'Products Shipped' },
    { value: '5',   label: 'Frameworks' },
    { value: '2',   label: 'Fintech Platforms' },
    { value: '100%', label: 'Production-Ready' },
];

const ProjectsPage = () => {
    useSEO({
        title: 'Projects | Damilare Ogundele — Full-Stack Engineer',
        description: 'Browse 10+ production software projects by Damilare Ogundele including fintech APIs built with Laravel and NestJS, React and Next.js SPAs, CBT platforms, and merchant dashboards.',
    });

    return (
        <div className="page-wrapper">
            <PageHero
                label="Software Engineering"
                title="Products I've"
                highlight="Engineered"
                description="Full-stack applications and APIs shipped for real production environments. Fintech platforms, school portals, merchant dashboards, field officer tools, and payment microservices."
                stats={stats}
            />
            <SoftwareProjects showHeader={false} />
            <Skills />
        </div>
    );
};

export default ProjectsPage;
