import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div
            className={`faq-item ${isOpen ? 'open' : ''}`}
            onClick={toggle}
            style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
            }}
        >
            <div
                className="faq-question"
                style={{
                    padding: '24px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: '500',
                    fontSize: '1.125rem',
                    color: isOpen ? 'var(--primary)' : 'var(--text-main)',
                    transition: 'color 0.3s ease'
                }}
            >
                <span>{question}</span>
                <span
                    style={{
                        fontSize: '1.5rem',
                        lineHeight: 1,
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        color: 'var(--primary)'
                    }}
                >
                    +
                </span>
            </div>
            <div
                className="faq-answer"
                style={{
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.3s ease',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    paddingBottom: isOpen ? '24px' : '0'
                }}
            >
                {answer}
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What are AI agents?",
            answer: "AI agents are autonomous software programs that can perform tasks, make decisions, and take actions without constant human oversight. Unlike simple chatbots, they can reason, plan, and execute complex workflows to achieve specific goals for your business."
        },
        {
            question: "How can AI automation benefit my business?",
            answer: "Automation drastically reduces time spent on repetitive tasks, lowers operational costs, and minimizes human error. By handling the mundane work, it frees your team to focus on high-value strategic initiatives that drive growth and innovation."
        },
        {
            question: "Will AI replace my current workforce?",
            answer: "No, the primary goal of our AI solutions is augmentation, not replacement. We design agents to handle repetitive, low-value tasks like data entry or initial support queries, allowing your employees to focus on creative, strategic, and interpersonal work."
        },
        {
            question: "Is my data safe with AI automation?",
            answer: "Absolutely. Security is our top priority. We use enterprise-grade encryption and strict data privacy protocols. For sensitive use cases, we can implement local or private models to ensure your proprietary data never leaves your secure infrastructure."
        },
        {
            question: "How long does it take to implement a solution?",
            answer: "Timelines vary based on complexity. Simple workflow automations can be live in a few days, while complex, multi-agent systems typically take 2-4 weeks. We start with a thorough audit to provide you with a precise roadmap and delivery schedule."
        },
        {
            question: "What industries do you specialize in?",
            answer: "We build tailored automation solutions for various sectors including e-commerce, customer support, lead generation, and back-office operations. The core principles of efficiency and autonomous agency are universal and can be adapted to any industry."
        }
    ];

    return (
        <section className="section faq-section" id="faq">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to know about our AI agents and automation services.
                    </p>
                </div>

                <div
                    className="faq-list"
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'var(--surface-color)',
                        borderRadius: 'var(--radius-md)',
                        padding: '32px',
                        border: '1px solid var(--border-color, rgba(255,255,255,0.1))'
                    }}
                >
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            toggle={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
