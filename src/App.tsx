import { Menu, X, Mail, Github, Linkedin, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

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

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">{t('nav_home')}</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">{t('nav_about')}</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">{t('nav_skills')}</button>
              <button onClick={() => scrollToSection('portfolio')} className="nav-link">{t('nav_projects')}</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">{t('nav_experience')}</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">{t('nav_contact')}</button>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-slate-300 hover:text-teal-400 transition-all duration-300 font-medium"
              >
                <Globe size={18} />
                <span className="text-sm">{language === 'en' ? 'SR' : 'EN'}</span>
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="mobile-nav-link">{t('nav_home')}</button>
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">{t('nav_about')}</button>
              <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">{t('nav_skills')}</button>
              <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">{t('nav_projects')}</button>
              <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">{t('nav_experience')}</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">{t('nav_contact')}</button>
              <button
                onClick={toggleLanguage}
                className="mobile-nav-link flex items-center space-x-2"
              >
                <Globe size={18} />
                <span>{language === 'en' ? 'Srpski' : 'English'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">{t('footer_rights')}</p>
            <div className="flex space-x-8">
              <a href="mailto:aradovanovic994@gmail.com" className="text-slate-400 hover:text-teal-400 transition-all duration-300" aria-label="Email">
                <Mail size={22} />
              </a>
              <a href="https://github.com/ARadovanovic94" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-all duration-300" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/aleksandar-radovanovic-02a909333" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
