import { Briefcase, HeadphonesIcon, Bug, CheckSquare, MonitorSmartphone, Wrench } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: 'QA Assistant',
      company: 'Inner-Temple Web App',
      type: 'Project',
      responsibilities: [
        {
          icon: CheckSquare,
          text: 'Manual testing of form validations',
        },
        {
          icon: CheckSquare,
          text: 'Verified weekly/monthly calculations',
        },
        {
          icon: MonitorSmartphone,
          text: 'Responsive testing (desktop & mobile)',
        },
        {
          icon: Wrench,
          text: 'Used React Dev Tools and browser tools',
        },
        {
          icon: Bug,
          text: 'Bug reporting and documentation',
        },
      ],
    },
    {
      icon: HeadphonesIcon,
      title: 'Support Agent',
      company: 'German & English',
      type: 'Experience',
      responsibilities: [
        {
          icon: CheckSquare,
          text: 'Bilingual technical support',
        },
        {
          icon: CheckSquare,
          text: 'User scenario testing',
        },
        {
          icon: Bug,
          text: 'Bug identification and reporting',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Experience & Projects
        </h2>
        <p className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Real-world QA experience across web applications and technical support
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 card-hover hover:border-teal-400/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-teal-500 rounded-lg">
                  <exp.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-lg text-teal-400 font-medium">{exp.company}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 ml-16">
                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="flex items-start space-x-3">
                    <resp.icon className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-300">{resp.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg text-center shadow-xl glow-effect">
          <h3 className="text-2xl font-bold text-white mb-4">Looking for QA Opportunities</h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            I'm actively seeking junior QA positions where I can apply my testing skills,
            contribute to quality assurance processes, and continue growing as a professional tester.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-teal-600 rounded-lg hover:bg-slate-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:transform hover:scale-105"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
