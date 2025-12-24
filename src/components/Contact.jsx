import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">Ready to Automate?</h2>
                    <p className="section-subtitle">
                        Let's discuss how we can streamline your operations and save hours of manual work.
                    </p>
                </div>

                <div className="contact-grid">
                    <ContactCard
                        icon={<Mail size={24} />}
                        title="Email Me"
                        content="ogundele.damilare4@gmail.com"
                        subContent="dmlr00@outlook.com"
                        href="mailto:ogundele.damilare4@gmail.com"
                    />
                    <ContactCard
                        icon={<Linkedin size={24} />}
                        title="Connect"
                        content="LinkedIn Profile"
                        subContent="Damilare Ogundele"
                        href="https://www.linkedin.com/in/damilare-ogundele/"
                    />
                    <ContactCard
                        icon={<Phone size={24} />}
                        title="WhatsApp"
                        content="08070859502"
                        subContent="Chat with me"
                        href="https://wa.me/2348070859502"
                    />
                </div>
            </div>
        </section>
    );
};

const ContactCard = ({ icon, title, content, subContent, href }) => (
    <a
        href={href}
        className="card contact-card group"
    >
        <div className="icon-box contact-icon">
            {icon}
        </div>
        <h3 className="card-title contact-title">{title}</h3>
        <p className="contact-content">{content}</p>
        {subContent && <p className="contact-sub">{subContent}</p>}
    </a>
);

export default Contact;
