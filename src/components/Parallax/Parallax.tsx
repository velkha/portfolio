import React, { useState, useEffect } from 'react';
import "./Parallax.css";
import server1 from 'assets/server1.png';
import server2 from 'assets/server2.png';
import bgImg from 'assets/background.jpg';
import mist from 'assets/mist1.png';
import mist3 from 'assets/mist3.png';
import blue from 'assets/blue.png';
import mistBase from 'assets/mistbase.png';
import mistBase2 from 'assets/mistbase2.png';
import red from 'assets/red.png';




export default function Parallax() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, rotation: 0, clientX: 0 });

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      const xValue = e.clientX - window.innerWidth / 2; 
      const yValue = e.clientY - window.innerHeight / 2;
      const rotation = (xValue / (window.innerWidth / 2)) * 20;
      setMousePosition({ x: xValue, y: yValue, rotation, clientX: e.clientX });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getTransformStyle = (element: HTMLElement|null, speedX: number, speedY: number, speedZ: number, rotationSpeed: number)=> {

    const { x, y, rotation, clientX } = mousePosition;
    let zValue = 0;
    if(element != null) {
        const isInLeft = parseFloat(getComputedStyle(element).left)<window.innerWidth/2?1:-1;
        zValue = (clientX - parseFloat(getComputedStyle(element).left))*isInLeft*0.1;
    }
    return {
      transform: `perspective(2300px) 
                  translateZ(${zValue * speedZ}px) 
                  rotateY(${rotation * rotationSpeed}deg) 
                  translateX(calc(-50% + ${x * speedX}px)) 
                  translateY(calc(-50% + ${y * speedY}px))`
    };
  };

  return (
    <div id="parallax">
      <img src={bgImg} className="bg-img"/>
      <img src={mistBase} className="mist-base parallax" style={getTransformStyle(document.querySelector('.mist-base'),0.10, 0.09, 0.8, 0.03)} />
      <img src={mist} className="mist-1 parallax" style={getTransformStyle(document.querySelector('.mist-1'),0.30, 0.39, 0.8, 0.05)} />
      <div className="text parallax" style={getTransformStyle(document.querySelector('.text'), 0.06, 0.06, 0, 0.08)}>
        <h1>D<span>I</span>E<span>GO</span></h1>
        <h2>Paredero Blanco</h2>
      </div>
      <img src={server1} className="img-1 parallax" style={getTransformStyle(document.querySelector('.text'),0.06, 0.05, 0.05, 0.11)} />
      <img src={red} className="light-blue parallax" style={getTransformStyle(document.querySelector('.light-blue'),0.13, 0.09, 0.8, 0.13)} />
      <img src={server2} className="img-2 parallax" style={getTransformStyle(document.querySelector('.text'),0.10, 0.09, 0.8, 0.05)} />
      <img src={blue} className="light-red parallax" style={getTransformStyle(document.querySelector('.light-red'),0.7, 0.03, 0.04, 0.17)} />

      <img src={mist3} className="mist-3 parallax" style={getTransformStyle(document.querySelector('.mist-3'),0.10, 0.09, 0.8, 0.2)} />
      <img src={mist} className="mist-4 parallax" style={getTransformStyle(document.querySelector('.mist-4'),0.10, 0.09, 0.8, 0.2)} />
      <img src={mistBase2} className="mist-base2 parallax" style={getTransformStyle(document.querySelector('.mist-base2'),0.20, 0.15, 0.8, 0.2)} />
    </div>
  );
}
/*

      <img src={mist2} className="mist-2 parallax" style={getTransformStyle(document.querySelector('.mist-2'),0.10, 0.09, 0.8, 0.2)} />

      
      */