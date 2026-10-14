import React from 'react';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';
import useSEO from '../hooks/useSEO';

const ContactPage = () => {
    useSEO({
        title: 'Contact | Damilare Ogundele — Hire a Full-Stack Engineer',
        description: 'Get in touch with Damilare Ogundele for freelance, contract, or full-time opportunities. Available for full-stack development, automation systems, and API integration projects.',
    });

    return (
        <div className="page-wrapper">
            <PageHero
                label="Let's Work Together"
                title="Start a"
                highlight="Conversation"
                description="Open to freelance, contract, and full-time opportunities. Whether it's a product to build, an API to integrate, or a workflow to automate, let's talk."
            />
            <Contact />
        </div>
    );
};

export default ContactPage;
