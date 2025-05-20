import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[#1F2B24] text-[#F0EDE3]">
      <div className="max-w-4xl w-full text-center px-6 sm:px-12 md:px-20 lg:px-32">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;