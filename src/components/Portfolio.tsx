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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          {t('portfolio_title')}
        </h2>
        <p className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          {t('portfolio_subtitle')}
        </p>

        <div className="space-y-8">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 card-hover hover:border-teal-400/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-teal-500 rounded-lg">
                <Briefcase className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t('portfolio_qa_title')}</h3>
                <p className="text-lg text-teal-400 font-medium">{t('portfolio_qa_company')}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-sm font-medium">
                  {t('portfolio_qa_role')}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-2">{t('portfolio_qa_challenge')}</h4>
                <p className="text-slate-300 text-sm">{t('portfolio_qa_challenge_text')}</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-2">{t('portfolio_qa_approach')}</h4>
                <p className="text-slate-300 text-sm">{t('portfolio_qa_approach_text')}</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-2">{t('portfolio_qa_results')}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm">{t('portfolio_qa_result_1')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm">{t('portfolio_qa_result_2')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm">{t('portfolio_qa_result_3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 card-hover hover:border-teal-400/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-teal-500 rounded-lg">
                <HeadphonesIcon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t('portfolio_support_title')}</h3>
                <p className="text-lg text-teal-400 font-medium">{t('portfolio_support_company')}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-sm font-medium">
                  {t('portfolio_support_role')}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-2">{t('portfolio_support_challenge')}</h4>
                <p className="text-slate-300 text-sm">{t('portfolio_support_challenge_text')}</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-2">{t('portfolio_support_approach')}</h4>
                <p className="text-slate-300 text-sm">{t('portfolio_support_approach_text')}</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-teal-400 font-semibold mb-2">{t('portfolio_support_results')}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm">{t('portfolio_support_result_1')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm">{t('portfolio_support_result_2')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm">{t('portfolio_support_result_3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg text-center shadow-xl glow-effect">
          <h3 className="text-2xl font-bold text-white mb-4">{t('portfolio_cta_title')}</h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            {t('portfolio_cta_desc')}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-teal-600 rounded-lg hover:bg-slate-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:transform hover:scale-105"
          >
            {t('portfolio_cta_button')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
