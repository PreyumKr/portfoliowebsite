import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

export const metadata = {
  title: "All Projects | Preyum Kumar",
  description: "Explore all of my projects and work showcasing my skills in full-stack development, AI, and data engineering.",
}

export default function ProjectsPage() {
  // Sort by date (newest first)
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">All Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A comprehensive collection of my work across web development, AI, and data engineering
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {sortedProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
