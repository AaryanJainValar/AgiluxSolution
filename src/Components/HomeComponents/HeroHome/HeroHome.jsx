import React, { useState, useEffect } from "react";
import "./HeroHome.css";
import { Row, Col } from "antd";
const HeroHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [previousSlide, setPreviousSlide] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [animationStarted, setAnimationStarted] = useState(false);

    // Dummy images - using picsum.photos for placeholder images
    const images = [
        "https://images.unsplash.com/photo-1517503733723-8ea1cf616798?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
        "https://images.unsplash.com/photo-1642240251149-bcccea43798d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "/Images/HomecarousalImages/HomeHeroCarousalImage2.jpg",
    ];

    // Array of headings synchronized with images
    const headings = [
        "Digital Marketing",
        "Creative Technology",
        "Website Development",
        "Graphic Designing",
        "IT Solutions",
        "Content Strategy",
        "Brand Excellence"
    ];

    // SEO-friendly alt texts for hero images
    const imageAltTexts = [
        "Agilux Solution - Premier Digital Agency | Web Development, App Development & Social Media Marketing Ahmedabad",
        "Creative Technology Solutions - Web Development and Digital Innovation by Agilux Solution",
        "Website Development Services - Custom Web Solutions for Modern Businesses",
        "Graphic Design and Brand Identity - Creative Visual Solutions by Agilux Solution"
    ];

    // Preload all images
    useEffect(() => {
        let loadedCount = 0;
        const totalImages = images.length;

        images.forEach((src) => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };
            img.src = src;
        });
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;

        const interval = setInterval(() => {
            handleNextSlide();
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [currentSlide, imagesLoaded]);

    // Start animations ONLY after images are loaded
    useEffect(() => {
        if (imagesLoaded) {
            const timer = setTimeout(() => {
                setAnimationStarted(true);
            }, 300); // Increased delay to ensure images are fully rendered
            return () => clearTimeout(timer);
        }
    }, [imagesLoaded]);

    const handleNextSlide = () => {
        setPreviousSlide(currentSlide);
        setCurrentSlide((prev) => (prev + 1) % images.length);

        // Clear previous slide after animation completes
        setTimeout(() => {
            setPreviousSlide(null);
        }, 1500);
    };

    const handleBoxClick = (index) => {
        setPreviousSlide(currentSlide);
        setCurrentSlide(index);

        // Clear previous slide after animation completes
        setTimeout(() => {
            setPreviousSlide(null);
        }, 1500);
    };

    return (
        <div className="hero-slider-container">
            {!imagesLoaded && (
                <div className="slider-loading">
                    <div className="loading-spinner"></div>
                </div>
            )}
            <div className="slider-wrapper">
                {/* Background Images Layer - First */}
                {images.map((image, index) => {
                    const isActive = index === currentSlide;
                    const isExiting = index === previousSlide;

                    // Only render active and exiting slides
                    if (!isActive && !isExiting) return null;

                    return (
                        <div
                            key={index}
                            className={`slider-item ${isActive ? "active" : ""} ${isExiting ? "exiting" : ""} hero-layer-1 ${animationStarted ? "animate" : ""}`}
                        >
                            <div className="image-layer-wrapper">
                                <img
                                    src={image}
                                    alt={imageAltTexts[index] || "Agilux Solution - Premier Digital Agency | Web Development, App Development & Social Media Marketing Ahmedabad"}
                                    className="slider-image"
                                    width="1920"
                                    height="1080"
                                    style={{ aspectRatio: '16/9', objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                        </div>
                    );
                })}

                <div className="SliderContentContainer Container">
                    <Row>
                        <Col lg={14} xs={24}>
                            <div className="AnimatedShadowTextContainer">
                                {/* Main Heading - Second Layer */}
                                <div
                                    className={`AnimatedShadowText hero-layer-2 ${animationStarted ? "animate" : ""}`}
                                >
                                    <h1><span>Agilux</span> <span>Solution</span></h1>
                                </div>

                                {/* Slide Boxes - Third Layer */}
                                <div
                                    className={`SlidesSlideShowContainer hero-layer-3 ${animationStarted ? "animate" : ""}`}
                                >
                                    <div className="slideshow-boxes">
                                        {images.map((image, index) => (
                                            <div
                                                key={index}
                                                className={`slide-box ${index === currentSlide ? 'active' : ''} hero-layer-4 ${animationStarted ? "animate" : ""}`}
                                                onClick={() => handleBoxClick(index)}
                                            >
                                                <div className="box-frame">
                                                    <img
                                                        src={image}
                                                        alt={`${headings[index] || 'Digital Services'} - Agilux Solution Portfolio Preview`}
                                                        className="box-image"
                                                        width="120"
                                                        height="80"
                                                        style={{ aspectRatio: '3/2', objectFit: 'cover', width: '100%', height: '100%' }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={10} xs={24}>
                            <div className="RightSideAutoSwiperContainer">
                                {/* Right Side Heading - Fourth Layer */}
                                <div
                                    className={`AutoSwiperHeadingContainer hero-layer-5 ${animationStarted ? "animate" : ""}`}
                                >
                                    <div className="heading-slider">
                                        {headings.map((heading, index) => {
                                            const isActive = index === currentSlide;
                                            const isPrev = index === previousSlide;

                                            return (
                                                <h3
                                                    key={index}
                                                    className={`heading-text ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''}`}
                                                >
                                                    {heading}
                                                </h3>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Right Side Content - Fifth Layer */}
                                <div
                                    className={`hero-layer-6 ${animationStarted ? "animate" : ""}`}
                                >
                                    <p className="ColorWhite">We deliver innovative solutions tailored to your business needs. From concept to execution, our expert team combines creativity with cutting-edge technology to drive measurable results and elevate your brand presence in the digital landscape.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default HeroHome;