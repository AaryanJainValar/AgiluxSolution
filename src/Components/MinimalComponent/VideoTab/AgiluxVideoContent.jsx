import React, { useState, useRef } from "react";
import { Row, Col, Modal } from "antd";

import "./VideosContainer.css"
import LogoAnimation from "./Logo Animation.mp4"

const AgiluxVideoContent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");
    const videoRef = useRef(null);

    const showModal = (videoSrc) => {
        setCurrentVideo(videoSrc); // Set the video source for the modal
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        // console.log("Modal close triggered");
        setIsModalVisible(false);
        if (videoRef.current) {
            videoRef.current.muted = true;
        }
        setCurrentVideo("");
    };


    return (
        <>
            <section>
                <div className="TopContainer">
                    <div>
                        <h2>/ Video Editing</h2>
                    </div>
                </div>

                <div className="VideosContainer">
                    <Row>
                        <Col lg={6} md={12} >
                            <div onClick={() => showModal("https://webtesting-upload.vercel.app/assets/Educational%20Niche-BgUrm4yI.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/Educational%20Niche-BgUrm4yI.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                        <Col lg={6} md={12} >
                            <div onClick={() => showModal("https://webtesting-upload.vercel.app/assets/Short%20Form-wjSPI3W0.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/Short%20Form-wjSPI3W0.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                        <Col lg={6} md={12} >
                            <div onClick={() => showModal("https://webtesting-upload.vercel.app/assets/Delivery%20Ads-DmSO92if.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/Delivery%20Ads-DmSO92if.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                        <Col lg={6} md={12} >
                            <div onClick={() => showModal("https://webtesting-upload.vercel.app/assets/Video3-C9klMcQl.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/Video3-C9klMcQl.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={24} >

                            <div onClick={() => showModal("https://webtesting-upload.vercel.app/assets/Video2-QS4DPx8A.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/Video2-QS4DPx8A.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                        <Col lg={6} md={12} >
                            <div className="AbsoluteVideo" onClick={() => showModal("https://webtesting-upload.vercel.app/assets/sample6-B3ArTujS.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/sample6-B3ArTujS.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                        <Col lg={6} md={12} >
                            <div onClick={() => showModal(LogoAnimation)}>
                                <video
                                    x
                                    src={LogoAnimation}
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6} md={12} >

                            <div onClick={() => showModal("https://webtesting-upload.vercel.app/assets/Portfolio%20%20show%20reel-DpLpG9dY.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/Portfolio%20%20show%20reel-DpLpG9dY.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                        <Col lg={6} >

                            <div onClick={() => showModal("https://webtesting-upload.vercel.app/assets/sample9-evH8vlBu.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/sample9-evH8vlBu.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>
                        <Col lg={6}>

                        </Col>
                        <Col lg={6} md={12} >

                            <div onClick={() => showModal("https://webtesting-upload.vercel.app/assets/sample10-g_NUUOSu.mp4")}>
                                <video
                                    x
                                    src="https://webtesting-upload.vercel.app/assets/sample10-g_NUUOSu.mp4"
                                    loop={true}
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                                />
                            </div>
                        </Col>

                    </Row>

                </div>
                <Modal
                    open={isModalVisible}
                    onCancel={handleCancel}
                    // footer={null}
                    style={{ top: 20 }}
                    bodyStyle={{
                        padding: 0,
                        backgroundColor: "black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {currentVideo && (
                        <video
                            ref={videoRef}
                            src={currentVideo}
                            controls
                            autoPlay
                            style={{ width: "100%", height: "auto" }}
                        />
                    )}
                </Modal>
            </section>
        </>
    )
}
export default AgiluxVideoContent