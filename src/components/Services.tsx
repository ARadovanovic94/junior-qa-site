import { CheckCircle2, Code, TestTube, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Services() {
  const { t } = useLanguage();

  const qaServices = [
    'services_qa_1',
    'services_qa_2',
    'services_qa_3',
    'services_qa_4',
    'services_qa_5',
    'services_qa_6',
  ];

  const webServices = [
    'services_web_1',
    'services_web_2',
    'services_web_3',
    'services_web_4',
    'services_web_5',
    'services_web_6',
  ];

  const tools = [
    'Selenium', 'Postman', 'SoapUI', 'JMeter',
    'React', 'Python', 'Java', 'SQL',
    'Git', 'Jira', 'Jenkins', 'HTML/CSS'
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center tracking-tight">
            {t('services_title')}
          </h2>
          <p className="text-lg text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-teal-400/50 card-hover hover:shadow-xl transition-all duration-300">
            <div className="flex items-start mb-8">
              <div className="p-3 bg-teal-500 rounded-lg mr-5 flex-shrink-0">
                <TestTube className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{t('services_qa_title')}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t('services_qa_desc')}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {qaServices.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-300 text-sm leading-relaxed">{t(service)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-teal-400/50 card-hover hover:shadow-xl transition-all duration-300">
            <div className="flex items-start mb-8">
              <div className="p-3 bg-teal-500 rounded-lg mr-5 flex-shrink-0">
                <Code className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{t('services_web_title')}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t('services_web_desc')}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {webServices.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-300 text-sm leading-relaxed">{t(service)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
          <div className="flex items-start mb-8">
            <div className="p-3 bg-teal-500 rounded-lg mr-5 flex-shrink-0">
              <Wrench className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{t('services_tools_title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('services_tools_desc')}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2.5 bg-slate-900 text-slate-300 rounded-lg border border-slate-700 hover:border-teal-400/50 transition-all duration-300 text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
