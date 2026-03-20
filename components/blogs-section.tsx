import { blogs } from "@/lib/data"
import { BlogCard } from "./blog-card"

export function BlogsSection() {
  return (
    <section id="blogs" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Latest Blog Posts</h2>
            <p className="text-gray-600 dark:text-gray-400">Tips, tutorials, and insights from my journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <div className="text-center pt-8">
            <a
              href="#"
              className="inline-block px-8 py-3 border-2 border-gray-800 text-gray-800 dark:border-gray-400 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold"
            >
              Read All Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
