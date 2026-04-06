import { Code2, Database, Laptop, Palette } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS',
    color: 'from-[#b983ff] to-[#f67acb]',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, PostgreSQL, API Design',
    color: 'from-[#7c3fa0] to-[#b983ff]',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, User Research, Prototyping',
    color: 'from-[#f67acb] to-[#b983ff]',
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-lilac-gradient py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-lilac-400 to-lilac-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-lilac-100 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          I'm a passionate developer with expertise in building modern web applications.
          I love creating elegant solutions to complex problems and bringing ideas to life through code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#b983ff]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#b983ff]/50 transition-shadow duration-300`}>
                <skill.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.title}
              </h3>

              <p className="text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
