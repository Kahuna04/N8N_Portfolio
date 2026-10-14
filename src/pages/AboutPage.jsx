import React from 'react';
import PageHero from '../components/PageHero';
import About from '../components/About';
import FAQ from '../components/FAQ';
import useSEO from '../hooks/useSEO';

const AboutPage = () => {
    useSEO({
        title: 'About | Damilare Ogundele — Engineer & Automation Specialist',
        description: 'Learn about Damilare Ogundele, a Full-Stack Engineer with 3+ years building production fintech apps, school platforms, and intelligent automation systems with N8N and Make.com.',
    });

    return (
        <div className="page-wrapper">
            <PageHero
                label="About Me"
                title="Engineer."
                highlight="Builder. Automator."
                description="Full-stack engineer who ships production software and intelligent automation. From fintech APIs and React SPAs to AI-powered N8N pipelines."
            />
            <About />
            <FAQ />
        </div>
    );
};

export default AboutPage;
