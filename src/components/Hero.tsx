import { ArrowDown, MapPin } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

function Hero({ scrollToSection }: HeroProps) {
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
        <div className="mb-6 flex justify-center text-slate-400">
          <div className="flex items-center space-x-2 hover:text-teal-400 transition-colors duration-300">
            <MapPin size={18} />
            <span className="text-sm">Belgrade, Serbia</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Aleksandar Radovanović
        </h1>

        <p className="text-2xl md:text-3xl text-teal-400 font-medium mb-8">
          Junior QA Tester
        </p>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Bringing discipline, teamwork, and attention to detail from 15 years of professional athletics into software quality assurance
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 font-medium shadow-lg hover:shadow-teal-500/50 hover:transform hover:scale-105"
          >
            Get in Touch
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="px-8 py-3 bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 border-2 border-slate-600 hover:border-teal-400 transition-all duration-300 font-medium"
          >
            View My Work
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-slate-400 hover:text-teal-400 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
