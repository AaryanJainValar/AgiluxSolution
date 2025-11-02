import React, { useState } from "react";
import "./AllClients.css";
import OtherRoutesCommonHeader from "../OtherRoutesCommonHeader/OtherRoutesCommonHeader";
import { Row, Col } from "antd";
import logos from "../OurPartnersClients/OurPartnersData";
import CommonHeader from "../CommonHeader/CommonHeader";

const AllClients = () => {
    const [visibleLogos, setVisibleLogos] = useState(24); // Initially show 20 logos

    const loadMoreLogos = () => {
        setVisibleLogos(prev => prev + 20); // Load 10 more logos on each click
    };

    const hasMoreLogos = visibleLogos < logos.length;

    return (
        <div className="AllClientsContainer">
            <OtherRoutesCommonHeader
                title=""
                image={"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2084"}
            />
            <div className="Container SectionTopPadding PaddingbottomMedium">
                <div className="AllClientsContent">

                    <div className="AllClientsHeader text-center MarginBottomMedium">
                        <h3 className="text-center ColorBlack">We're proud to partner with leading brands across the globe</h3>
                    </div>
                    <div className="AllClientsLogosGrid MarginTopMedium">
                        <Row gutter={[10, 10]} justify="center">
                            {logos.slice(0, visibleLogos).map((logo) => (
                                <Col
                                    key={logo.id}
                                    xs={8}  // 2 logos per row on mobile
                                    sm={6}   // 3 logos per row on small tablets
                                    md={6}   // 3 logos per row on tablets
                                    lg={4}   // 4 logos per row on desktop
                                    xl={4.8} // 5 logos per row on large desktop (24/5 = 4.8)
                                    xxl={4.8}
                                >
                                    <div className="ClientLogoCard">
                                        <div className="ClientLogoWrapper">
                                            <img
                                                src={logo.image}
                                                alt={`${logo.name} - Trusted Client Partner of Agilux Solution`}
                                                loading="lazy"
                                                width="150"
                                                height="80"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Load More Button */}
                    {hasMoreLogos && (
                        <div className="LoadMoreButtonContainer text-center MarginTopMedium">
                            <button className="Button" onClick={loadMoreLogos}>
                                <span>Load More Clients</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllClients;