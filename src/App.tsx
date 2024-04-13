
import Header from './components/Header/Header.tsx';
import './App.css'
import Parallax from './components/Parallax/Parallax.tsx'
import Tabs from './components/Tabs/Tabs.tsx';
import ContactUs from './components/Lateral-Bar/LateralBar.tsx';
import Experiencia from './components/Experiencia/Experiencia.tsx';

function App() {
  const isMobile = window.innerWidth <= 768;
  const tabs = [
    {
        title: 'Project1', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc sed velit dignissim viverra non id massa. Aenean elit ante, malesuada ac auctor vitae, congue non ante.',
        link: 'https://www.google.com',
        github: 'https://www.github.com',
    }, 
    {
      title: 'Project2', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc sed velit dignissim viverra non id massa. Aenean elit ante, malesuada ac auctor vitae, congue non ante.',
      link: 'https://www.google.com',
      github: 'https://www.github.com',
    }, 
    {
      title: 'Project3', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc sed velit dignissim viverra non id massa. Aenean elit ante, malesuada ac auctor vitae, congue non ante.',
      link: 'https://www.google.com',
      github: 'https://www.github.com',
    }, 
  ]
  return (
    <div className='App'>
      {!isMobile && <Parallax />}
      <Header />
      <div id='main-block'>
        <main>
          <section>
            <Tabs title={'Mis Proyectos'} tabs={tabs} />
            <Experiencia />
            <h1>Skills</h1>
          </section>
        </main>
      </div>
      <ContactUs />
    </div>
  )
}

export default App