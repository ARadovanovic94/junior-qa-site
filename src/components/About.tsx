import { Award, Users, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center tracking-tight">
            {t('about_title')}
          </h2>
          <p className="text-xl text-teal-400 text-center font-medium">
            {t('about_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-slate-300 leading-relaxed tracking-wide">
              {t('about_p1')}
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed tracking-wide">
              {t('about_p2')}
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed tracking-wide">
              {t('about_p3')}
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start space-x-5 p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 card-hover hover:border-teal-400/50 hover:shadow-xl">
              <div className="p-3 bg-teal-500 rounded-lg flex-shrink-0">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{t('about_card1_title')}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t('about_card1_desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5 p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 card-hover hover:border-teal-400/50 hover:shadow-xl">
              <div className="p-3 bg-teal-500 rounded-lg flex-shrink-0">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{t('about_card2_title')}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t('about_card2_desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5 p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 card-hover hover:border-teal-400/50 hover:shadow-xl">
              <div className="p-3 bg-teal-500 rounded-lg flex-shrink-0">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{t('about_card3_title')}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t('about_card3_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
