import React from "react";
import "./AgiluxMV.css"
import { FaArrowRightLong } from "react-icons/fa6";
import BackChecks from "./BackChecks.svg"
const AgiluxMV = () => {
    return (
        <>
            <section style={{position:"relative"}}>
                {/* <div className="OverlayColor">
                <img src={BackChecks} alt="Agilux Solution Mission Vision Background Pattern" className="BackImage"/>
                </div> */}
                <div className="AgiluxMissionVisionContainer">
                    <div className="SameContainer" data-aos="fade-up"
                        data-aos-duration="1000">
                        <h4>/ Mission</h4>
                        <br />
                        <div className="OurMissionDetails">

                            <div style={{ display: "flex", justifyContent: "space-Between", padding: "1rem 0rem" }}>
                                <h2>Transforming Ideas into Digital Excellence</h2>
                            </div>
                            <p>Agilux mission is to help businesses succeed in the digital world. We are committed to continually challenging limits to ensure our clients remain at the forefront.
                            </p>

                        </div>
                    </div>
                    <hr />
                    <div className="SameContainer" data-aos="fade-up"
                        data-aos-duration="1000">
                        <h4>/ Vision</h4>
                        <br />
                        <div className="OurMissionDetails">

                            <div style={{ display: "flex", justifyContent: "space-Between", padding: "1rem 0rem" }}>
                                <h2>Partner for Every Business</h2>
                            </div>
                            <p>Agilux aims to deliver groundbreaking and customized technology solutions that enable companies to optimize performance and drive sustainable growth steadily for the long run. We are committed to providing sophisticated output to our clients that helps them stay ahead in a rapidly evolving digital ecosystem. We believe in the power of technology to unlock new possibilities which is helpful for bussiness growth. Agilux helps your business thrive in today’s competitive market. Our experts who are passionate about innovation, we craft digital solutions tailored to your needs, ensuring seamless integration and enhanced user experience for long-term growth</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AgiluxMV