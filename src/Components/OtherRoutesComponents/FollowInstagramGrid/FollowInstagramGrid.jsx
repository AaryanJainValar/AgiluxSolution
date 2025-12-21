import React from "react";
import "./FollowInstagramGrid.css";
import { Row, Col } from "antd";
import { BsInstagram, BsFacebook, BsTwitterX } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { Link } from "react-router-dom";

const FollowInstagramGrid = () => {

    const socialMediaItems = [
        {
            id: 1,
            image: "https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132",
            link: "https://www.instagram.com/agiluxsolution/",
            icon: <BsInstagram />,
            platform: "Instagram"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
            link: "https://x.com/agiluxsolution",
            icon: <BsTwitterX />,
            platform: "X"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
            link: "https://www.facebook.com/share/1HXqANfU3u/",
            icon: <BsFacebook />,
            platform: "Facebook"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
            link: "https://medium.com/@agiluxsolution",
            icon: <SiMedium />,
            platform: "Medium"
        },
    ];

    return (
        <div className="FollowSocialGridContainer SectionTopPadding PaddingbottomMedium MarginTopMedium">
            <div className="FollowSocialGrid Container">
                 <div className="TestimonialsContentHeader">
                    <span>Stay Connected with Agilux</span>
                    <br />
                    <br />
                    <h3 className="ColorBlack">Follow us for latest updates and insights</h3>
                </div>
                <div className="FollowSocialGridItems MarginTopMedium">
                    <Row gutter={[20, 20]}>
                        {socialMediaItems.map((item) => (
                            <Col key={item.id} lg={6} md={4} sm={12} xs={12}>
                                <Link to={item.link} target="_blank" className="SocialGridItemLink">
                                    <div className={`SocialGridItemPlatform ${item.platform.toLowerCase()}`}>
                                        <div className="SocialGridItemImage">
                                            <img
                                                src={item.image}
                                                alt={`Agilux Solution ${item.platform} - Digital Agency`}
                                                loading="lazy"
                                                style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                            />
                                            <div className="SocialIconOverlay">
                                                <div className="IconCircle">
                                                    {item.icon}
                                                </div>
                                                <span className="PlatformName">{item.platform}</span>
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
    );
};

export default FollowInstagramGrid;