import React from 'react'

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-[#2C3A33] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-[#E3FDFD]">{title}</h3>
        <p className="text-[#F0EDE3] mb-4 flex-grow">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-lime-400 hover:text-lime-300 font-semibold transition duration-200"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
