import React from "react";
import "./Services.css";
import Three60Marketing from "../360Marketing/Three60Marketing";
import OtherRoutesCommonHeader from "../OtherRoutesCommonHeader/OtherRoutesCommonHeader";
const Services = () => {
    return (
        <div>
            <OtherRoutesCommonHeader title="" image={"https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"} />
            <Three60Marketing />
        </div>
    );
};

export default Services;