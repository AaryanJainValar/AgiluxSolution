import React, { useState, useEffect, useRef } from "react";
import "./NavigationBar.css";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import NavigationData from "./NavigationData";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigationRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Routes that should always display the "scrolled" (dark) style by default
    const alwaysScrolledRoutes = ['/servicesitems'];
    const isRouteAlwaysScrolled = alwaysScrolledRoutes.some((route) => location.pathname.startsWith(route));

    // Function to close menu
    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        // Close all submenus when main menu closes
        if (isMenuOpen) {
            setOpenSubmenu(null);
        }
    };

    const handleSubmenuToggle = (itemId, event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpenSubmenu(openSubmenu === itemId ? null : itemId);
    };

    // Handle link click - close menu
    const handleLinkClick = (link, event) => {
        // If it's an internal link, use React Router navigation
        if (link && link.startsWith('/')) {
            event.preventDefault();
            navigate(link);
            closeMenu();
        } else {
            // For external links or hash links, close menu and let default behavior happen
            closeMenu();
        }
    };

    // Handle submenu link click - close menu
    const handleSubmenuLinkClick = (link, event) => {
        // If it's an internal link, use React Router navigation
        if (link && link.startsWith('/')) {
            event.preventDefault();
            navigate(link);
            closeMenu();
        } else {
            // For external links or hash links, close menu and let default behavior happen
            closeMenu();
        }
    };

    // Click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navigationRef.current &&
                !navigationRef.current.contains(event.target) &&
                isMenuOpen
            ) {
                closeMenu();
            }
        };

        // Add event listener when menu is open
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Scroll detection effect
    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // If this route should always look "scrolled", force scrolled styles
            if (isRouteAlwaysScrolled) {
                setIsScrolled(true);
                setIsVisible(true);
                setLastScrollY(currentScrollY);
                return;
            }

            // Check if scrolled more than 100px
            if (currentScrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Check scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide navbar
                setIsVisible(false);
            } else {
                // Scrolling up - show navbar
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        // Add scroll event listener
        window.addEventListener('scroll', controlNavbar);

        // Run once to set initial state based on route / scroll
        controlNavbar();

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY, isRouteAlwaysScrolled]);

    return (
        <div
            ref={navigationRef}
            className={`NavigationBarContainer ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}
            id="navigation-bar"
        >
            <div className="Container">
                <Row>
                    <Col lg={12} xs={12}>
                        <div className="BrandLogoContainer">
                            <Link to="/">
                                <img
                                    src={isScrolled ? "http://res.cloudinary.com/dvo30ytcq/image/upload/v1762110500/career/irkkah5syurqslyyr0jz.png" : "http://res.cloudinary.com/dvo30ytcq/image/upload/v1762110530/career/z1cay2avuek3yeiaenvs.png"}
                                    alt="Agilux Solution - Premier Digital Agency | Web Development, App Development & Social Media Marketing Ahmedabad Logo"
                                    className="logo-image"
                                    width="150"
                                    height="50"
                                    style={{ aspectRatio: '3/1', objectFit: 'contain' }}
                                />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={12} xs={12}>
                        <div className="NavigationControlButtonsContainer">
                            <button
                                className={`hamburger-menu-button ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}
                                onClick={handleMenuToggle}
                                aria-label="Toggle navigation menu"
                            >
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                            </button>
                        </div>
                    </Col>
                </Row>
                <div className={`navigation-container ${isMenuOpen ? 'show' : 'hide'}`}>
                    <div className="navigation-content">
                        <div className="navigation-links">
                            {NavigationData.map((item) => {
                                const hasSubmenu = Array.isArray(item.SubMenu) && item.SubMenu.length > 0;
                                const isSubmenuOpen = openSubmenu === item.id;

                                return (
                                    <div key={item.id} className="nav-item">
                                        <a
                                            href={item.link}
                                            className={`nav-link ${hasSubmenu ? 'has-submenu' : ''}`}
                                            onClick={hasSubmenu
                                                ? (e) => handleSubmenuToggle(item.id, e)
                                                : (e) => handleLinkClick(item.link, e)
                                            }
                                        >
                                            {item.name}
                                            {hasSubmenu ? (
                                                <span className={`nav-icon nav-plus ${isSubmenuOpen ? 'rotated' : ''}`}>
                                                    {isSubmenuOpen ? <LuMinus /> : <LuPlus />}
                                                </span>
                                            ) : (
                                                <IoIosArrowRoundForward className="nav-icon nav-arrow" />
                                            )}
                                        </a>


                                        {hasSubmenu && (
                                            <div className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
                                                {item.SubMenu.map((subItem) => (
                                                    <a
                                                        key={subItem.id}
                                                        href={subItem.link}
                                                        className="submenu-link"
                                                        onClick={(e) => handleSubmenuLinkClick(subItem.link, e)}
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                            <div className="ContactDetailsContainer">
                                {/* <div>
                                    <p><b>Arista Business Space, 109 & 306,<br /> Sindhubhavan Rd, Bodakdev,<br /> Ahmedabad, Gujarat 380059</b></p>
                                </div> */}
                                <div className="SocialMediaLinksContainer">
                                    <ul>
                                        <Link to="https://www.facebook.com/AgiluxSolution" target="_blank">
                                            <li className="Facebook">Facebook</li>
                                        </Link>
                                        <Link to="https://www.instagram.com/agiluxsolution" target="_blank">
                                            <li className="Instagram">Instagram  </li>
                                        </Link>
                                        <Link to="https://linkedin.com/company/agiluxsolution" target="_blank">
                                            <li className="LinkedIn">LinkedIn</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Container */}

        </div>
    );
};

export default NavigationBar;