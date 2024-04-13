import React, { useState } from 'react';
import './Tabs.css';
import githubIcon from 'assets/github.png';
import placeHolder from 'assets/placeholder.webp';

type Tab = {
    title: string;
    description: string;
    link: string;
    github: string;
};

type Props = {
    title: string;
    tabs: Tab[];
};

const Tabs = ({title, tabs}: Props ) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [animationClass, setAnimationClass] = useState('fade-in-right');
    

    const handleNext = () => {
        setAnimationClass('fade-out-left');
        setTimeout(() => {
            setCurrentTab((currentTab + 1) % tabs.length);
            setAnimationClass('fade-in-right');
        }, 500);
    };

    const handlePrev = () => {
        setAnimationClass('fade-out-right');
        setTimeout(() => {
            setCurrentTab((currentTab - 1 + tabs.length) % tabs.length);
            setAnimationClass('fade-in-left');
        }, 500);
    };

    return (
        <div className="tabs" >
            <h1 id={title}>{title}</h1>
            <div className='tabContainer' id={tabs[currentTab].title}>
                <div className='tabRow'>
                    <button onClick={handlePrev}>&lt;&lt;</button>
                    <h2 className={animationClass}>{tabs[currentTab].title}</h2>
                    <button onClick={handleNext}>&gt;&gt;</button>
                </div>
                
                <div className={`${animationClass} content`}>
                    <div>
                        <p>{tabs[currentTab].description}</p>
                        <img src={githubIcon} alt='placeholder' />
                    </div>
                    <img src={placeHolder} alt='placeholder' />
                </div>
            </div>
        </div>
    );
};



export default Tabs;