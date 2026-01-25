import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          {t('contact_title')}
        </h2>
        <p className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          {t('contact_subtitle')}
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:aradovanovic994@gmail.com"
              className="flex items-center space-x-4 p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-teal-400/50 card-hover hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-teal-500/20 rounded-lg group-hover:bg-teal-500 transition-all duration-300">
                <Mail className="text-teal-400 group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{t('contact_email')}</h3>
                <p className="text-slate-400 text-sm">aradovanovic994@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center space-x-4 p-6 bg-slate-800 rounded-lg border border-slate-700">
              <div className="p-3 bg-teal-500/20 rounded-lg">
                <MapPin className="text-teal-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{t('contact_location')}</h3>
                <p className="text-slate-400 text-sm">{t('hero_location')}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {t('contact_connect_title')}
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/ARadovanovic94"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-700 rounded-lg hover:bg-teal-500 transition-all duration-300 group transform hover:scale-110"
              >
                <Github className="text-slate-300 group-hover:text-white transition-colors" size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/aleksandar-radovanovic-02a909333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-700 rounded-lg hover:bg-teal-500 transition-all duration-300 group transform hover:scale-110"
              >
                <Linkedin className="text-slate-300 group-hover:text-white transition-colors" size={32} />
              </a>
              <a
                href="mailto:aradovanovic994@gmail.com"
                className="p-4 bg-slate-700 rounded-lg hover:bg-teal-500 transition-all duration-300 group transform hover:scale-110"
              >
                <Mail className="text-slate-300 group-hover:text-white transition-colors" size={32} />
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg text-center shadow-xl glow-effect">
            <p className="text-white text-lg mb-4">
              {t('contact_availability')}
            </p>
            <p className="text-teal-100">
              {t('contact_availability_detail')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
