import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  console.log('Projects data:', projects)

  return (
    <div className="min-h-screen bg-[#1F2B24] text-[#F0EDE3] py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
