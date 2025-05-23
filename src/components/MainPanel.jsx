import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function MainPanel({ currentSection }) {
  return (
    <main className="ml-16 p-6 min-h-screen bg-[#121212] text-[#E3FDFD] transition-all duration-300">
      {currentSection === 'home' && <Home />}
      {currentSection === 'about' && <About />}
      {currentSection === 'skills' && <Skills />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'contact' && <Contact />}
    </main>
  );
}

export default MainPanel;
