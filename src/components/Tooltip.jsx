import { useState, useEffect } from 'react';

export default function Tooltip({ children, tooltipText }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 1000); // Hide tooltip after 1 second if mouse leaves
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <div 
            className="tooltip"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <span 
                className="tooltiptext" 
                style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: isVisible ? 'block' : 'none'
                }}
            >
                {tooltipText}
            </span>
        </div>
    );
}
