import React from "react";
import "./OurPartnersClients.css";
import logos from "./OurPartnersData";

const OurPartnersClients = () => {
    // Client logos data


    return (
        <div className="OurPartnersClientsContainer" id="our-partners-clients">
            <div className="Container SectionTopPadding">
                <div className="OurPartnersClientsContentHeader">
                    <h3 className="text-center ColorBlack">We're proud to partner with leading brands across the globe</h3>
                </div>
                <div className="slider-container MarginTopMedium">
                    {/* Top Row Slider - First 10 Logos */}
                    <div className="slider-row top-row">
                        <div className="slider-track">
                            <div className="slider-content">
                                {logos.slice(0, 10).map((logo) => (
                                    <div key={`top-1-${logo.id}`} className="logo-item">
                                        <img
                                            src={logo.image}
                                            alt={`${logo.name} - Trusted Client Partner of Agilux Solution`}
                                            className="logo-image"
                                            loading="lazy"
                                            width="150"
                                            height="80"
                                            style={{ aspectRatio: '15/8', objectFit: 'contain' }}
                                        />
                                    </div>
                                ))}
                                {logos.slice(0, 10).map((logo) => (
                                    <div key={`top-2-${logo.id}`} className="logo-item">
                                        <img
                                            src={logo.image}
                                            alt={`${logo.name} - Trusted Client Partner of Agilux Solution`}
                                            className="logo-image"
                                            loading="lazy"
                                            width="150"
                                            height="80"
                                            style={{ aspectRatio: '15/8', objectFit: 'contain' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row Slider - Next 10 Logos */}
                    <div className="slider-row bottom-row">
                        <div className="slider-track">
                            <div className="slider-content reverse">
                                {logos.slice(10, 20).map((logo) => (
                                    <div key={`bottom-1-${logo.id}`} className="logo-item">
                                        <img
                                            src={logo.image}
                                            alt={`${logo.name} - Trusted Client Partner of Agilux Solution`}
                                            className="logo-image"
                                            loading="lazy"
                                            width="150"
                                            height="80"
                                            style={{ aspectRatio: '15/8', objectFit: 'contain' }}
                                        />
                                    </div>
                                ))}
                                {logos.slice(10, 20).map((logo) => (
                                    <div key={`bottom-2-${logo.id}`} className="logo-item">
                                        <img
                                            src={logo.image}
                                            alt={`${logo.name} - Trusted Client Partner of Agilux Solution`}
                                            className="logo-image"
                                            loading="lazy"
                                            width="150"
                                            height="80"
                                            style={{ aspectRatio: '15/8', objectFit: 'contain' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartnersClients;