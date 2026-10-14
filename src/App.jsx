import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AutomationsPage from './pages/AutomationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const pageVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Routes location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/automations" element={<AutomationsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
};

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navbar />
                <main>
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
