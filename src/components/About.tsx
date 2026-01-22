import { Award, Users, Target } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a Junior QA Tester with a strong attention to detail and a collaborative mindset.
              My background as a professional athlete for 15 years has shaped my approach to quality
              assurance in unique ways.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              The discipline, teamwork, and persistence I developed in sports translate directly into
              my work in software testing. I bring the same dedication to finding bugs and ensuring
              quality that I brought to every training session and competition.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently based in Belgrade, Serbia, I'm fluent in English, German, and Serbian, which
              allows me to work effectively with international teams and test applications for diverse
              user bases.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 card-hover hover:border-teal-400/50 hover:shadow-xl">
              <div className="p-3 bg-teal-500 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Discipline</h3>
                <p className="text-slate-400">
                  15 years of athletic training instilled rigorous attention to detail and systematic approach to problem-solving
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 card-hover hover:border-teal-400/50 hover:shadow-xl">
              <div className="p-3 bg-teal-500 rounded-lg">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Teamwork</h3>
                <p className="text-slate-400">
                  Extensive experience collaborating with teams, understanding the importance of clear communication
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 card-hover hover:border-teal-400/50 hover:shadow-xl">
              <div className="p-3 bg-teal-500 rounded-lg">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Persistence</h3>
                <p className="text-slate-400">
                  Never giving up until the job is done right, approaching each test case with determination
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
