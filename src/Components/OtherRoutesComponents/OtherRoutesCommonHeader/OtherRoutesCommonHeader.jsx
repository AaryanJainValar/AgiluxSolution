import React from "react";
import "./OtherRoutesCommonHeader.css";
import ViewportRevealImage from "../ViewportRevealImage/ViewportRevealImage";

const OtherRoutesCommonHeader = ({ image, title }) => {
    return (
        <div className="OtherRoutesCommonHeaderContainer" id="other-routes-common-header">
            <div
                className="OtherRoutesCommonHeaderImage"
            >
                <ViewportRevealImage src={image} alt="Other Routes Common Header" data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic" />
                <div className="OtherRoutesCommonHeaderImageOverlayContent">
                    <div className="Container">
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            data-aos-easing="ease-out-cubic"
                        >
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherRoutesCommonHeader;