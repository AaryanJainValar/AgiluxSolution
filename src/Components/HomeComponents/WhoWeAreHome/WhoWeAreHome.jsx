import React from "react";
import "./WhoWeAreHome.css";
import CommonHeader from "../../../Components/OtherRoutesComponents/CommonHeader/CommonHeader";
import ViewportRevealImage from "../../../Components/OtherRoutesComponents/ViewportRevealImage/ViewportRevealImage";
import useViewportAnimation from "../../../hooks/useViewportAnimation";
import { Link } from "react-router-dom";


import { Row, Col } from "antd";
const WhoWeAreHome = () => {
    // Use custom hook for viewport-based animations
    const [containerRef, animationStarted] = useViewportAnimation({
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
        delay: 100,
        once: true
    });
    return (
        <div className="WhoWeAreHomeContainer SectionTopPadding" id="who-we-are" ref={containerRef}>
            <div className="Container">
                {/* Header - Layer 1 */}
                <div className={`who-layer-1 ${animationStarted ? "animate" : ""}`}>
                    <CommonHeader title="why us?" description=<><span>Your Success</span> is Our Priority</> />
                </div>

                <div className="WhoWeAreHomeContentGrid MarginTopMedium">
                    {/* Star Image - Layer 2 */}
                    <div className={`WhoWeAreHomeContentGridImageStar who-layer-2 ${animationStarted ? "animate" : ""}`}>
                        <img
                            src="https://cdn.prod.website-files.com/687739537650c2dd71291b7c/68a2f761c2dc0b926dc0c238_Star.svg"
                            alt="Excellence Star - Agilux Solution Award-Winning Digital Solutions"
                            width="60"
                            height="60"
                            style={{ aspectRatio: '1/1', objectFit: 'contain' }}
                        />
                    </div>

                    {/* Main Image - Layer 3 */}
                    <div className={`WhoWeAreHomeContentGridImage who-layer-3 ${animationStarted ? "animate" : ""}`}>
                        <div>
                            <ViewportRevealImage
                                src="/Images/AboutHome/360marketingPhoto.jpeg"
                                alt="Agilux Solution Team - Expert Developers and Designers Delivering Digital Solutions"
                                revealId="about-home-image"
                            />
                        </div>
                    </div>

                    {/* Text Content - Layer 4 */}
                    <div className={`WhoWeAreHomeContentGridImageText who-layer-4 ${animationStarted ? "animate" : ""}`}>
                        <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Client-Centered Approach</h4>
                        <p>Your goals are our priority. We work closely with you to understand your vision and deliver solutions that meet your specific needs, whether you're launching a new product or optimizing an existing system.</p>
                        
                        <h4 style={{ marginBottom: '12px', marginTop: '24px', fontWeight: '600', fontSize: '1.1rem' }}>Comprehensive Expertise</h4>
                        <p>With a diverse range of services, we are your one-stop shop for all digital needs. From design and development to testing, deployment, and SEO, we cover every aspect of your project to ensure a seamless experience.</p>
                        
                        <h4 style={{ marginBottom: '12px', marginTop: '24px', fontWeight: '600', fontSize: '1.1rem' }}>Innovation at the Core</h4>
                        <p>We are constantly exploring new technologies, methodologies, and tools to bring the most innovative solutions to the table. Our team leverages the latest trends in design, development, and automation to keep your business ahead of the curve.</p>
                        
                        <div>
                            <Link to="/about-agilux">
                                <button className="Button"><span>Learn More</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="SectionTopPadding">
                        {/* Why Us Benefits - Layer 5 */}
                        <div className={`WhoWeAreHomeContentGridProjectsDetails who-layer-5 ${animationStarted ? "animate" : ""}`}>
                            <Row gutter={[40, 40]}>
                                <Col lg={12} md={12} xs={24}>
                                    <div>
                                        <h4 style={{ marginBottom: '12px', fontWeight: '600' }}>Agile Methodology</h4>
                                        <p>We follow agile methodologies to ensure flexibility, faster delivery, and continuous improvement. Our iterative approach allows for constant feedback and refinement, ensuring the final product meets and exceeds your expectations.</p>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} xs={24}>
                                    <div>
                                        <h4 style={{ marginBottom: '12px', fontWeight: '600' }}>Proven Results</h4>
                                        <p>We have helped businesses from startups to enterprises achieve significant improvements in efficiency, customer engagement, and profitability through our technology-driven solutions.</p>
                                        <div style={{ marginTop: '20px' }}>
                                            <p style={{ margin: "5px 0px" }}><b>Projects</b></p>
                                            <p className="FlexImageAdjust" style={{ margin: "5px 0px" }}>
                                                <img
                                                    src="https://cdn.prod.website-files.com/687739537650c2dd71291b7c/68a2f761c2dc0b926dc0c238_Star.svg"
                                                    alt="Success Star - 200+ Successful Projects by Agilux Solution"
                                                    width="20"
                                                    height="20"
                                                    style={{ aspectRatio: '1/1', objectFit: 'contain' }}
                                                />
                                                <b>124+</b>
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        {/* Marquee - Layer 6 */}
                        <div className={`InfiniteMarqueeTagContainer who-layer-6 ${animationStarted ? "animate" : ""}`}>
                            <div className="InfiniteMarqueeTag">
                                <div className="marquee-content">
                                    <span>CREATIVE DESIGN</span>
                                    <span>DIGITAL INNOVATION</span>
                                    <span>FUTURE SOLUTIONS</span>
                                    <span>CREATIVE DESIGN</span>
                                    <span>DIGITAL INNOVATION</span>
                                    <span>FUTURE SOLUTIONS</span>
                                    <span>CREATIVE DESIGN</span>
                                    <span>DIGITAL INNOVATION</span>
                                    <span>FUTURE SOLUTIONS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAreHome;