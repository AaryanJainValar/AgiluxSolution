import React, { useEffect } from "react";
import "./PerticularService.css";
import { useParams, useNavigate } from "react-router-dom";
import Three60MarketingData from "../360Marketing/360MarketingData";
import OtherRoutesCommonHeader from "../OtherRoutesCommonHeader/OtherRoutesCommonHeader";

const PerticularService = () => {
    const { serviceName } = useParams();
    const navigate = useNavigate();

    // Function to create URL-friendly slug from service title (same as in Three60Marketing)
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    // Find the service matching the URL parameter
    const service = Three60MarketingData.find(
        (item) => createSlug(item.title) === serviceName
    );

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceName]);

    // If service not found, show error or redirect
    if (!service) {
        return (
            <div>
                <OtherRoutesCommonHeader
                    title="Service Not Found"
                    image="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                />
                <div className="Container SectionTopPadding text-center">
                    <h2>Service Not Found</h2>
                    <p>The service you're looking for doesn't exist.</p>
                    <button className="Button" onClick={() => navigate('/services')}>
                        <span>Back to Services</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="PerticularServiceContainer">
            <OtherRoutesCommonHeader
                // title={service.title}
                image={service.image}
            />
            <div className="Container SectionTopPadding PaddingbottomMedium">
                <div className="PerticularServiceContent">
                    <h3 className="ColorBlack">{service.title}</h3>
                    {/* <h3 className="ColorBlack">{service.title}</h3> */}
                    <div className="Max800" style={{ margin: '20px auto' }}>
                        {service.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerticularService;
