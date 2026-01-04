import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Technologies.css';
import TechnologyImages, { webTechnologyImages, seoTechnologyImages, ecommerceTechnologyImages, ecommerceDevTechnologyImages } from './technologiesData';



const Technologies = () => {
    const [showAppImages, setShowAppImages] = useState(false);
    const [showWebImages, setShowWebImages] = useState(false);
    const [showSeoImages, setShowSeoImages] = useState(false);
    const [showEcommDevImages, setShowEcommDevImages] = useState(false);
    const [showEcommListImages, setShowEcommListImages] = useState(false);
    const appImages = TechnologyImages.filter((item) => item.category === 'mobile');
    const handleCardClick = (e) => {
        const target = e.target;
        const blocked = target.closest('.SegmentControl') || target.closest('.TechImages') || target.closest('.CollapseToggle');
        if (blocked) return;
        setShowAppImages((prev) => !prev);
    };
    const handleKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setShowAppImages((prev) => !prev);
        }
    };


    return (
        <>
            <div style={{ padding: '20px' }}>
                <div className="Technologiesheading">
                    <h4 style={{ fontSize: '2rem', marginBottom: '20px' }}>Technologies We Use</h4>
                </div>
                <div className="TechnologiesContainer">
                    <div
                        className="TechCard"
                        onClick={handleCardClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={handleKey}
                    >
                        <div className="TechHeader">
                            <div className="TechHeaderMain">
                                <div>
                                    <h4>App Development</h4>
                                    <p>Cross-platform and native mobile solutions</p>
                                </div>
                                <motion.button
                                    className={`CollapseToggle ${!showAppImages ? 'collapsed' : ''}`}
                                    onClick={() => setShowAppImages((prev) => !prev)}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Toggle technologies"
                                >
                                    ▲
                                </motion.button>
                            </div>
                        </div>
                        <AnimatePresence initial={false}>
                            {showAppImages && (
                                <motion.div
                                    className="TechImages"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {appImages.map((item) => (
                                        <motion.div
                                            className="TechImageItem"
                                            key={item.label}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.94, rotate: 1 }}
                                        >
                                            <img src={item.src} alt={`${item.label} logo`} />
                                            <span>{item.label}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div>
                    <div className="TechnologiesContainer">
                        <div
                            className="TechCard"
                            onClick={(e) => {
                                const target = e.target;
                                const blocked = target.closest('.TechImages') || target.closest('.CollapseToggle');
                                if (blocked) return;
                                setShowWebImages((prev) => !prev);
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setShowWebImages((prev) => !prev);
                                }
                            }}
                        >
                            <div className="TechHeader">
                                <div className="TechHeaderMain">
                                    <div>
                                        <h4>Web Development</h4>
                                        <p>Modern web applications and frameworks</p>
                                    </div>
                                    <motion.button
                                        className={`CollapseToggle ${!showWebImages ? 'collapsed' : ''}`}
                                        onClick={() => setShowWebImages((prev) => !prev)}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Toggle web technologies"
                                    >
                                        ▲
                                    </motion.button>
                                </div>
                            </div>
                            <AnimatePresence initial={false}>
                                {showWebImages && (
                                    <motion.div
                                        className="TechImages"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {webTechnologyImages.map((item) => (
                                            <motion.div
                                                className="TechImageItem"
                                                key={item.label}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.94, rotate: 1 }}
                                            >
                                                <img src={item.src} alt={`${item.label} logo`} />
                                                <span>{item.label}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="TechnologiesContainer">
                        <div
                            className="TechCard"
                            onClick={(e) => {
                                const target = e.target;
                                const blocked = target.closest('.TechImages') || target.closest('.CollapseToggle');
                                if (blocked) return;
                                setShowSeoImages((prev) => !prev);
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setShowSeoImages((prev) => !prev);
                                }
                            }}
                        >
                            <div className="TechHeader">
                                <div className="TechHeaderMain">
                                    <div>
                                        <h4>SEO Services</h4>
                                        <p>On-page, off-page, technical SEO tools</p>
                                    </div>
                                    <motion.button
                                        className={`CollapseToggle ${!showSeoImages ? 'collapsed' : ''}`}
                                        onClick={() => setShowSeoImages((prev) => !prev)}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Toggle web technologies"
                                    >
                                        ▲
                                    </motion.button>
                                </div>
                            </div>
                            <AnimatePresence initial={false}>
                                {showSeoImages && (
                                    <motion.div
                                        className="TechImages"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {seoTechnologyImages.map((item) => (
                                            <motion.div
                                                className="TechImageItem"
                                                key={item.label}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.94, rotate: 1 }}
                                            >
                                                <img src={item.src} alt={`${item.label} logo`} />
                                                <span>{item.label}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="TechnologiesContainer">
                        <div
                            className="TechCard"
                            onClick={() => setShowEcommDevImages(prev => !prev)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="TechHeader">
                                <div className="TechHeaderMain">
                                    <div>
                                        <h4>E-Commerce Development</h4>
                                        <p>Storefronts, payments, platforms & integrations</p>
                                    </div>

                                    <motion.button
                                        className={`CollapseToggle ${!showEcommDevImages ? 'collapsed' : ''}`}
                                        onClick={() => setShowEcommDevImages(prev => !prev)}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        ▲
                                    </motion.button>
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {showEcommDevImages && (
                                    <motion.div
                                        className="TechImages"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {ecommerceDevTechnologyImages.map((item) => (
                                            <motion.div
                                                className="TechImageItem"
                                                key={item.label}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <img src={item.src} alt={item.label} />
                                                <span>{item.label}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="TechnologiesContainer">
                        <div
                            className="TechCard"
                            onClick={(e) => {
                                const target = e.target;
                                const blocked = target.closest('.TechImages') || target.closest('.CollapseToggle');
                                if (blocked) return;
                                setShowEcommListImages((prev) => !prev);
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setShowEcommListImages((prev) => !prev);
                                }
                            }}
                        >
                            <div className="TechHeader">
                                <div className="TechHeaderMain">
                                    <div>
                                        <h4>E-Commerce Listing</h4>
                                        <p>Marketplace/catalog listing, pricing, images, attributes</p>
                                    </div>
                                    <motion.button
                                        className={`CollapseToggle ${!showEcommListImages ? 'collapsed' : ''}`}
                                        onClick={() => setShowEcommListImages((prev) => !prev)}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Toggle web technologies"
                                    >
                                        ▲
                                    </motion.button>
                                </div>
                            </div>
                            <AnimatePresence initial={false}>
                                {showEcommListImages && (
                                    <motion.div
                                        className="TechImages"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {ecommerceTechnologyImages.map((item) => (
                                            <motion.div
                                                className="TechImageItem"
                                                key={item.label}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.94, rotate: 1 }}
                                            >
                                                <img src={item.src} alt={`${item.label} logo`} />
                                                <span>{item.label}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Technologies;
