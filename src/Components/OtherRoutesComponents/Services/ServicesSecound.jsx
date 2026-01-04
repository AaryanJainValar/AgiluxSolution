import React from "react";
import "../360Marketing/Three60Marketing.css";
import Three60MarketingData from "../360Marketing/360MarketingData";
// import NavigationData from "../../NavigationBar/NavigationData";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdPhoneIphone, MdWeb, MdCampaign, MdShoppingCart, MdPeopleAlt, MdContentPaste, MdSettings, MdSupportAgent } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { FiPenTool } from "react-icons/fi";
import { FaCrown } from "react-icons/fa6";

const ServicesSecound = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const onServicesItemsRoute = location && location.pathname && location.pathname.startsWith('/servicesitems');

    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };
    const getIconInfo = (title) => {
        const key = createSlug(title);
        if (key.includes("app-development")) return { icon: <MdPhoneIphone />, cls: "icon-app" };
        if (key.includes("seo-services")) return { icon: <BiSearch />, cls: "icon-seo" };
        if (key.includes("website-development")) return { icon: <MdWeb />, cls: "icon-web" };
        if (key.includes("digital-marketing")) return { icon: <MdCampaign />, cls: "icon-marketing" };
        if (key.includes("e-commerce-listing") || key.includes("ecommerce-development")) return { icon: <MdShoppingCart />, cls: "icon-ecomm" };
        if (key.includes("crm-software-development")) return { icon: <MdPeopleAlt />, cls: "icon-crm" };
        if (key.includes("cms-development")) return { icon: <MdContentPaste />, cls: "icon-cms" };
        if (key.includes("erp-software-development")) return { icon: <MdSettings />, cls: "icon-erp" };
        if (key.includes("logo-design")) return { icon: <FaCrown />, cls: "icon-logo" };
        if (key.includes("branding-design")) return { icon: <FiPenTool />, cls: "icon-branding" };
        if (key.includes("maintenance-support")) return { icon: <MdSupportAgent />, cls: "icon-support" };
        return { icon: <MdWeb />, cls: "icon-default" };
    };
    return (
        <div>
           
            <div className="Container SectionTopPadding PaddingbottomMedium">
                <div className="AllServicesGrid">
                    {Three60MarketingData.map((item, index) => (
                        <div className="AllServiceCard" key={index}>
                            <div className="AllServiceHeader">
                                <div className={`AllServiceIcon ${getIconInfo(item.title).cls}`}>
                                    {getIconInfo(item.title).icon}
                                </div>
                                <div className="AllServiceIndex">{String(index + 1).padStart(2, '0')}</div>
                                <div className="AllServiceDivider"></div>
                            </div>
                            <div className="AllServiceBody">
                                <h4 style={{ fontSize: "20px", letterSpacing: "0.1px" }}>{item.title}</h4>
                                <p style={{ letterSpacing: "0.5px" }}>{item.peregraph}</p>
                            </div>
                            <div className="AllServiceFooter">
                                <Link
                                    to={`/servicesitems/${createSlug(item.title)}`}
                                    className="ReadMoreLink"
                                    aria-label={`Read more about ${item.title}`}
                                >
                                    <span>Read more</span>
                                    <span className="Arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSecound;
