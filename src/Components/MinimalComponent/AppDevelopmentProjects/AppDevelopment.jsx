import React, { useEffect } from "react";
import "./AppDevelopmentProjectContainer.css"
import SEO from '../../SEO/SEO';
import Clotheslyne from "./Clotheslyne.webp"
import Expoleads from "./Expoleads.png"
import CrossFit from "./CrossFit.png"
import AMCmaster from "./AMCmaster.png"
import BakeryShop from "./BakeryShop.jpeg"
import crossfitpromo from "./crossfitpromo.mp4"
import clothslynepromo from "./clothslynepromo.mp4"
import Exploleads from "./Exploleads.mp4"
import BakeryShopVideo from "./BakeryShop.mp4"
import AMCMaster from "./AMCMaster.mp4"
const AppDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const AppDevelopmentProjetsData = [
        {
            title: "Clotheslyne",
            video: clothslynepromo,
            image: Clotheslyne,

            desctiption: "Say goodbye to laundry day hassles with Clotheslyne, the ultimate laundry service app for busy individuals and businesses. Easily book laundry services, schedule convenient pick-up and drop-off times, and enjoy the ease of online payments—all from your phone. Whether you need a quick wash or full-service care, Clotheslyne ensures your clothes are returned fresh and clean. Designed for both users and laundry service owners, our app makes laundry management simple, efficient, and stress-free."
        },
        {
            title: "Expoleads",
            image: Expoleads,
            video: "https://webtesting-upload.vercel.app/assets/Expoleads-kdB5gNVR.mp4",
            desctiption: "Expo Lead Connect is a dynamic mobile app revolutionizing event networking and lead management. Traditional business card exchanges with its QR Scanner, effortlessly capturing and organizing data on Name, Email, Address, Phone, and Services. Utilizing OCR Reader technology, the app seamlessly integrates with Firebase to enhance contact management, allowing users to export contact lists to CSV and easily save contacts to their phone book."
        },
        {
            title: "Crossfit",
            video: "https://webtesting-upload.vercel.app/assets/Gym-2_ae16vE.mp4",
            image: CrossFit,
            desctiption: "Unlock your full fitness potential with CROSSFIT, the ultimate app for gym members and trainers alike. Exclusively designed for trainers to manage their clients, CROSSFIT allows trainers to easily add members, schedule personalized fitness classes, and create tailored diet plans. Members can effortlessly track their workouts, view their class schedules, and access a library of fitness videos, including Zumba and other popular routines. Additionally, the app offers a convenient marketplace for purchasing fitness products like protein powder and supplements, ensuring all your fitness needs are met in one place."
        },
        // {
        //     title: "Prepseed",
        //     desctiption: "Prepseed is an all-in-one educational app designed to streamline school management and enhance communication between principals, teachers, students, and parents. Tailored to each user role, Prepseed offers a comprehensive set of modules, including attendance tracking, assignment management, direct messaging, test administration, fee processing, and event coordination. Whether you're overseeing school operations, teaching, learning, or staying informed as a parent, Prepseed provides a seamless, user-friendly experience that keeps everyone connected and organized."
        // },
        {
            title: "AMC Master",
            image: AMCmaster,
            video: "https://webtesting-upload.vercel.app/assets/AMC-Cg86MIPU.mp4",
            desctiption: "Annual Maintenance Contract is a contract or project management app. Users can analyze their contract amount with all estimation of employees, raw material and supplier amount with charts and graphs."
        },
        {
            title: "Bakery Shop",
            image: BakeryShop,
            video: "https://webtesting-upload.vercel.app/assets/Bakery%20Shop-C6cBzlbh.mp4",
            desctiption: "Bakery Shop is the perfect app for both bakery owners and customers. As an owner, easily manage your orders with a clear view of pending and completed tasks, ensuring smooth operations. For customers, Bakery Shop offers a delightful browsing experience where you can select your favorite cakes and bakery items from an extensive menu. Once you've made your choices, simply complete your order with secure online payments, and enjoy your treats in no time."
        }
    ]
    const appDevStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobile App Development Services",
        "description": "Professional mobile app development services for iOS and Android platforms. Custom mobile applications including Clotheslyne, Expoleads, Crossfit, AMC Master, and Bakery Shop apps.",
        "provider": {
            "@type": "Organization",
            "name": "Agilux Solution",
            "url": "https://www.agiluxsolution.com"
        },
        "serviceType": "Mobile App Development",
        "areaServed": "India",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Mobile App Development Portfolio",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "SoftwareApplication",
                        "name": "Clotheslyne",
                        "description": "Laundry service app for busy individuals and businesses"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "SoftwareApplication",
                        "name": "Expoleads",
                        "description": "Event networking and lead management mobile app"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "SoftwareApplication",
                        "name": "Crossfit",
                        "description": "Fitness app for gym members and trainers"
                    }
                }
            ]
        }
    };

    return (
        <>
            <SEO 
                title="Mobile App Development Services | iOS & Android App Development"
                description="Professional mobile app development services by Agilux Solution. Custom iOS and Android applications including Clotheslyne, Expoleads, Crossfit, AMC Master, and Bakery Shop apps."
                keywords="mobile app development, iOS app development, Android app development, custom mobile apps, app development company, mobile application development, cross-platform app development, native app development"
                canonical="/appdevelopment"
                structuredData={appDevStructuredData}
            />
            <section>
                <div className="AppDevelopmentProjectContainer">
                    <div className="TopContainer">

                        <div>
                            <h4>/ App Development</h4>
                            <div style={{ display: "flex", justifyContent: "space-Between", }}>
                                <h2>App Innovation</h2>
                            </div>
                        </div>
                        {/* <div className="ImageDesignCrop">
                            <img src={AppDev} alt="" />
                        </div> */}
                    </div>
                    <div className="CardContinerPadding">
                        <div className="ProjectsCards">
                            {AppDevelopmentProjetsData.map((item, index) => (
                                <div className="ProjectCard" key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay={`${index * 100}`}>
                                    <video
                                        id="PcOnly"
                                        x
                                        src={item.video}
                                        loop={false}
                                        autoPlay
                                        muted
                                        playsInline
                                        style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                    />
                                    <br />
                                    <br />
                                    {/* <div className="ProjectimageContiner">
                                        <img src={item.image} alt={`${item.title} Mobile App - Agilux Solution App Development Project`} style={{ width: "100%" }} />
                                    </div> */}
                                    <p>/ {item.title}</p>
                                    <br />
                                    <p>{item.desctiption}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppDevelopment