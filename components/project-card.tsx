"use client"

import { ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    technologies: string[]
    link: string
    codelink: string
    images: string[]
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [disableTransition, setDisableTransition] = useState(false)

  // Duplicate the first image at the end for seamless looping
  const loopImages = project.images.length > 1 
    ? [...project.images, project.images[0]]
    : project.images

  useEffect(() => {
    // Only cycle if there are multiple images
    if (project.images.length <= 1) return

    // Random delay between 3-5 seconds for this specific card
    const randomDelay = Math.random() * 2000 + 3000

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = prev + 1

        // When we reach the duplicate image at the end
        if (nextIndex >= loopImages.length) {
          // Disable transition for instant reset
          setDisableTransition(true)
          // Reset to 0 after a tiny delay (allows current frame to render)
          setTimeout(() => {
            setCurrentImageIndex(0)
            setDisableTransition(false)
          }, 10)
          // Return nextIndex so transition is disabled
          return nextIndex
        }

        return nextIndex
      })
    }, randomDelay)

    return () => clearInterval(interval)
  }, [project.images.length])

  const carouselStyle: React.CSSProperties = {
    // Use modulo to handle the overflow gracefully
    transform: `translateX(-${(currentImageIndex % loopImages.length) * 100}%)`,
    transition: disableTransition ? 'none' : 'transform 700ms ease-in-out',
  }

  return (
    <div className="bg-gray-50 dark:bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 group">
        {/* Image carousel container */}
        <div
          className="flex h-full"
          style={carouselStyle}
        >
          {loopImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-fill group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Image indicator dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === (currentImageIndex % project.images.length) ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto pt-4">
          <a
            href={project.link} target="_blank"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 font-medium text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
          <a
            href={project.codelink} target="_blank"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium text-sm"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
