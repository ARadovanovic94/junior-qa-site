import { Briefcase, HeadphonesIcon, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 bg-slate-800 relative overflow-hidden">
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

        <div className="space-y-8">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 card-hover hover:border-teal-400/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-5 mb-8">
              <div className="p-3 bg-teal-500 rounded-lg flex-shrink-0">
                <Briefcase className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{t('portfolio_qa_title')}</h3>
                <p className="text-lg text-teal-400 font-medium mb-3">{t('portfolio_qa_company')}</p>
                <span className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-sm font-medium">
                  {t('portfolio_qa_role')}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-3 text-sm tracking-tight">{t('portfolio_qa_challenge')}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{t('portfolio_qa_challenge_text')}</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-3 text-sm tracking-tight">{t('portfolio_qa_approach')}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{t('portfolio_qa_approach_text')}</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-3 text-sm tracking-tight">{t('portfolio_qa_results')}</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm leading-relaxed">{t('portfolio_qa_result_1')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm leading-relaxed">{t('portfolio_qa_result_2')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm leading-relaxed">{t('portfolio_qa_result_3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 card-hover hover:border-teal-400/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-5 mb-8">
              <div className="p-3 bg-teal-500 rounded-lg flex-shrink-0">
                <HeadphonesIcon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{t('portfolio_support_title')}</h3>
                <p className="text-lg text-teal-400 font-medium mb-3">{t('portfolio_support_company')}</p>
                <span className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-sm font-medium">
                  {t('portfolio_support_role')}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-3 text-sm tracking-tight">{t('portfolio_support_challenge')}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{t('portfolio_support_challenge_text')}</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-3 text-sm tracking-tight">{t('portfolio_support_approach')}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{t('portfolio_support_approach_text')}</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-3 text-sm tracking-tight">{t('portfolio_support_results')}</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm leading-relaxed">{t('portfolio_support_result_1')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm leading-relaxed">{t('portfolio_support_result_2')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm leading-relaxed">{t('portfolio_support_result_3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 p-10 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg text-center shadow-xl glow-effect">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{t('portfolio_cta_title')}</h3>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
            {t('portfolio_cta_desc')}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-slate-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:transform hover:scale-105"
          >
            {t('portfolio_cta_button')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
