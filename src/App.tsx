import { Menu, X, Mail, Github, Linkedin, MapPin, Languages } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-all duration-300"
            >
              AR
            </button>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
              <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400">© 2024 Aleksandar Radovanović. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:aradovanovic994@gmail.com" className="text-slate-400 hover:text-teal-400 transition-all duration-300">
                <Mail size={20} />
              </a>
              <a href="https://github.com/ARadovanovic94" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aleksandar-radovanovic-02a909333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
