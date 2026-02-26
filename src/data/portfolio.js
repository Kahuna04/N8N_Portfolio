import { FileJson, Share2, Calendar, CreditCard, Users, Database, Bell, Mail } from 'lucide-react';

export const portfolioItems = [
    {
        id: 1,
        title: "Automated Client Onboarding",
        description: "Streamlined client onboarding process integrating Google Drive, Notion, Gmail, Slack, and Airtable.",
        tags: ["Google Drive", "Notion", "Gmail", "Slack", "Airtable"],
        category: "Operations",
        icon: Users,
        workflowFile: "Automated Client Onboarding Workflow.json",
        image: "/User Registration with Notification.jpg"
    },
    {
        id: 2,
        title: "Cold Email Campaign with LinkedIn Enrichment",
        description: "Lead generation and cold email campaign with LinkedIn enrichment.",
        tags: ["Lead Gen", "Cold Emailing", "AI Agents", "Automation"],
        category: "Sales",
        icon: Mail,
        workflowFile: "Cold Email Campaign with LinkedIn Enrichment.json",
        image: "/Cold Email Campaign with LinkedIn Enrichment.jpg"
    },
    {
        id: 3,
        title: "Content Distribution Pipeline",
        description: "End-to-end content publishing workflow across multiple social platforms.",
        tags: ["Social Media", "Content", "Automation"],
        category: "Marketing",
        icon: Share2,
        workflowFile: "Automated Content Distribution Pipeline.json",
        image: "/Social mention tracker.jpg" // Fitting placeholder as content distribution often relates to tracking
    },
    {
        id: 4,
        title: "Advanced Call Scheduler",
        description: "Complex scheduling system with automated confirmations and calendar management.",
        tags: ["Calendar", "Scheduling", "Email"],
        category: "Productivity",
        icon: Calendar,
        workflowFile: "Call Scheduler — Merged.json",
        image: "/Call Scheduler.jpg"
    },
    {
        id: 5,
        title: "Invoice & Payment Tracker",
        description: "Automated financial tracking and invoice generation system.",
        tags: ["Finance", "Invoicing", "Payments"],
        category: "Finance",
        icon: CreditCard,
        workflowFile: "Invoice & Payment Tracker.json",
        image: "/Invoice and Payment Tracker.jpg"
    },
    {
        id: 6,
        title: "Lead Capture & CRM Sync",
        description: "Real-time lead capture from forms synced directly to CRM.",
        tags: ["CRM", "Lead Gen", "Sales"],
        category: "Sales",
        icon: Database,
        workflowFile: "Lead Capture & CRM Sync.json",
        image: "/Lead Capture and CRM sync.jpg"
    },
    {
        id: 7,
        title: "OpenProdkt Leads Management",
        description: "Specialized lead management workflow for OpenProdkt ecosystem.",
        tags: ["Leads", "Management", "Custom"],
        category: "Sales",
        icon: Users,
        workflowFile: "OpenProdkt Leads.json",
        image: "/OpenProdkt Leads.jpg"
    },
    {
        id: 8,
        title: "Smart Scheduling System",
        description: "Integrated scheduling and lead qualification system with automated follow-ups.",
        tags: ["Scheduling", "CRM", "Automation"],
        category: "Sales",
        icon: Calendar,
        workflowFile: "Smart Scheduling with Automated Confirmations and Lead Management.json",
        image: "/Smart Scheduling with automated confirmation.jpg"
    },
    {
        id: 9,
        title: "Social Mention Tracker",
        description: "Monitor and alert on brand mentions across social media channels.",
        tags: ["Social Listening", "Monitoring", "Alerts"],
        category: "Marketing",
        icon: Bell,
        workflowFile: "Social mention tracker.json",
        image: "/Social mention tracker.jpg"
    }
];

