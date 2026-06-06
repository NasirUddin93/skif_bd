import { PageHero } from '@/components/layout/PageHero';

const dojokun = [
  { jp: 'Jinkaku kansei ni tsutomuru koto', en: 'Seek Perfection of Character', num: '一' },
  { jp: 'Makoto no michi wo mamoru koto', en: 'Be Faithful', num: '二' },
  { jp: 'Doryoku no seishin wo yashinau koto', en: 'Endeavor to Excel', num: '三' },
  { jp: 'Reigi wo omonzuru koto', en: 'Respect Others', num: '四' },
  { jp: 'Kekki no yu wo imashimuru koto', en: 'Refrain from Violent Behaviour', num: '五' },
];

const etiquetteRules = [
  { title: 'Bowing (Rei)', desc: 'Always bow when entering or leaving the dojo, and when beginning or ending practice with a partner. Bowing is a sign of mutual respect, not submission.' },
  { title: 'Proper Attire (Gi)', desc: 'The karate gi (uniform) must always be clean, pressed, and properly worn. The belt (obi) must be tied correctly at all times. No shoes inside the dojo.' },
  { title: 'Silence & Discipline', desc: 'Maintain silence when the instructor is speaking. Do not talk unnecessarily during practice. Focus and discipline inside the dojo are paramount.' },
  { title: 'Punctuality', desc: 'Arrive on time for all training sessions. If late, wait at the edge of the mat and bow before joining, only after being acknowledged by the instructor.' },
  { title: 'Care for Others', desc: 'Never use techniques in a way that could seriously injure a partner. Control is a fundamental skill. Beginners must be treated with patience and encouragement.' },
  { title: 'No Jewellery', desc: 'All jewellery (rings, earrings, necklaces) must be removed before training to prevent injury to yourself and others.' },
  { title: 'Dojo Cleanliness', desc: 'All members are responsible for keeping the dojo clean. Participate in dojo cleaning sessions (Osoji) willingly and without being asked.' },
  { title: 'Respect for Seniors', desc: 'Always address higher-ranked practitioners with due respect. Higher grades train with greater responsibility — they support and guide juniors.' },
];

const conductRules = [
  'Conduct yourself with dignity and integrity at all times, both inside and outside the dojo.',
  'Do not use karate techniques in anger, for personal gain, or in situations that do not require self-defence.',
  'Represent SKIF-Bangladesh with honour at all official events, competitions, and seminars.',
  'Abide by the rules and decisions of the SKIF-BD Executive Committee and certified instructors.',
  'Refrain from alcohol or substance use before training sessions.',
  'Report any misconduct, bullying, or unsafe behaviour to the instructor immediately.',
  'Support and uphold the SKIF International rules and grading standards.',
  'Contribute positively to the dojo community and encourage fellow practitioners.',
];

export default function CodeOfConductPage() {
  return (
    <>
      <PageHero
        title="Code of Conduct"
        subtitle="The ethical guidelines and dojo etiquette that every SKIF-Bangladesh member must uphold."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Code of Conduct', href: '/about/code-of-conduct' },
        ]}
        backgroundImage="/images/Gallery/P-3.jpg"
      />

      {/* Dojo Kun */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 text-[30rem] font-bold text-white leading-none select-none pointer-events-none" style={{ fontFamily: 'serif' }}>道</div>
        </div>
        <div className="section-container relative z-10">
          <div className="text-center mb-14">
            <div className="inline-block mb-3 px-3 py-1 bg-gold/20 border border-gold/30 rounded text-gold text-xs font-bold uppercase tracking-widest">
              道場訓
            </div>
            <h2 className="font-heading text-4xl font-bold text-white uppercase tracking-wide mb-4">Dojo Kun</h2>
            <p className="text-white/70 max-w-xl mx-auto text-lg">
              The five guiding principles of Shotokan Karate, recited at the end of every training session to reinforce character and spirit.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {dojokun.map((rule, i) => (
              <div
                key={i}
                className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all group"
              >
                <div className="shrink-0 text-5xl text-gold/40 font-bold select-none leading-none group-hover:text-gold/70 transition-colors" style={{ fontFamily: 'serif' }}>
                  {rule.num}
                </div>
                <div>
                  <p className="text-white font-heading text-xl font-bold mb-1">{rule.en}</p>
                  <p className="text-white/50 text-sm italic">{rule.jp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dojo Etiquette */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-navy uppercase tracking-wide mb-4">Dojo Etiquette</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Etiquette is not merely formality — it is the foundation of a respectful, safe, and effective training environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {etiquetteRules.map((rule) => (
              <div key={rule.title} className="bg-white rounded-xl p-6 border border-border-light shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                <div className="shrink-0 w-10 h-10 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy mb-1">{rule.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Code of Conduct */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy uppercase tracking-wide mb-10 text-center">
            Member Code of Conduct
          </h2>
          <div className="bg-navy rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-crimson rounded-bl-full opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              {conductRules.map((rule, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-white/85 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-text-secondary text-sm mt-8">
            Violations of this code may result in suspension or expulsion from SKIF-Bangladesh at the discretion of the Executive Committee.
          </p>
        </div>
      </section>
    </>
  );
}
