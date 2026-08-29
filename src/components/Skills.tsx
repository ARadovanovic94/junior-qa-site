import { CheckCircle2 } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'Manual Testing',
      skills: [
        'Functional Testing',
        'Regression Testing',
        'Smoke Testing',
        'Exploratory Testing',
        'UI Testing',
        'Positive & Negative Testing',
        'Boundary Value Analysis',
        'Equivalence Partitioning',
      ],
    },
    {
      title: 'API & Database',
      skills: [
        'Postman',
        'REST API Testing',
        'SQL',
        'MySQL',
      ],
    },
    {
      title: 'Test Automation',
      skills: [
        'Selenium WebDriver',
        'Python',
        'PyTest',
      ],
    },
    {
      title: 'Tools',
      skills: [
        'Jira',
        'TestRail',
        'Git',
        'GitHub',
        'Jenkins',
        'JMeter',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center tracking-tight">
            Skills & Tools
          </h2>
          <p className="text-lg text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for ensuring software quality and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-teal-400/50 card-hover hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-5 pb-3 border-b-2 border-teal-500 tracking-tight">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 p-10 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg text-center shadow-xl glow-effect">
          <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Languages</h3>
          <div className="flex flex-wrap justify-center gap-10 text-white">
            <div className="text-center">
              <p className="font-semibold text-lg mb-1">English</p>
              <p className="text-teal-100 text-sm">C1 Level</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg mb-1">German</p>
              <p className="text-teal-100 text-sm">C1 Level</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg mb-1">Serbian</p>
              <p className="text-teal-100 text-sm">Native</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
