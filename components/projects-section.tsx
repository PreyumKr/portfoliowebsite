import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"
import Link from "next/link"

export function ProjectsSection() {
  // Sort by date (newest first) and get top 3
  const topProjects = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">Checkout some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 border-2 border-gray-800 text-gray-800 dark:border-gray-400 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
