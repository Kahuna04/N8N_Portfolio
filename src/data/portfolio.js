import { FileJson, Share2, Calendar, CreditCard, Users, Database, Bell } from 'lucide-react';

export const portfolioItems = [
    {
        id: 1,
        title: "Automated Client Onboarding",
        description: "Streamlined client onboarding process integrating Google Drive, Notion, Gmail, Slack, and Airtable.",
        tags: ["Google Drive", "Notion", "Gmail", "Slack", "Airtable"],
        category: "Operations",
        icon: Users,
        workflowFile: "Automated Client Onboarding Workflow.json"
    },
    {
        id: 2,
        title: "Content Distribution Pipeline",
        description: "End-to-end content publishing workflow across multiple social platforms.",
        tags: ["Social Media", "Content", "Automation"],
        category: "Marketing",
        icon: Share2,
        workflowFile: "Automated Content Distribution Pipeline.json"
    },
    {
        id: 3,
        title: "Advanced Call Scheduler",
        description: "Complex scheduling system with automated confirmations and calendar management.",
        tags: ["Calendar", "Scheduling", "Email"],
        category: "Productivity",
        icon: Calendar,
        workflowFile: "Call Scheduler — Merged.json"
    },
    {
        id: 4,
        title: "Invoice & Payment Tracker",
        description: "Automated financial tracking and invoice generation system.",
        tags: ["Finance", "Invoicing", "Payments"],
        category: "Finance",
        icon: CreditCard,
        workflowFile: "Invoice & Payment Tracker.json"
    },
    {
        id: 5,
        title: "Lead Capture & CRM Sync",
        description: "Real-time lead capture from forms synced directly to CRM.",
        tags: ["CRM", "Lead Gen", "Sales"],
        category: "Sales",
        icon: Database,
        workflowFile: "Lead Capture & CRM Sync.json"
    },
    {
        id: 6,
        title: "OpenProdkt Leads Management",
        description: "Specialized lead management workflow for OpenProdkt ecosystem.",
        tags: ["Leads", "Management", "Custom"],
        category: "Sales",
        icon: Users,
        workflowFile: "OpenProdkt Leads.json"
    },
    {
        id: 7,
        title: "Smart Scheduling System",
        description: "Integrated scheduling and lead qualification system with automated follow-ups.",
        tags: ["Scheduling", "CRM", "Automation"],
        category: "Sales",
        icon: Calendar,
        workflowFile: "Smart Scheduling with Automated Confirmations and Lead Management.json"
    },
    {
        id: 8,
        title: "Social Mention Tracker",
        description: "Monitor and alert on brand mentions across social media channels.",
        tags: ["Social Listening", "Monitoring", "Alerts"],
        category: "Marketing",
        icon: Bell,
        workflowFile: "Social mention tracker.json"
    }
];

