import React, { useState } from "react";
import "./AgiluxServices.css"
import GraphicDesign from "./GraphicDesign.jpeg"
import img1 from "../MinimalComponent/AppDevelopmentProjects/AppDev.avif"
import img2 from "../MinimalComponent/CommonServices/FrontendDevelopment.jpg"
import img3 from "../MinimalComponent/CommonServices/TestingWeb.jpg"
const AgiluxServices = () => {
    const [transformValues, setTransformValues] = useState({});

    // Handle mouse movement
    const handleMouseMove = (e, index) => {
        // Get the image container dimensions
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = (x - rect.width / 2) / 5;
        const moveY = (y - rect.height / 2) / 5;
        setTransformValues(prev => ({
            ...prev,
            [index]: `translate(${moveX}px, ${moveY}px)`,
        }));
    };

    const handleMouseLeave = (index) => {
        setTransformValues(prev => ({
            ...prev,
            [index]: `translate(0px, 0px)`,
        }));
    };
    const AgiluxServices = [
        {
            Title: "App Development",
            icons: [
                "/Icons/Java.png",
                "/Icons/Kotlin.png",
                "/Icons/Swift.png",
                "/Icons/Flutter.png"
            ],
            image: img1,
            keyWord: "/ Custom Mobile App Development, / iOS and Android App Development, / Scalable Mobile Apps",
            Description: "We build robust, scalable, and user-friendly mobile applications for iOS and Android, turning your ideas into powerful tools that drive user engagement and business growth."
        },
        {
            Title: "Web Development",
            icons: [
                "/Icons/javascript.png",
                "/Icons/React.png",
                "/Icons/Wordpress.png",
                "/Icons/Next.png"

            ],
            image: img2,
            keyWord: "/ Responsive Web Development, / E-commerce Development, / Corporate Website Development",
            Description: "Our web development services are designed to create high-performing, responsive, and visually appealing websites that provide seamless user experiences. From e-commerce platforms to corporate websites, we ensure your online presence is impactful and effective."
        },
        {
            Title: "Graphic Design",
            icons: [
                "/Icons/Canva.png",
                "/Icons/Photoshop.png",
                "/Icons/Figma.png",
                "/Icons/AE.png",
                "/Icons/AI.png"
            ],
            image: GraphicDesign,
            keyWord: "/ Branding and Logo Design, / Creative Visual Content, / Marketing Collateral Design",
            Description: "From logos to marketing collateral, our graphic design services give your brand a distinctive, professional look. We create designs that resonate with your audience and reflect your brand identity across all platforms."
        },
        {
            Title: "Advertising and Brand Building",
            icons: [
                "/Icons/SocialMedia.png",
                "/Icons/Branding.png"
            ],
            keyWord: "/ Brand Identity Development, / Social Media Management, / Content Creation, / Strategic Branding, / Reputation Management",
            Description: "We specialize in brand identity development, social media management, and content creation to enhance engagement and growth. Our tailored approach ensures a strong online presence, reputation management, and lasting brand loyalty. 🚀"
        }
        // {
        //     Title: "Automated Testing",
        //     keyWord: "/ Automated QA Testing, / Software Performance Testing, / Bug Identification and Resolution",
        //     image: img3,
        //     Description: "We ensure the reliability and performance of your software through rigorous automated testing. By identifying bugs and improving functionality before launch, we guarantee that your product performs flawlessly under all conditions."
        // },
        // {
        //     Title: "SEO (Search Engine Optimization)",
        //     keyWord: "/ SEO Optimization Services, / Keyword Research, Link Building, / On-Page and Off-Page SEO",
        //     Description: "Drive more organic traffic and improve your website’s visibility with our SEO services. From on-page optimization to keyword research and link building, we implement strategies that enhance your rankings on search engines and attract the right audience."
        // }
    ]
    return (
        <>
            <section style={{ backgroundColor: "white" }}>
                <div className="AgiluxCoreServicesContainer">
                    <h4 style={{ color: "black", fontWeight: "400" }}>/ Our Services</h4>
                    <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                        <div>
                            <h2>Business Solutions</h2>
                            <p style={{ color: "black" }}>At Agilux Solution, we offer a full suite of services designed to cover every aspect of your digital journey. Launching a new product? Upgrading an existing one? Or just looking to strengthen your online presence? Whatever digital challenge you're facing, we've got the expertise to make it work - and work really well for your business.</p>
                        </div></div>

                    {AgiluxServices.map((item, index) => (
                        <div key={index} className="AgiluxServicesContainer" data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={`${index * 100}`}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <div className="InsideFlexContainer">
                                {/* <img src={item.image} alt=""  className="AbsoluteImage"/> */}
                                <div>
                                    <div style={{ display: "flex" }}>
                                        <h5 style={{ color: "black", margin: "0px" }}>/&nbsp;{index + 1}</h5>&nbsp;&nbsp;&nbsp;<h2>{item.Title}</h2>
                                    </div>
                                    <div className="IconsImages">
                                        {item.icons.map((icon, i) => (
                                            <> <img key={i} src={icon} alt={`${item.Title} Technology Icon`} loading="lazy"/></>
                                        ))}
                                    </div>
                                </div>
                                <img src={item.image} alt={`Agilux Solution ${item.Title} Services - Professional Digital Solutions`} className="AnimatedHoverImage" style={{
                                    transform: transformValues[index],
                                    transition: 'transform 0.5 ease',
                                }} loading="lazy"/>
                                <div>
                                    {item.Description}
                                    <br />
                                    <br />
                                    <p style={{ fontSize: "13px" }}>{item.keyWord}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                    {/* </div> */}
                </div>
            </section>
        </>
    )
}
export default AgiluxServices