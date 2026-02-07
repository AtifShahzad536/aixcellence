import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToSection() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Map paths to element IDs
        const pathMap: { [key: string]: string } = {
            '/platform': 'platform',
            '/features': 'features',
            '/solutions': 'solutions',
            '/services': 'solutions',
            '/about': 'about',
            '/guide': 'guide',
            '/faq': 'faq',
            '/aix-one': 'platform',
            '/cases': 'solutions' // Or portfolio if mapped
        };

        const targetId = pathMap[pathname];
        if (targetId) {
            // Short delay to ensure standard React mounting is finished
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [pathname]);

    return null;
}
