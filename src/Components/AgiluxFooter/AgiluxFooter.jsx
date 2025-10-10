import React from "react";
import "./AgiluxFooter.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AgiluxFooter = () => {
    return (
        <>
            <section className="Footer">
                <div className="FooterContainer">
                    <div className="EmailContainer">
                        <h2>Elevate your digital presence with our team of expert designers and developers. We specialize in crafting innovative, user-centric solutions that bring your digital vision to life. Let us help you stand out with exceptional design and development that exceeds expectations.</h2>
                        <br />
                        <div className="EmailAnimation">
                            <Link to="mailto:agiluxsolution@gmail.com" target="_blank"><h4 style={{fontWeight:"400"}}>agiluxsolution@gmail.com</h4></Link>
                            <hr />
                        </div>
                        <br />
                        <div className="EmailAnimation">
                            <Link to="https://wa.me/8866415586" target="_blank"><h4>Chat Via <span style={{ fontWeight: "400" }}>whatsapp</span></h4></Link>
                            <hr />
                        </div>
                    </div>
                    <br /><br />
                    <div className="TopBarFooter">
                        <div>
                            <div><p>Design & Developed by <Link to="/"><span style={{ fontWeight: "400" }}>Agilux Solution</span></Link> </p></div>
                        </div>
                        <div className="SocialLinks">
                            <ul>
                                <Link to="https://www.instagram.com/agiluxsolution/" target="_blank"><li>Instagram </li></Link>
                                <Link to="https://x.com/AgiluxSolution" target="_blank"><li>Twitter</li></Link>
                                <Link to="https://www.linkedin.com/company/agiluxsolution/" target="_blank"><li>LinkedIn</li></Link>
                                <Link to="https://www.facebook.com/profile.php?id=61579304018125" target="_blank"><li>Facebook</li></Link>
                                <Link to="https://medium.com/@agiluxsolution" target="_blank"><li>Medium</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AgiluxFooter
