import React from "react";
import "./Three60Marketing.css";
import OtherRoutesCommonHeader from "../OtherRoutesCommonHeader/OtherRoutesCommonHeader";
import CommonHeader from "../CommonHeader/CommonHeader";
import Three60MarketingData from "./360MarketingData";
import { Row, Col } from "antd";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Three60Marketing = () => {
    // Function to create URL-friendly slug from service title
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };
    return (
        <div className="Three60MarketingContainer SectionTopPadding" id="three-60-marketing">
            <div className="Container">
                <CommonHeader title="We Serve" description="We provide 360 Real Estate Branding Solution. We make strategy for a projects from it's inception to end." />
                <div className="MarginTopMedium">
                    <div>
                        <Row>
                            {Three60MarketingData.map((item, index) => (
                                <Col key={index} lg={24} md={24} sm={24} xs={24}>
                                    <Link to={`/services/${createSlug(item.title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="Animated360ServicesItem">
                                            <div>
                                                <div>
                                                    <h4>{item.title}</h4>
                                                </div>
                                                <div className="Animated360ServicesItemImage">
                                                    <img
                                                        src={item.image}
                                                        alt={`${item.title} - Professional ${item.title} Services by Agilux Solution`}
                                                        loading="lazy"
                                                        width="400"
                                                        height="250"
                                                        style={{ aspectRatio: '16/10', objectFit: 'cover', width: '100%', height: 'auto' }}
                                                    />
                                                </div>
                                                <div className="ViewMoreButton">
                                                    <button className="Button"><span><IoIosArrowRoundForward /></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Three60Marketing;