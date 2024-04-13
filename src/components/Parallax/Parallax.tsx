import { useState, useEffect, useRef } from 'react';
import React from 'react';
import "./Parallax.css";
import server1 from 'assets/server1.webp';
import server2 from 'assets/server2.webp';
import bgImg from 'assets/background.webp';
import mist3 from 'assets/mist3.webp';
import mistBase from 'assets/mistbase.webp';
export default function Parallax() {
  let parallaxEnabled = true;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, rotation: 0, clientX: 0 });

  const mistBaseRef = React.useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLImageElement | null>(null);
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);
  const mist3Ref = useRef<HTMLImageElement | null>(null);
  
  useEffect(() => {
    mistBaseRef.current = document.querySelector('.mist-base');
    textRef.current = document.querySelector('.text');
    img1Ref.current = document.querySelector('.img-1');
    img2Ref.current = document.querySelector('.img-2');
    mist3Ref.current = document.querySelector('.mist-3');
  }, []);


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
    if (!parallaxEnabled || isScrolled) {
      return {};
    }

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

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
      <div id="parallax" className={`${isScrolled ? 'fade-out' : ''}`}>
        <img src={bgImg} className="bg-img"/>
        <img ref={mistBaseRef} src={mistBase} className="mist-base parallax" style={getTransformStyle(mistBaseRef.current,0.10, 0.09, 0.8, 0.03)} />
        <div className="text parallax">
          <h1>D<span>I</span>E<span>GO</span></h1>
          <h2>Paredero Blanco</h2>
          <h2>Software Developer</h2>
        </div>
        <img ref={img1Ref} src={server1} className="img-1 parallax" style={getTransformStyle(img1Ref.current,0.06, 0.05, 0.05, 0.11)} />
        <img ref={img2Ref} src={server2} className="img-2 parallax" style={getTransformStyle(img2Ref.current,0.10, 0.09, 0.8, 0.05)} />
        <img ref={mist3Ref} src={mist3} className="mist-3 parallax" style={getTransformStyle(mist3Ref.current,0.10, 0.09, 0.8, 0.2)} />
      </div>
  );
}
/*getTransformStyle(textRef.current, 0.06, 0.06, 0, 0.08)*/