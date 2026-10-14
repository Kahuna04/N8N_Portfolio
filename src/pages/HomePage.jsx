import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import WhatIBuild from '../components/WhatIBuild';
import FeaturedWork from '../components/FeaturedWork';
import useSEO from '../hooks/useSEO';

const HomePage = () => {
    useSEO({
        title: 'Damilare Ogundele | Full-Stack Engineer & Automation Specialist',
        description: 'Damilare Ogundele builds production-ready web applications and intelligent automation systems using React, Next.js, Laravel, NestJS, N8N, and Make.com.',
    });

    return (
        <>
            <Hero />
            <TechStack />
            <WhatIBuild />
            <FeaturedWork />
        </>
    );
};

export default HomePage;
