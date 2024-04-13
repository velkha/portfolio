import "./LateralBar.css";
import githubIcon from "assets/github.png";
import linkedinIcon from "assets/linkedin-icon.png";
import React, { useState, useEffect } from 'react';
export default function ContactUs() {
    const [showIconContainer, setShowIconContainer] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 0) {
                setShowIconContainer(true);
            } else {
                setShowIconContainer(false);
            }
        };

        window.addEventListener('scroll', checkScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return(
    <div className={`icon-container ${showIconContainer ? 'show' : 'hide'}`}>
        <img src={githubIcon} alt="GitHub" />
        <img src={linkedinIcon} alt="LinkedIn" />
    </div>
    )
}