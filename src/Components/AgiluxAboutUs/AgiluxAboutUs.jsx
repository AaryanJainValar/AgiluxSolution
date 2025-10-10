import React, { useEffect } from "react";
import "./AgiluxAboutUs.css"
import SEO from '../SEO/SEO';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import AboutUsBack from "./AboutUsBack.jpg"
import AboutUsBack2 from "./About2.avif"
import AboutUsBack3 from "./About3.avif"
// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const AgiluxAboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const AboutUsCarousalCard = [
        {
            Title: "Innovation",
            Description: "We're constantly seeking new ways to improve, to innovate, and to push the boundaries of what's possible."
        },
        {
            Title: "Collaboration",
            Description: "We believe that the best solutions come from working together, sharing ideas, and collaborating with our clients and partners."
        },
        {
            Title: "Excellence",
            Description: "We're committed to delivering exceptional results, and we strive for perfection in everything we do."
        },
        {
            Title: "Integrity",
            Description: "We're honest, transparent, and ethical in all our dealings, and we believe that trust is the foundation of any successful partnership."
        }


    ]
    const aboutStructuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Agilux Solution",
        "description": "Learn about Agilux Solution, India's premier digital agency specializing in web development, mobile app development, UI/UX design, SEO services, and digital marketing solutions.",
        "url": "https://www.agiluxsolution.com/agiluxaboutus",
        "mainEntity": {
            "@type": "Organization",
            "name": "Agilux Solution",
            "description": "Premier digital agency empowering businesses with cutting-edge web and app solutions for growth and efficiency.",
            "foundingDate": "2020",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9558653846",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Gujarati"]
            }
        }
    };

    return (
        <>
            <SEO 
                title="About Agilux Solution - Premier Digital Agency Team"
                description="Learn about Agilux Solution, India's premier digital agency specializing in web development, mobile app development, UI/UX design, SEO services, and digital marketing solutions. Meet our expert team."
                keywords="about Agilux Solution, digital agency team, web development team, app development experts, UI UX designers, SEO specialists, digital marketing professionals, Ahmedabad digital agency"
                canonical="/agiluxaboutus"
                structuredData={aboutStructuredData}
            />
            <section>
                <div className="TopContainer">
                    <div>
                        <h4>/ About Us</h4>
                        <div style={{ display: "flex", justifyContent: "space-Between" }}>
                            <h2>Agilux About Us</h2>
                        </div>
                        <p>Agilux empowers businesses with cutting-edge web and app solutions for growth and efficiency.</p>
                    </div>
                </div>
                <div className="AgiluxAboutUs">
                    <img src="/TopBannersImages/AboutUsBanner.jpeg" alt="Agilux Solution Team - Professional digital agency team working on web development and app development projects" style={{width:"100%",marginBottom:"2rem"}} loading="lazy"/>
                    <p>At Agilux, we empower businesses to thrive in the digital age. As a leading provider of innovative app and
                        web development solutions, we harness the power of technology to drive growth, improve efficiency, and enhance customer
                        experiences. With a team of expert developers, designers, and strategists, we craft bespoke digital products that meet the
                        unique needs of our clients. From conceptualization to deployment, we deliver end-to-end solutions that are tailored to drive
                        real results. Whether you're a startup looking to disrupt the market or an established enterprise seeking to optimize your
                        digital presence, we partner with you to bring your vision to life. With a passion for innovation and a commitment to excellence,
                        we help businesses like yours succeed in an ever-evolving digital landscape.</p>
                    <br />
                    <p>At Agilux, we're a team of innovators, thinkers, and problem-solvers who are passionate about harnessing the power of technology to drive business success. As a leading provider of app and web development solutions, we've built a reputation for delivering cutting-edge digital products that meet the unique needs of our clients.</p>
                    <br />
                    <p>With a team of expert developers, designers, and strategists, we take a collaborative approach to understanding our clients' goals and challenges. We believe that every business is unique, and that's why we take the time to listen, to understand, and to tailor our solutions to meet their specific needs. Whether you're a startup looking to disrupt the market or an established enterprise seeking to optimize your digital presence, we partner with you to bring your vision to life.
                    </p>
                    <br />
                    <p>Our expertise spans the entire digital spectrum, from mobile app development and web design to e-commerce solutions and digital marketing. We're constantly pushing the boundaries of what's possible, exploring new technologies, and innovating new solutions to stay ahead of the curve. Our team is dedicated to delivering exceptional results, and we're committed to helping our clients achieve their goals and succeed in an ever-evolving digital landscape.</p>
                    <br />
                    <p>At Agilux, we're driven by a passion for innovation, a commitment to excellence, and a desire to make a meaningful impact on the businesses we serve. We believe that technology should be a catalyst for growth, not a barrier to success. That's why we're dedicated to delivering solutions that are intuitive, scalable, and tailored to meet the unique needs of our clients.
                    </p>

                    <br /><br />
                    <br />

                </div>
                <div className="AgiluxProcessContainer">
                    <div style={{width:"100%"}}>
                        <img src={AboutUsBack} alt="Agilux Solutions - Our Process Overview" style={{objectFit:"cover"}} loading="lazy"/>
                        {/* <img src={AboutUsBack2} alt="" />
                            <img src={AboutUsBack} alt="" /> */}
                    </div>

                    <div className="BlackOverlay">

                    </div>
                    <div className="anothercontainer">
                        <div style={{ width: "100%"}}>
                            <h4>/ Our values are simple yet powerful:</h4>
                            {/* <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                                <h2>Leading with Purpose</h2>
                            </div> */}
                            <Swiper
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                effect="fade"
                                speed={900}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {AboutUsCarousalCard.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="SwiperContentContainer">
                                            <h3>{item.Title}</h3>
                                            <p>{item.Description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AgiluxAboutUs