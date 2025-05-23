import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="flex">
      <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <MainPanel currentSection={currentSection} />
    </div>
  )
}

export default App
