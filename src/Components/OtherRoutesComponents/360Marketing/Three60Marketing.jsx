// import React from "react";
// import "./Three60Marketing.css";
// import OtherRoutesCommonHeader from "../OtherRoutesCommonHeader/OtherRoutesCommonHeader";
// import CommonHeader from "../CommonHeader/CommonHeader";
// import Three60MarketingData from "./360MarketingData";
// import { Row, Col } from "antd";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { Link } from "react-router-dom";

// const Three60Marketing = () => {
//     // Function to create URL-friendly slug from service title
//     const createSlug = (title) => {
//         return title
//             .toLowerCase()
//             .replace(/&/g, 'and')
//             .replace(/[^a-z0-9]+/g, '-')
//             .replace(/^-+|-+$/g, '');
//     };
//     return (
//         <div className="Three60MarketingContainer SectionTopPadding" id="three-60-marketing">
//             <div className="Container">
//                 <CommonHeader title="We Serve" description="We make strategy for a projects from it's inception to end." />
//                 <div className="MarginTopMedium">
//                     <div>
//                         <Row>
//                             {Three60MarketingData.map((item, index) => (
//                                 <Col key={index} lg={24} md={24} sm={24} xs={24}>
//                                     <Link to={`/services/${createSlug(item.title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                                         <div className="Animated360ServicesItem">
//                                             <div>
//                                                 <div>
//                                                     <h4>{item.title}</h4>
//                                                 </div>
//                                                 <div className="Animated360ServicesItemImage">
//                                                     <img
//                                                         src={item.image}
//                                                         alt={`${item.title} - Professional ${item.title} Services by Agilux Solution`}
//                                                         loading="lazy"
//                                                         width="400"
//                                                         height="250"
//                                                         style={{ aspectRatio: '16/10', objectFit: 'cover', width: '100%', height: 'auto' }}
//                                                     />
//                                                 </div>
//                                                 <div className="ViewMoreButton">
//                                                     <button className="Button"><span><IoIosArrowRoundForward /></span></button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Three60Marketing;



import React from "react";
import "./Three60Marketing.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CommonHeader from "../CommonHeader/CommonHeader";
import Three60MarketingData from "./360MarketingData";
import { Link } from "react-router-dom";
import Technologies from "../../Technologies/Technologies";
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
    return (
        <>
        <div className="Three60MarketingContainer SectionTopPadding" id="three-60-marketing">
            <div className="Container">
                <CommonHeader title="We Serve" description="
                We make strategy for a projects from it's inception to end." />
                <div className="ServicesTopActions">
                    <div className="ActionsRight">
                        <Link to="/servicesitems" className="ViewAllLink">
                            <span className="ViewAllText">View All Services</span>
                            <span className="ArrowIcon"><IoIosArrowRoundForward /></span>
                        </Link>
                    </div>
                </div>
                <div className="MarginTopMedium">
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
                        {Three60MarketingData
                            .filter((item) => {
                                const t = item.title.toLowerCase().replace(/\s+/g, ' ').trim();
                                const featuredSet = new Set([
                                    "digital marketing",               // Social Media Marketing alias
                                    "website development",
                                    "app development",
                                    "seo services",
                                    "erp software development",
                                    "cms development"
                                ]);
                                return featuredSet.has(t);
                            })
                            .map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="NewServiceCard">
                                    <div className="NewServiceImage">
                                        <img
                                            src={Array.isArray(item.image) ? item.image[0] : item.image}
                                            alt={`${item.title} Services by Agilux Solution`}
                                            loading="lazy"
                                        />
                                        <div className="NewServiceOverlay">
                                            <h4 className="NewServiceOverlayTitle">{item.title}</h4>
                                            <Link
                                                to={`/servicesitems/${createSlug(item.title)}`}
                                                className="NewServiceCTA"
                                                aria-label={`View ${item.title}`}
                                            >
                                                <IoIosArrowRoundForward />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
        {/* <Technologies /> */}
        
        </>
    );
};

export default Three60Marketing;
