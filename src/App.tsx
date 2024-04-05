import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.tsx';
import './App.css'
import Parallax from './components/Parallax/Parallax.tsx'
import Tabs from './components/Tabs/Tabs.tsx';

function App() {
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
    <div className='App'>
      <div className={`${isScrolled ? 'fade-out' : ''} parallax`}>
        <Parallax />
      </div>
      
      <Header />
      <div id='main-block'>
        <main>
          <section>
            <Tabs title={'Mis Proyectos'} />
            <Tabs title={'Mi Carrera'} />
            <Tabs title={'Mi Persona'} />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App