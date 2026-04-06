import avatarImg from '../id.jpg';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-lilac-gradient"
    >
      {/* Remove extra overlays for a clean gradient look */}

      <div className="relative z-10 text-center px-4">
        <div className="mb-8 inline-block animate-float">
          <img
            src={avatarImg}
            alt="Avatar"
            className="w-48 h-48 rounded-full object-cover shadow-lg shadow-lilac-400/50"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-lilac-400 via-lilac-500 to-lilac-300 bg-clip-text text-transparent animate-fade-in">
          Roan Bea Balitos
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Software Developer & UI/UX Enthusiast
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-lilac-400 transition-all duration-300 hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#b983ff] transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:john@example.com"
            className="text-gray-300 hover:text-[#f67acb] transition-all duration-300 hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToAbout}
            className="animate-bounce focus:outline-none border-none"
            style={{ border: 'none', background: 'none', padding: 0 }}
          >
            <ChevronDown size={32} color="#fff" />
          </button>
        </div>
      </div>
    </section>
  );
}
