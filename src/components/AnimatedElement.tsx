import React, { useEffect, useState, useRef } from 'react';
import { Box, Fade, Grow, Slide, Zoom } from '@mui/material';

type AnimationType = 'fade' | 'grow' | 'slide' | 'zoom';
type SlideDirection = 'up' | 'down' | 'left' | 'right';

interface AnimatedElementProps {
    children: React.ReactNode;
    type?: AnimationType;
    delay?: number;
    duration?: number;
    slideDirection?: SlideDirection;
    threshold?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
    children,
    type = 'fade',
    delay = 0,
    duration = 1000,
    slideDirection = 'up',
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When element is visible
                if (entry.isIntersecting) {
                    // Delay the animation by the specified amount
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);

                    // Unobserve after it's been seen
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: threshold // Trigger when 10% visible by default
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay, threshold]);

    const getAnimation = () => {
        const commonProps = {
            in: isVisible,
            style: { transitionDuration: `${duration}ms` },
            children: <Box>{children}</Box>
        };

        switch (type) {
            case 'fade':
                return <Fade {...commonProps} />;
            case 'grow':
                return <Grow {...commonProps} />;
            case 'slide':
                return <Slide {...commonProps} direction={slideDirection} />;
            case 'zoom':
                return <Zoom {...commonProps} />;
            default:
                return <Fade {...commonProps} />;
        }
    };

    return <Box ref={elementRef}>{getAnimation()}</Box>;
};

export default AnimatedElement;