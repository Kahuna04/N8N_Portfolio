import { useEffect } from 'react';

/**
 * Updates document.title and meta[name="description"] for each page.
 * Lightweight alternative to react-helmet for a simple SPA portfolio.
 *
 * @param {string} title       - Full page title shown in browser tab
 * @param {string} description - Page-specific meta description (≤ 160 chars)
 */
const useSEO = ({ title, description }) => {
    useEffect(() => {
        document.title = title;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }
    }, [title, description]);
};

export default useSEO;
