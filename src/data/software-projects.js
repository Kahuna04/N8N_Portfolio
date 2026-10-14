import {
    Server,
    Monitor,
    BookOpen,
    DollarSign,
    LayoutDashboard,
    ShieldCheck,
} from 'lucide-react';

export const softwareProjects = [
    {
        id: 'sw-1',
        title: 'Fintech Credit Platform — Backend API',
        type: 'Backend',
        description:
            'Production-grade REST API powering a fintech lending platform. Architected a dual authorization system (Spatie roles + legacy user types), integrated a payment gateway, and built a real-time service health monitoring API with modular checks, uptime snapshots, and auto-incident detection.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Horizon', 'Paystack', 'Passport OAuth', 'Docker'],
        icon: Server,
        color: '#FF2D20',
        highlights: [
            'Dual auth: Spatie roles/permissions + legacy user type system for seamless backward-compatibility migration',
            'Health status API monitoring 7 services (DB, Redis, Queue, Mail, Payments, Auth, API) with 45s cache + auto-incident detection',
            'Laravel Horizon + queue worker setup for high-throughput background job processing',
            'Docker/Sail multi-environment setup with CI schema dump cutting migration time by 75%',
        ],
        liveUrl: null,
        confidential: true,
    },
    {
        id: 'sw-2',
        title: 'Field Credit Officer App',
        type: 'Frontend',
        description:
            'Enterprise React + TypeScript SPA for on-field credit officers managing loan applications, guarantor onboarding, and field assessments. Features a fine-grained role/permission UI layer, video evidence capture, and a fully E2E-tested workflow.',
        tags: ['React', 'TypeScript', 'Redux Toolkit', 'Chakra UI', 'Cypress', 'Vite', 'Docker', 'Nginx'],
        icon: Monitor,
        color: '#00E5FF',
        highlights: [
            'Custom useAuthorize hook + Can component for declarative permission-based UI rendering',
            'Guarantor video capture, playback, and evidence management for field loan verification',
            'RTK Query service layer with scoped endpoint builders for type-safe API integration',
            'Cypress E2E + Vitest unit test suite with Danger.js PR automation',
        ],
        liveUrl: null,
        confidential: true,
    },
    {
        id: 'sw-3',
        title: 'Dammic Model Schools — CBT Portal',
        type: 'Full-Stack',
        description:
            'Full-stack Computer-Based Testing platform and school web portal built with Next.js 15. Features role-based dashboards for admins, staff, and students, advanced anti-cheating controls, Word/Excel question import, and a Sanity CMS-powered public school portal.',
        tags: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Sanity CMS', 'Tailwind CSS'],
        icon: BookOpen,
        color: '#7B61FF',
        highlights: [
            'Anti-cheat engine: full-screen enforcement, 3-strike auto-submit, question & option randomization per student',
            'Word/DOCX + Excel bulk question import pipeline for staff exam creation',
            'Reusable DataTable<T> component with real-time search, role, class, and status filters',
            'Sanity CMS Studio for school admissions, academics, news, and gallery pages',
        ],
        liveUrl: null,
        confidential: false,
    },
    {
        id: 'sw-4',
        title: 'Fintech Payment Microservice',
        type: 'Backend',
        description:
            'High-throughput NestJS microservice powering financial transactions for a fintech platform. Implements a global advisory locking framework to prevent deadlocks across concurrent financial writes, with Bull queues, Redis caching, AWS S3, Firebase push, and Sentry error monitoring.',
        tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Bull', 'AWS S3', 'Firebase', 'Docker'],
        icon: DollarSign,
        color: '#3ECF8E',
        highlights: [
            'Global advisory locking policy (lockEntitiesInOrder) for deterministic deadlock-free concurrent financial writes',
            'CASL-based authorization with fine-grained ability definitions per user role across all financial flows',
            'Bull Board job queue monitoring with retry, backoff, and failure tracking dashboards',
            'Puppeteer-based PDF generation, QR code issuance, and Cloudinary media management',
        ],
        liveUrl: null,
        confidential: true,
    },
    {
        id: 'sw-5',
        title: 'Merchant Management Dashboard',
        type: 'Frontend',
        description:
            'Next.js 15 portal for merchants to manage stores, track transactions, process transfers, and manage staff roles. Features permission-based navigation where sidebar items are dynamically rendered based on the authenticated user\'s API-fetched role permissions.',
        tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Cloudinary', 'pnpm'],
        icon: LayoutDashboard,
        color: '#F97316',
        highlights: [
            'Dynamic permission-filtered sidebar with nav items visible only for permissions the authenticated user holds',
            'Zustand global auth + permission store with flattenPermissions utility for real-time access control',
            'Product context switcher for navigating between merchant portal and business product screens',
            'Stores, Transactions, Transfers, Staff, and Settings modules with Cloudinary image handling',
        ],
        liveUrl: null,
        confidential: true,
    },
    {
        id: 'sw-6',
        title: 'Fintech Super-Admin Platform',
        type: 'Frontend',
        description:
            'Comprehensive Next.js 15 super-admin dashboard for a fintech platform, covering customer management, merchant oversight, transactions, deposits, orders, complaints, push notifications, reports, staff, roles, and system settings, all gated by a granular permissions system.',
        tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Cloudinary', 'pnpm'],
        icon: ShieldCheck,
        color: '#A78BFA',
        highlights: [
            '12-module admin dashboard: Customers, Merchants, Transactions, Deposits, Orders, Complaints, Notifications, Reports, Settings, Roles, Staff',
            'Permission-based route access with per-module checks (READ_USERS, READ_TRANSACTION, READ_ORDER, READ_COMPLAINT, etc.)',
            'Push notification management system for broadcasting alerts to all platform users',
            'Shared Zustand auth store and permission utilities across the product ecosystem',
        ],
        liveUrl: null,
        confidential: true,
    },
];
