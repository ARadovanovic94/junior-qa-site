import { ArrowDown, Github, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

function Hero({ scrollToSection }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 text-slate-300">
            <MapPin size={16} />
            <span className="text-sm font-medium">{t('hero_location')}</span>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight leading-tight">
            {t('hero_title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <p className="text-2xl md:text-3xl lg:text-4xl text-teal-400 font-bold mb-4 max-w-5xl mx-auto">
          {t('hero_subtitle')}
        </p>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {t('hero_description')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-teal-500/50 hover:transform hover:scale-105 text-base"
          >
            {t('hero_cta_primary')}
          </button>
          <a
            href="https://github.com/ARadovanovic94"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-slate-200 rounded-lg hover:bg-slate-800 border-2 border-slate-600 hover:border-teal-400 transition-all duration-300 font-semibold text-base"
          >
            <Github size={19} />
            {t('hero_cta_secondary')}
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-slate-500 hover:text-teal-400 transition-colors"
          aria-label="Scroll to about"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
