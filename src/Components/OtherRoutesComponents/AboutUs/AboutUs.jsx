import React from "react";
import "./AboutUs.css";
import OtherRoutesCommonHeader from "../OtherRoutesCommonHeader/OtherRoutesCommonHeader";
import CommonHeader from "../CommonHeader/CommonHeader";
import { Row, Col } from "antd";
import ViewportRevealImage from "../ViewportRevealImage/ViewportRevealImage";
import useViewportAnimation from "../../../hooks/useViewportAnimation";
import BackghroundImageWithLayersRevelAnimation from "../BackghroundImageWithLayersRevelAnimation/BackghroundImageWithLayersRevelAnimation";
import Three60Marketing from "../360Marketing/Three60Marketing";

const AboutUs = () => {
    const [containerRef, animationStarted] = useViewportAnimation({
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
        delay: 100,
        once: true
    });
    return (
        <>
            <div className="AboutUsContainer" id="about-us">
                <OtherRoutesCommonHeader title="" image="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" />
                <div className="Container">
                    <div className="AboutUsContent MarginTopMedium">
                        <div className="Max800">
                            <h3 className="text-center ColorBlack">Empowering businesses to <span>thrive in the digital age</span></h3>
                        </div>
                    </div>
                    <div className="MarginTopMedium">
                        <Row gutter={[40, 40]}>
                            <Col lg={12} md={12}>
                                <div className="AboutUsContentImage">
                                    <ViewportRevealImage src="https://images.unsplash.com/photo-1607703703674-df96af81dffa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" alt="About Agilux - Leading App and Web Development Solutions Provider" />
                                </div>
                            </Col>
                            <Col lg={12} md={12}>
                                <div className="AlignCenter">
                                    <div>
                                        <h4 className="ColorBlack MarginBottomSmall">Who We Are</h4>
                                        <p>At Agilux, we empower businesses to thrive in the digital age. As a leading provider of innovative app and web development solutions, we harness the power of technology to drive growth, improve efficiency, and enhance customer experiences. With a team of expert developers, designers, and strategists, we craft bespoke digital products that meet the unique needs of our clients.</p>
                                        <p>From conceptualization to deployment, we deliver end-to-end solutions that are tailored to drive real results. Whether you're a startup looking to disrupt the market or an established enterprise seeking to optimize your digital presence, we partner with you to bring your vision to life. With a passion for innovation and a commitment to excellence, we help businesses like yours succeed in an ever-evolving digital landscape.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="MarginTopMedium">
                        <Row gutter={[40, 40]}>
                            <Col lg={12} md={12}>
                                <div className="AlignCenter">
                                    <div>
                                        <h4 className="ColorBlack MarginBottomSmall">Our Approach</h4>
                                        <p>At Agilux, we're a team of innovators, thinkers, and problem-solvers who are passionate about harnessing the power of technology to drive business success. As a leading provider of app and web development solutions, we've built a reputation for delivering cutting-edge digital products that meet the unique needs of our clients.</p>
                                        <p>With a team of expert developers, designers, and strategists, we take a collaborative approach to understanding our clients' goals and challenges. We believe that every business is unique, and that's why we take the time to listen, to understand, and to tailor our solutions to meet their specific needs. Whether you're a startup looking to disrupt the market or an established enterprise seeking to optimize your digital presence, we partner with you to bring your vision to life.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12}>
                                <div className="AboutUsContentImage">
                                    <ViewportRevealImage src="/Images/AboutusImage1.jpeg" alt="Agilux Innovation - Expert Developers and Designers Delivering Digital Solutions" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="MarginTopMedium">
                        <Row gutter={[40, 40]}>
                            <Col lg={12} md={12}>
                                <div className="AboutUsContentImage">
                                    <ViewportRevealImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" alt="Agilux Expertise - Digital Solutions Across the Spectrum" />
                                </div>
                            </Col>
                            <Col lg={12} md={12}>
                                <div className="AlignCenter">
                                    <div>
                                        <h4 className="ColorBlack MarginBottomSmall">Our Expertise</h4>
                                        <p>Our expertise spans the entire digital spectrum, from mobile app development and web design to e-commerce solutions and digital marketing. We're constantly pushing the boundaries of what's possible, exploring new technologies, and innovating new solutions to stay ahead of the curve. Our team is dedicated to delivering exceptional results, and we're committed to helping our clients achieve their goals and succeed in an ever-evolving digital landscape.</p>
                                        <p>At Agilux, we're driven by a passion for innovation, a commitment to excellence, and a desire to make a meaningful impact on the businesses we serve. We believe that technology should be a catalyst for growth, not a barrier to success. That's why we're dedicated to delivering solutions that are intuitive, scalable, and tailored to meet the unique needs of our clients.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* <BackghroundImageWithLayersRevelAnimation /> */}
            {/* <Three60Marketing /> */}
        </>
    );
};

export default AboutUs;