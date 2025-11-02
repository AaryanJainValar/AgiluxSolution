import React from "react";
import "./CommonHeader.css";
const CommonHeader = ({ title, description }) => {
    return (
        <div className="CommonHeaderContainer" id="common-header">
            <div className="CommonHeaderContent">
                <div>
                    <h4>{title}</h4>
                </div>
                <div>
                    <h3 className="ColorBlack">{description}</h3>
                </div>
            </div>
        </div>
    );
};

export default CommonHeader;