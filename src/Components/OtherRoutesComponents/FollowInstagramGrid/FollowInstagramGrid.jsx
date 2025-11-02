import React from "react";
import "./FollowInstagramGrid.css";
import { Row, Col } from "antd";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const FollowInstagramGrid = () => {

    const FollowInstagramGridItemImages = [
        {
            id: 1,
            image: "https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
        },
        {
            id: 5,
            image: "https://plus.unsplash.com/premium_photo-1680281937048-735543c5c0f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1022",
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1675352161865-27816c76141a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132",
        },

    ];

    return (
        <div className="FollowInstagramGridContainer SectionTopPadding PaddingbottomMedium MarginTopMedium">
            <div className="FollowInstagramGrid Container">
                <div className="FollowInstagramGridItem">
                    <h3 className="ColorBlack text-center">Follow us on Instagram</h3>
                </div>
                <div className="FollowInstagramGridItemImages MarginTopMedium">
                    <Link to="https://www.instagram.com/agiluxsolution" target="_blank">
                        <Row gutter={[16, 16]}>
                            {FollowInstagramGridItemImages.map((item) => (
                                <Col key={item.id} lg={4} md={6} sm={12} xs={12}>
                                    <div className="FollowInstagramGridItemImage">
                                        <img
                                            src={item.image}
                                            alt={`Agilux Solution Instagram Post ${item.id} - Premier Digital Agency | Web Development, App Development & Social Media Marketing Ahmedabad`}
                                            loading="lazy"
                                            width="300"
                                            height="300"
                                            style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                        />
                                        <div className="InstaGramIconContainer">
                                            <BsInstagram />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FollowInstagramGrid;