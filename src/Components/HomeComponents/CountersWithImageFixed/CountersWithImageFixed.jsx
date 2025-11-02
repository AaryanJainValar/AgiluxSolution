import React, { useEffect, useState } from "react";
import "./CountersWithImageFixed.css";
import { Row, Col } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import useViewportAnimation from "../../../hooks/useViewportAnimation";
import { Link } from "react-router-dom";
const CountersWithImageFixed = () => {
    // Use custom hook for viewport-based animations
    const [containerRef, animationStarted] = useViewportAnimation({
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
        delay: 100,
        once: true
    });

    // Preload critical background image
    const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);

    useEffect(() => {
        const bgImage = new Image();
        bgImage.onload = () => setBackgroundImageLoaded(true);
        bgImage.onerror = () => setBackgroundImageLoaded(true); // Continue even if error
        bgImage.src = "https://images.unsplash.com/photo-1535446937720-e4cad0145efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }, []);

    const CounterValue = [
        {
            id: 1,
            title: "Project on time",
            description: "Trusted by reputed clients across industries.",
            value: 60,
            suffix: "+",
        },
        {
            id: 2,
            title: "Years of experience",
            description: "A strong team driving excellence in every project.",
            value: 3,
            suffix: "+",
        },
        {
            id: 3,
            title: "Complete projects",
            description: "Including heavy machinery like Bofors for precision work.",
            value: 124,
            suffix: "+",
        },
    ];

    // Clock-style sliding animation for individual digits
    const SlideCounter = ({ value, suffix }) => {
        const digitHeightEm = 1.5; // must match container/item heights
        const cycles = 1; // full 0-9 cycle before landing on target
        const digits = value.toString().split('').map(Number);

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '13px' }}>
                {digits.map((digit, digitIndex) => {
                    const totalSteps = cycles * 10 + digit; // how many digit steps to scroll
                    const items = Array.from({ length: totalSteps + 1 }, (_, idx) => idx % 10);
                    return (
                        <div
                            id="CounterValueGap"
                            key={digitIndex}
                            style={{
                                position: 'relative',
                                // overflow: 'hidden',
                                height: `${digitHeightEm}em`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: `-${totalSteps * digitHeightEm}em` }}
                                transition={{
                                    duration: 2,
                                    delay: digitIndex * 0.1,
                                    ease: 'easeOut'
                                }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start'
                                }}
                            >
                                {items.map((num, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            height: `${digitHeightEm}em`,
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 'inherit',
                                            fontWeight: 'inherit',
                                            lineHeight: `${digitHeightEm}em`,
                                            flexShrink: 0
                                        }}
                                    >
                                        {num}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    );
                })}
                {suffix && <span style={{ marginLeft: '4px' }}>{suffix}</span>}
            </div>
        );
    };

    return (
        <div className="CountersWithImageFixedContainer MarginTopMedium" id="counters-with-image-fixed" ref={containerRef}>
            <div className="CountersWithImageFixed">
                {/* Left Side Content - Layer 1 */}
                <div className={`FixedImageRightSmallContainer counter-layer-1 ${animationStarted ? "animate" : ""}`}>
                    <div>
                        <h4>Explore how we turn ideas into impactful results!</h4>
                        <p>We transform bold ideas into meaningful outcomes, driving innovation and delivering impactful results.</p>
                        <div>
                            <Link to="tel:+918866415586"><button className="Button"><span>Call us now</span></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Counters Content - Layer 2 */}
                <div className={`CountersWithImageFixedContent counter-layer-2 ${animationStarted ? "animate" : ""}`}>
                    <Row className="w-100">
                        {CounterValue.map((counterValue, index) => (
                            <Col
                                key={counterValue.id}
                                lg={8}
                                md={12}
                                sm={12}
                                xs={index === CounterValue.length - 1 ? 24 : 12}
                            >
                                <div className={`CountersWithImageFixedContentItemCard counter-layer-3 ${animationStarted ? "animate" : ""}`}>
                                    <div>
                                        <h2 className="ColorBlack">
                                            {animationStarted ? (
                                                <SlideCounter
                                                    value={counterValue.value}
                                                    suffix={counterValue.suffix}
                                                />
                                            ) : (
                                                `0${counterValue.suffix}`
                                            )}
                                        </h2>
                                        {/* <br /> */}
                                        <h4 className="ColorBlack">{counterValue.title}</h4>
                                    </div>
                                    {/* <p>{counterValue.description}</p> */}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default CountersWithImageFixed;