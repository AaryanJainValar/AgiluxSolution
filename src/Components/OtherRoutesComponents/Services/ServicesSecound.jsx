import React from "react";
import "../360Marketing/Three60Marketing.css";
import Three60MarketingData from "../360Marketing/360MarketingData";
// import NavigationData from "../../NavigationBar/NavigationData";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdPhoneIphone, MdWeb, MdCampaign, MdPeopleAlt, MdContentPaste, MdSettings, MdMail, MdList } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { GrVmMaintenance } from "react-icons/gr";
// import { FaCrown } from "react-icons/fa6";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import "./ServicesSecound.css";




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

        if (key.includes("app-development"))
            return { icon: <MdPhoneIphone />, cls: "icon-app" };

        if (key.includes("seo"))
            return { icon: <BiSearch />, cls: "icon-seo" };

        if (key.includes("website-development"))
            return { icon: <MdWeb />, cls: "icon-web" };

        if (key.includes("digital-marketing"))
            return { icon: <MdCampaign />, cls: "icon-marketing" };

        if (key.includes("ecommerce"))
            return { icon: <FiShoppingCart />, cls: "icon-ecomm" };

        if (key.includes("listing"))
            return { icon: <MdList />, cls: "icon-tool" };

        if (key.includes("crm"))
            return { icon: <MdPeopleAlt />, cls: "icon-crm" };

        if (key.includes("cms"))
            return { icon: <MdContentPaste />, cls: "icon-cms" };

        if (key.includes("erp"))
            return { icon: <MdSettings />, cls: "icon-erp" };

        // ✅ FIXED
        if (key.includes("branding"))
            return { icon: <MdOutlineBrandingWatermark />, cls: "icon-branding" };

        // ✅ FIXED
        if (key.includes("maintenance") || key.includes("support"))
            return { icon: <GrVmMaintenance />, cls: "icon-support" };

        if (key.includes("outreach") || key.includes("email"))
            return { icon: <MdMail />, cls: "icon-mail" };

        if (key.includes("Design") || key.includes("logo"))
            return { icon: <FaCrown />, cls: "icon-logo" };

        return { icon: <MdWeb />, cls: "icon-default" };
    };
    return (
        <div>

            <div className="Container SectionTopPadding PaddingbottomMedium">
                <div className="ServicesContainersection" data-aos="fade-up">
                    <div className="ServicesIntroContent">
                        <h2 className="ServicesMainTitle" style={{letterSpacing:'0.5px'}}>Comprehensive <span style={{color:"#EAB236"}}>Digital Solutions</span> for Your Business</h2>
                        <p className="ServicesDescription">
                            At <strong>Agilux Solutions</strong>, we deliver strategic, results-driven digital services designed to transform your business and drive sustainable growth.
                        </p>
                        {/* <div className="ServicesHighlights">
                            <div className="HighlightItem">
                                <h4>✓ Strategic Planning</h4>
                                <p>Customized approaches aligned with your business objectives</p>
                            </div>
                            <div className="HighlightItem">
                                <h4>✓ Expert Execution</h4>
                                <p>Professional implementation with precision and attention to detail</p>
                            </div>
                            <div className="HighlightItem">
                                <h4>✓ Proven Results</h4>
                                <p>Maximum ROI and customer satisfaction across all service verticals</p>
                            </div>
                        </div> */}
                        <p className="ServicesClosing">
                            Whether you're a startup looking to establish your digital presence, a growing business needing scalable solutions, or an established enterprise requiring specialized support – <Link to="/career" className="AgiluxCareerLink"><strong>Agilux Solutions</strong></Link> is your trusted partner for success. We combine innovation, technology, and customer-centric approach to deliver services that drive real business impact.
                        </p>
                    </div>
                </div>
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
