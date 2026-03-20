import { Mail, Phone } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming complex data into interactive experiences. I am a Full Stack Developer with a specialized background in AI, capable of embedding real-time image processing and LLM-driven features directly into modern web architectures. I don't just build websites; I build systems that think.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="flex gap-4">
              <a href="mailto:preyum.kumar@iitgn.ac.in" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+917641824737" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://github.com/PreyumKr" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/preyum-kumar-singh1211/" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/preyumkr/" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/PreyumKr" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400 text-sm">
          <p>&copy; {currentYear} Preyum Kumar. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
