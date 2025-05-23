function Sidebar({ currentSection, setCurrentSection }) {
  const sections = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <aside className="fixed top-0 left-0 h-full w-16 bg-[#1B1E18] flex flex-col items-center py-6 gap-4 shadow-lg">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setCurrentSection(section)}
          className={`w-10 h-10 rounded-full ${
            currentSection === section
              ? 'bg-lime-400'
              : 'bg-[#333] hover:bg-lime-600'
          } transition-colors`}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </aside>
  )
}

export default Sidebar
