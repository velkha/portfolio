import React, { useState } from 'react';
import './Tabs.css';
const Tabs = ({title}: {title: string}) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [animationClass, setAnimationClass] = useState('fade-in-right');
    const tabs = [
        {name: 'Project1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc sed velit dignissim viverra non id massa. Aenean elit ante, malesuada ac auctor vitae, congue non ante.'}, 
        {name: 'Project2', content: 'Lorem ipsum dolor sit amet, conlit. Curabitur vitae nunc sed velit dignissim viverra non id massa. Aenean elit ante, malesuada ac auctor vitae, congue non ante.'},
        {name: 'Project3', content: 'Lorem ipsum dolor sit ametvelit dignissim viverra non id massa. Aenean elit ante, malesuada ac auctor vitae, congue non ante..'},
    ]

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
        <div className="tabs">
            <h1>{title}</h1>
            <div className='tabContainer'>
                <div className='tabRow'>
                    <button onClick={handlePrev}>&lt;&lt;</button>
                    <h2 className={animationClass}>{tabs[currentTab].name}</h2>
                    <button onClick={handleNext}>&gt;&gt;</button>
                </div>
                
                <div className={`${animationClass} content`}>
                    <p>{tabs[currentTab].content}</p>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                </div>
            </div>
        </div>
    );
};



export default Tabs;