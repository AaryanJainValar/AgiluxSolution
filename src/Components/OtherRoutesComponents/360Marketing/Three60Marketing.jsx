
import React, { useState, useEffect } from "react";
import "./Three60Marketing.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CommonHeader from "../CommonHeader/CommonHeader";
import Three60MarketingData from "./360MarketingData";
import { Link } from "react-router-dom";
// import Technologies from "../../Technologies/Technologies";
import { IoIosArrowRoundForward } from "react-icons/io";



const Three60Marketing = () => {
    // Function to create URL-friendly slug from service title
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia('(max-width: 768px)');
        const handle = (e) => setIsMobile(e.matches);
        setIsMobile(mq.matches);
        if (mq.addEventListener) mq.addEventListener('change', handle);
        else mq.addListener(handle);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', handle);
            else mq.removeListener(handle);
        };
    }, []);

    const featuredItems = Three60MarketingData.filter((item) => {
        const t = item.title.toLowerCase().replace(/\s+/g, ' ').trim();
        const featuredSet = new Set([
            "digital marketing",
            "website development",
            "app development",
            "seo services",
            "erp software development",
            "cms development"
        ]);
        return featuredSet.has(t);
    });

    return (
        <>
            <div className="Three60MarketingContainer SectionTopPadding" id="three-60-marketing">
                <div className="Container">
                    <CommonHeader
                        title="We Serve"
                        description={<>We<span className="#EAB236"> make strategy for a projects</span> from it's inception to end.</>}
                    />
                        <div className="MarginTopMedium">
                        {isMobile ? (
                            <div className="NewMarketingGrid MobileGrid">
                                {featuredItems.map((item, index) => (
                                    <div key={index} className="NewServiceCard">
                                        <Link
                                            to={`/servicesitems/${createSlug(item.title)}`}
                                            className="NewServiceImageLink"
                                            aria-label={`View ${item.title}`}
                                        >
                                            <div className="NewServiceImage">
                                                <img
                                                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                                                    alt={`${item.title} Services by Agilux Solution`}
                                                    loading="lazy"
                                                />
                                                <div className="NewServiceOverlay">
                                                    <h4 className="NewServiceOverlayTitle">{item.title}</h4>
                                                    <span className="NewServiceCTA" aria-hidden="true">
                                                        <IoIosArrowRoundForward />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={24}
                                slidesPerView={4}
                                speed={1300}
                                loop={true}
                                autoplay={{ delay: 2800, disableOnInteraction: false }}
                                pagination={{ clickable: true }}
                                grabCursor={true}
                                breakpoints={{
                                    0: { slidesPerView: 1.15, spaceBetween: 16, centeredSlides: true },
                                    480: { slidesPerView: 1.25, spaceBetween: 16, centeredSlides: true },
                                    640: { slidesPerView: 1.5, spaceBetween: 18, centeredSlides: true },
                                    768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                                    1024: { slidesPerView: 4 }
                                }}
                            >
                                {featuredItems.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="NewServiceCard">
                                            <Link
                                                to={`/servicesitems/${createSlug(item.title)}`}
                                                className="NewServiceImageLink"
                                                aria-label={`View ${item.title}`}
                                            >
                                                <div className="NewServiceImage">
                                                    <img
                                                        src={Array.isArray(item.image) ? item.image[0] : item.image}
                                                        alt={`${item.title} Services by Agilux Solution`}
                                                        loading="lazy"
                                                    />
                                                    <div className="NewServiceOverlay">
                                                        <h4 className="NewServiceOverlayTitle">{item.title}</h4>
                                                        <span className="NewServiceCTA" aria-hidden="true">
                                                            <IoIosArrowRoundForward />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                        <div className="ServicesTopActions">
                            <div className="ActionsRight">
                                <Link to="/servicesitems" className="ViewAllLink">
                                    <span className="ViewAllText">View All Services</span>
                                    {/* <span className="ArrowIcon"><IoIosArrowRoundForward /></span> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Technologies /> */}

        </>
    );
};

export default Three60Marketing;
