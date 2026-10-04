import { CheckCircle2, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center tracking-tight">
            {t('portfolio_title')}
          </h2>
          <p className="text-lg text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            {t('portfolio_subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <article className="bg-slate-900/60 border border-slate-700 rounded-xl p-8 card-hover hover:border-teal-400/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-teal-400 font-semibold mb-2">{t('portfolio_manual_type')}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{t('portfolio_manual_title')}</h3>
                <p className="text-slate-400">{t('portfolio_manual_app')}</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold">
                {t('portfolio_completed')}
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              {t('portfolio_manual_desc')}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
                <p className="text-2xl font-bold text-white">8</p>
                <p className="text-xs text-slate-400">{t('portfolio_test_cases')}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
                <p className="text-2xl font-bold text-white">8</p>
                <p className="text-xs text-slate-400">{t('portfolio_passed')}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
                <p className="text-2xl font-bold text-white">0</p>
                <p className="text-xs text-slate-400">{t('portfolio_defects')}</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={17} />
                {t('portfolio_manual_point_1')}
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={17} />
                {t('portfolio_manual_point_2')}
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={17} />
                {t('portfolio_manual_point_3')}
              </li>
            </ul>

            <a
              href="https://github.com/ARadovanovic94/manual_qa_practice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold"
            >
              <Github size={18} />
              {t('portfolio_view_github')}
            </a>
          </article>

          <article className="bg-slate-900/60 border border-slate-700 rounded-xl p-8 card-hover hover:border-teal-400/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-teal-400 font-semibold mb-2">{t('portfolio_automation_type')}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{t('portfolio_automation_title')}</h3>
                <p className="text-slate-400">Python · Selenium WebDriver · pytest</p>
              </div>
              <span className="px-3 py-1 bg-teal-500/15 text-teal-400 border border-teal-500/30 rounded-full text-xs font-semibold">
                {t('portfolio_practice')}
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              {t('portfolio_automation_desc')}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={17} />
                {t('portfolio_automation_point_1')}
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={17} />
                {t('portfolio_automation_point_2')}
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={17} />
                {t('portfolio_automation_point_3')}
              </li>
            </ul>

            <a
              href="https://github.com/ARadovanovic94/selenium-tests"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold"
            >
              <Github size={18} />
              {t('portfolio_view_github')}
            </a>
          </article>
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          {t('portfolio_more')}
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
