import React from "react";
import "./BackghroundImageWithLayersRevelAnimation.css";

const BackghroundImageWithLayersRevelAnimation = () => {
    return (
        <div className="BackghroundImageWithLayersRevelAnimation MarginTopLarge" >
            <div className="BackgroundImageContainer">
                <div>
                    <img 
                        src="https://images.unsplash.com/photo-1535446937720-e4cad0145efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Creative Business Solutions - Agilux Solution Agency Background"
                        loading="lazy"
                        width="1920"
                        height="500"
                        style={{ aspectRatio: '1920/500', objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>

            </div>
            {/* <div className="CrossMarqueeTag">
                <div>
                    <div className="MarqueeContentFirst">
                        <div className="marquee-track">
                            <div className="marquee-content">
                                <span>Creative Solutions • Innovative Designs • Brand Excellence • Digital Marketing • Strategic Planning • </span>
                                <span>Creative Solutions • Innovative Designs • Brand Excellence • Digital Marketing • Strategic Planning • </span>
                                <span>Creative Solutions • Innovative Designs • Brand Excellence • Digital Marketing • Strategic Planning • </span>
                                <span>Creative Solutions • Innovative Designs • Brand Excellence • Digital Marketing • Strategic Planning • </span>
                            </div>
                        </div>
                    </div>
                    <div className="MarqueeContentSecond">
                        <div className="marquee-track">
                            <div className="marquee-content marquee-reverse">
                                <span>Visual Identity • Web Development • Social Media • Content Creation • Brand Strategy • </span>
                                <span>Visual Identity • Web Development • Social Media • Content Creation • Brand Strategy • </span>
                                <span>Visual Identity • Web Development • Social Media • Content Creation • Brand Strategy • </span>
                                <span>Visual Identity • Web Development • Social Media • Content Creation • Brand Strategy • </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default BackghroundImageWithLayersRevelAnimation;