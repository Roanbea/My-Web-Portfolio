import { ExternalLink, Github } from 'lucide-react';
import raketeroImg from '../assets/Screenshot 2026-04-06 215016.png';
import BeuxmartImg from '../assets/Beaux.png';
const projects = [
  {
    title: 'Raketero',
    description: 'RAKETERO is a gig-finding and freelance job platform connecting talent with opportunities*, especially for people seeking flexible or side income.',
    image: raketeroImg, // or leave blank for no image
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/Roanbea/My-Web-Portfolio',
    demo: 'https://your-demo-url.com', // optional
  },
  {
    title: 'Beuxmart',
    description: 'E-Commerce Platform.',
    image: BeuxmartImg, // or leave blank for no image
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://your-demo-url.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-lilac-gradient py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#b983ff] to-[#f67acb] bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-[#b983ff]/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#b983ff]/10 text-[#b983ff] rounded-full border border-[#b983ff]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-[#b983ff] transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-300 hover:text-[#f67acb] transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
