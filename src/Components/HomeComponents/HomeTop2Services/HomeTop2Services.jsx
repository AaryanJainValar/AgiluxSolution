import React from "react";
import "./HomeTop2Services.css";
import CommonHeader from "../../../Components/OtherRoutesComponents/CommonHeader/CommonHeader";
import { Row, Col } from "antd";
import useViewportAnimation from "../../../hooks/useViewportAnimation";

const HomeTop2Services = () => {
    // Use custom hook for viewport-based animations
    const [containerRef, animationStarted] = useViewportAnimation({
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
        delay: 100,
        once: true
    });
    return (
        <div className="HomeTop2ServicesContainer SectionTopPadding MarginTopMedium" ref={containerRef}>
            <div className="Container">
                <Row gutter={[16, 16]}>
                    {/* First Column - Layer 1 */}
                    <Col lg={8}>
                        <div className={`services-layer-1 ${animationStarted ? "animate" : ""}`}>
                            <div>
                                <h3 className="ColorBlack BrandColor"><span>We build brands</span> that break the mold</h3>
                                <button className="Button"><span>Get Started</span></button>
                            </div>
                            <div className="MarginTopMedium">
                                <div className="FirstServiceItem">
                                    <div>
                                        <h4>Website Design/Development</h4>
                                        <p>Website design/development creates visually appealing, functional, and user-friendly websites for the internet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Second Column - Layer 2 */}
                    <Col lg={8}>
                        <div className={`SecondServiceItem services-layer-2 ${animationStarted ? "animate" : ""}`}>
                            <div>
                                <h4>Digital Marketing</h4>
                                <p>Digital marketing is the promotion of products and services using websites, apps, social media, and other digital channels to reach and engage customers. It helps brands build awareness and drive growth by targeting audiences online through content, messaging, and analytics.</p>
                            </div>
                        </div>
                    </Col>

                    {/* Third Column - Layer 3 */}
                    <Col lg={8}>
                        <div className={`ThirdServiceItem services-layer-3 ${animationStarted ? "animate" : ""}`}>
                            <div>
                                <h3 className="ColorWhite">Customer satisfaction rate</h3>
                                <h2 className="ColorWhite">94%</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomeTop2Services;