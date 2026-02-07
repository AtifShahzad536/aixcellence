import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Force scroll to top on mount and pathname change
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Use instant for immediate reset
        });

        // Secondary backup for certain browsers/race conditions
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
