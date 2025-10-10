import React, { useEffect, useState } from "react";
import "./AnimatedLoader.css";

const AnimatedLoadingScreen = () => {
    const [headingAnimationComplete, setHeadingAnimationComplete] = useState(false);

    useEffect(() => {
        // Set a timeout to mark the heading animation as complete after its duration
        const headingAnimationDuration = 2.5; // Match this with CSS animation duration
        const timeout = setTimeout(() => {
            setHeadingAnimationComplete(true);
        }, headingAnimationDuration * 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            id="AnimatedLoader"
            className={headingAnimationComplete ? "fade-out" : ""}
        >
            <h1 className="animated-heading">
                {"Agilux Solution".split("").map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        {char}
                    </span>
                ))}
            </h1>
            {!headingAnimationComplete && (
                <div className="wave-container">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            )}
        </section>
    );
};

export default AnimatedLoadingScreen;
