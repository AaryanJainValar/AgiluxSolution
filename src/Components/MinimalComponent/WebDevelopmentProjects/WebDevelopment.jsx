import React, { useEffect } from "react";
import SEO from '../../SEO/SEO';
import Structura from "./Structura.png"
import Yellowspot from "./Yellowspot.png"
import Aaryaneev from "./Aaryaneev.png"
const WebDevelopment = () => {
    const WebDevelopmentProjetsData = [
        {
            title: "Structura",
            image: Structura,
            desctiption: "With experience in over 1500 diverse projects, Strutura has established itself as a leading guide in the construction industry. We excel in providing comprehensive solutions across BIM, interior design, engineering, architecture, and structural planning, alongside cutting-edge 3D visualization services. Strutura positions itself as a navigator, helping clients maximize business value and achieve their project goals with precision and expertise."
        },
        {
            title: "Yellowspot",
            image: Yellowspot,
            desctiption: "Yellow Spot was born from the strategic collaboration between Het Graphics and Khushi Advertising, uniting two industry leaders to create one of Gujarat's premier outdoor media houses. With a portfolio of over 400 premium outdoor media options across Ahmedabad, 99% of which are backlit, we ensure maximum visibility in high-traffic locations and every neighborhood throughout the city. Our mission is to deliver comprehensive 360-degree marketing solutions, catering to local, national, and international clients across a diverse range of platforms. At Yellow Spot, we are dedicated to providing impactful and effective advertising solutions that drive results."
        },
        {
            title: "Aaryaneev",
            image: Aaryaneev,
            desctiption: "Aaryarath began its journey over 30 years ago with a modest vision, leveraging family support to fund its first major project. The success was immediate, with 100% of offerings sold and an overwhelming response that set the foundation for future ventures. With strategic planning and careful execution, Aaryarath steadily expanded its portfolio. To fuel this growth, capital was raised, and the relentless efforts of Mr. Ratilal, a key driving force, helped propel the business forward. Today, Aaryarath stands as a multi-generational brand, proudly carrying its legacy of creating iconic landmarks."
        },

    ]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const webDevStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Professional web development services by Agilux Solution. Custom websites including Structura, Yellowspot, and Aaryaneev projects using modern web technologies.",
        "provider": {
            "@type": "Organization",
            "name": "Agilux Solution",
            "url": "https://www.agiluxsolution.com"
        },
        "serviceType": "Web Development",
        "areaServed": "India",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Portfolio",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "WebSite",
                        "name": "Structura",
                        "description": "Construction industry guide with BIM, interior design, engineering, and architecture solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "WebSite",
                        "name": "Yellowspot",
                        "description": "Outdoor media house website for comprehensive 360-degree marketing solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "WebSite",
                        "name": "Aaryaneev",
                        "description": "Real estate development company website showcasing multi-generational brand legacy"
                    }
                }
            ]
        }
    };

    return (
        <>
            <SEO 
                title="Web Development Services | Custom Website Development"
                description="Professional web development services by Agilux Solution. Custom websites including Structura, Yellowspot, and Aaryaneev projects using modern web technologies."
                keywords="web development, custom website development, responsive web design, e-commerce development, corporate website development, web development company, modern web technologies, website design"
                canonical="/webdevelopment"
                structuredData={webDevStructuredData}
            />
            <section>
                <div className="AppDevelopmentProjectContainer">
                    <div className="TopContainer">
                        <div>
                            <h4>/ Web Development</h4>
                            <div style={{ display: "flex", justifyContent: "space-Between" }}>
                                <h2>Web Solutions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="CardContinerPadding">
                        <p>Coming Soon</p>
                        {/* <div className="ProjectsCards">
                            {WebDevelopmentProjetsData.map((item, index) => (
                                <div className="ProjectCard" key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay={`${index * 100}`}>
                                    <div className="ProjectimageContiner">
                                        <img src={item.image} style={{ width: "100%" }} alt={`${item.title} Web Development Project - Agilux Solution Web Development Services`} loading="lazy"/>
                                    </div>
                                    <p>/ {item.title}</p>
                                    <br />
                                    <p>{item.desctiption}</p>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default WebDevelopment