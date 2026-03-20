"use client"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-4 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-600 dark:text-gray-400">
              Hi, I'm <span className="text-gray-800 dark:text-gray-200">Preyum Kumar</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 w-full md:max-w-2xl mx-auto md:mx-0">
              Full Stack AI Engineer | MLOps | Open Source Enthusiast
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 w-full md:max-w-xl mx-auto md:mx-0 text-center md:text-justify">
             Transforming complex data into interactive experiences. I am a Full Stack Developer with a specialized background in AI, capable of embedding real-time image processing and LLM-driven features directly into modern web architectures. I don't just build websites; I build systems that think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 w-full">
              <a
                href="#projects"
                className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-gray-800 text-gray-800 dark:border-gray-400 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Picture Area */}
          <div className="flex-shrink-0 flex items-center justify-center">
            {/*
              Mobile  : circle  (w-52 h-52 rounded-full)
              Tablet  : portrait rectangle  (w-56 h-72 rounded-2xl)
              Large   : bigger portrait rectangle  (w-64 h-80 rounded-2xl)
              XL+     : even bigger  (w-72 h-96 rounded-2xl)
              object-top keeps the face visible in all crops.
            */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96 md:rounded-2xl overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-xl bg-gray-200 dark:bg-gray-800">
              {/* Replace the src below with your actual photo path, e.g. "/profile.jpg" */}
              <img
                src="/profile.png"
                alt="Preyum Kumar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
