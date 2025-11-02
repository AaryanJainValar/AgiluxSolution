import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for triggering animations when element enters viewport
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Percentage of element visibility to trigger (default: 0.1)
 *                                     0.1 = 10%, 0.5 = 50%, 1.0 = 100%
 * @param {string} options.rootMargin - Margin around viewport (default: "0px 0px -100px 0px")
 *                                      Format: "top right bottom left"
 *                                      Negative values trigger animation before element enters viewport
 * @param {number} options.delay - Delay in ms before triggering animation (default: 100)
 * @param {boolean} options.once - Whether to trigger animation only once (default: true)
 *                                 true = animate once when entering viewport
 *                                 false = animate every time element enters/exits viewport
 * 
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, animation state]
 * 
 * @example
 * // Basic usage
 * const [containerRef, isVisible] = useViewportAnimation();
 * return <div ref={containerRef} className={isVisible ? 'animate' : ''}>Content</div>
 * 
 * @example
 * // Custom options
 * const [containerRef, isVisible] = useViewportAnimation({
 *   threshold: 0.3,      // Trigger when 30% visible
 *   rootMargin: "0px",   // No margin
 *   delay: 200,          // 200ms delay
 *   once: false          // Animate every time
 * });
 */
const useViewportAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = "0px 0px -100px 0px",
        delay = 100,
        once = true
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Check if we should animate based on 'once' option
                        if (once && hasAnimated.current) {
                            return;
                        }

                        // Trigger animation with delay
                        setTimeout(() => {
                            setIsVisible(true);
                            hasAnimated.current = true;
                        }, delay);
                    } else if (!once) {
                        // Reset animation if 'once' is false
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold,
                rootMargin
            }
        );

        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, rootMargin, delay, once]);

    return [elementRef, isVisible];
};

export default useViewportAnimation;

