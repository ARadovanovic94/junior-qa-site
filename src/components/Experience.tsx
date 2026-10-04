import { Briefcase, Headphones, MapPin, Trophy } from 'lucide-react';

interface ExperienceEntry {
  icon: typeof Briefcase;
  title: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
}

function Experience() {
  const experiences: ExperienceEntry[] = [
    {
      icon: Headphones,
      title: 'Customer Service & Quality',
      company: 'GLS Serbia',
      period: 'May 2026 – Present',
      location: 'Belgrade, Serbia',
      points: [
        'Support for couriers and customers with delivery-related cases',
        'Quality checks related to package handling and service issues',
        'Investigation of damage and delay cases to identify the cause and explain what happened',
      ],
    },
    {
      icon: Headphones,
      title: 'Customer Support Agent',
      company: 'Mplus Group — Wolt DE',
      period: 'Aug 2025 – Feb 2026',
      location: 'Belgrade, Serbia',
      points: [
        'Customer support for German-speaking users',
        'Handled time-sensitive cases and problem resolution in a high-volume environment',
        'Worked with internal tools and documented cases clearly for follow-up',
      ],
    },
    {
      icon: Trophy,
      title: 'Professional Handball Player',
      company: 'Serbia, France & Switzerland',
      period: '2011 – 2025',
      points: [
        'Developed discipline, teamwork and consistency in high-pressure environments',
        'Worked in international teams and adapted quickly to different systems and cultures',
        'Transferred the same structured approach and persistence into software QA',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center tracking-tight">
            Experience
          </h2>
          <p className="text-lg text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            Professional experience and transferable skills behind my transition into QA
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article key={`${exp.title}-${exp.company}`} className="bg-slate-800 border border-slate-700 rounded-xl p-7 hover:border-teal-400/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="p-3 bg-teal-500 rounded-lg flex-shrink-0 self-start">
                  <exp.icon className="text-white" size={25} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-teal-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-slate-400 md:text-right">
                      <p>{exp.period}</p>
                      {exp.location && (
                        <p className="flex md:justify-end items-center gap-1 mt-1">
                          <MapPin size={14} />
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="grid md:grid-cols-3 gap-4">
                    {exp.points.map((point) => (
                      <li key={point} className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
