import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"

interface BlogCardProps {
  blog: {
    id: number
    title: string
    description: string
    date: string
    readTime: string
    image: string
  }
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 transition-colors">
          {blog.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{blog.description}</p>
        <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {blog.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {blog.readTime}
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 font-medium text-sm pt-4"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
