export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">Learn more about my background and experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently working as Program Associate II at IITGN R&D, where I specialize in creating and maintaining robust data pipelines. I've developed chatbots capable of intelligent user interactions and work as a data engineer, designing and optimizing data structures to meet evolving pipeline requirements.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I completed my Master of Technology (MTech) in Computer Science and Engineering from Indian Institute of Technology Gandhinagar (IITGN), specializing in Computer Vision (CPI: 8.25). During my studies, I pursued additional courses and projects in Natural Language Processing (NLP), bridging my interests between vision and language models.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I earned my Bachelor of Technology (BTech) in Computer Science from North Eastern Regional Institute of Science and Technology (NERIST) with a CPI of 9.43. This foundation equipped me with strong fundamentals in computer science and problem-solving skills.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 dark:text-gray-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Program Associate II at IITGN R&D</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 dark:text-gray-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">MTech (CSE) from IITGN - CPI 8.25</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 dark:text-gray-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">BTech (CS) from NERIST - CPI 9.43</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 dark:text-gray-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Expertise: Computer Vision, NLP & Data Pipelines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 dark:text-gray-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Full Stack AI Engineer</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 dark:text-gray-400 font-bold">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Open Source Contributor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
