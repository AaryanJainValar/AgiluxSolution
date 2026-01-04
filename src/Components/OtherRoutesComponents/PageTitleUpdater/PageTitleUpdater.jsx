import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = "Agilux Solution | Innovative Digital Marketing & Web Development";

        if (path === "/") {
            title = "Agilux Solution | Home";
        } else if (path === "/about-agilux") {
            title = "About Agilux | Leading Digital Agency";
        } else if (path === "/services") {
            title = "Our Services | Strategic Digital Solutions";
        } else if (path === "/servicesitems") {
            title = "All Services | Strategic Digital Solutions";
        } else if (path.startsWith("/services/") || path.startsWith("/servicesitems/")) {
            // Extract service name from URL or params
            const serviceName = path.split('/').pop()?.replace(/-/g, ' ');
            const capitalizedServiceName = serviceName
                ? serviceName.charAt(0).toUpperCase() + serviceName.slice(1)
                : "Service Detail";
            title = `${capitalizedServiceName} | Agilux Solution`;
        } else if (path === "/all-clients") {
            title = "Our Partners & Clients | Agilux Solution";
        } else if (path === "/career") {
            title = "Join Our Team | Career Opportunities at Agilux";
        }

        document.title = title;

        // Also scroll to top on route change which is a common pattern when switching tabs
        window.scrollTo(0, 0);

    }, [location]);

    return null;
};

export default PageTitleUpdater;
