"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    technologies: string[]
    link: string
    images: string[]
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Only cycle if there are multiple images
    if (project.images.length <= 1) return

    // Random delay between 3-5 seconds for this specific card
    const randomDelay = Math.random() * 2000 + 3000

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, randomDelay)

    return () => clearInterval(interval)
  }, [project.images.length])

  const currentImage = project.images[currentImageIndex]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 group">
        {/* Image carousel container */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {project.images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-500"
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
                  index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 font-medium text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
