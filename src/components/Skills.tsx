import { CheckCircle2 } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'Testing Expertise',
      skills: [
        'Manual Testing',
        'Automation Testing',
        'Test Case Design',
        'Bug Reporting',
        'Responsive Testing',
        'Form Validation Testing',
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'Java',
        'SQL',
        'HTML',
        'CSS',
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Selenium WebDriver',
        'Postman',
        'SoapUI',
        'JMeter',
        'React Dev Tools',
        'Browser DevTools',
      ],
    },
    {
      title: 'Development Tools',
      skills: [
        'Git',
        'GitHub',
        'Jira',
        'Jenkins',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Skills & Tools
        </h2>
        <p className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for ensuring software quality and reliability
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-teal-400/50 card-hover hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b-2 border-teal-500">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-teal-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg text-center shadow-xl glow-effect">
          <h3 className="text-2xl font-bold text-white mb-3">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="text-center">
              <p className="font-semibold text-lg">English</p>
              <p className="text-teal-100">C1 Level</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">German</p>
              <p className="text-teal-100">C1 Level</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">Serbian</p>
              <p className="text-teal-100">Native</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
