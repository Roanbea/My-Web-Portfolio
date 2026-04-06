import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-lilac-gradient py-20 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-lilac-400 to-lilac-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-lilac-800/50 backdrop-blur-sm rounded-xl p-8 border border-lilac-700">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-lilac-100">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lilac-400 to-lilac-600 flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-lilac-200">Email</p>
                  <a href="mailto:roanbeabalitos@gmail.com" className="hover:text-lilac-400 transition-colors">
                    roanbeabalitos@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-lilac-100">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lilac-400 to-lilac-600 flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-lilac-200">Location</p>
                  <p>Dolores Eastern Samar, Philippines</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#b983ff] hover:text-white transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#b983ff] hover:text-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:roanbeabalitos@gmail.com"
                  className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#f67acb] hover:text-white transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#b983ff] to-[#f67acb] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#b983ff]/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
