import React, { useEffect } from "react";
import "./HeroRoutes.css";
import HeroHome from "../HeroHome/HeroHome";
import WhoWeAreHome from "../WhoWeAreHome/WhoWeAreHome";
import CountersWithImageFixed from "../CountersWithImageFixed/CountersWithImageFixed";
import HomeTop2Services from "../HomeTop2Services/HomeTop2Services";
import OurPartnersClients from "../../../Components/OtherRoutesComponents/OurPartnersClients/OurPartnersClients";
import Testimonials from "../../../Components/OtherRoutesComponents/Testimonials/Testimonials";
const HeroRoutes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <HeroHome />
            <WhoWeAreHome />
            <CountersWithImageFixed />
            {/* <OurPartnersClients /> */}
            <HomeTop2Services />
            <Testimonials />
        </div>
    );
};

export default HeroRoutes;