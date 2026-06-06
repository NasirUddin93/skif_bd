import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';

const kyuGrades = [
  { kyu: '10th Kyu', belt: 'White Belt', requirements: 'Basic stances (Heisoku-dachi, Hachiji-dachi), Introduction to Oi-zuki, Age-uke', months: '3 months' },
  { kyu: '9th Kyu', belt: 'Orange Belt', requirements: 'Gyaku-zuki, Gedan Barai, Mae-geri, Heian Shodan (first 8 moves)', months: '3 months' },
  { kyu: '8th Kyu', belt: 'Orange Belt (2 tags)', requirements: 'Uchi-uke, Shoto-uke, Yoko-geri Keage, Heian Shodan (full)', months: '3 months' },
  { kyu: '7th Kyu', belt: 'Yellow Belt', requirements: 'Uchi-uke, Mae-geri (mawashi), Heian Nidan, Kihon Ippon Kumite', months: '3 months' },
  { kyu: '6th Kyu', belt: 'Yellow Belt (2 tags)', requirements: 'Soto-uke, Mawashi-geri, Heian Sandan, Jiyu Ippon Kumite', months: '4 months' },
  { kyu: '5th Kyu', belt: 'Green Belt', requirements: 'Nukite, Kizami-zuki, Yoko-geri Kekomi, Heian Yondan', months: '4 months' },
  { kyu: '4th Kyu', belt: 'Blue Belt', requirements: 'Uraken-uchi, Ushiro-geri, Heian Godan, 5-step sparring', months: '5 months' },
  { kyu: '3rd Kyu', belt: 'Brown Belt', requirements: 'Advanced Kihon combinations, Tekki Shodan, Jiyu Kumite', months: '6 months' },
  { kyu: '2nd Kyu', belt: 'Brown Belt (1 tag)', requirements: 'Tekki Nidan, Bassai Dai or Jion, Advanced Jiyu Kumite', months: '6 months' },
  { kyu: '1st Kyu', belt: 'Brown Belt (2 tags)', requirements: 'Tekki Sandan, Kanku Dai or Empi, Pre-Dan training', months: '9 months' },
];

const danGrades = [
  { dan: '1st Dan (Shodan)', title: 'Beginner', requirements: 'Minimum 1 year at 1st Kyu, All Heian + Tekki Shodan, Bassai Dai, Jiyu Kumite exam' },
  { dan: '2nd Dan (Nidan)', title: 'Intermediate', requirements: 'Minimum 2 years at Shodan, Kanku Dai, Jion, Tekki Nidan & Sandan' },
  { dan: '3rd Dan (Sandan)', title: 'Advanced', requirements: 'Minimum 3 years at Nidan, Empi, Hangetsu, Gankaku, Thesis on Karate philosophy' },
  { dan: '4th Dan (Yondan)', title: 'Senior', requirements: 'Minimum 4 years at Sandan, Advanced Kata, Instructor qualification, Contribution to federation' },
  { dan: '5th Dan (Godan)', title: 'Master', requirements: 'Minimum 5 years at Yondan, Awarded by SKIF International board, Exceptional service to Shotokan' },
  { dan: '6th–9th Dan', title: 'Grand Master', requirements: 'Awarded by SKIF International Japan based on lifetime contribution and technical mastery' },
];

const beltColors: Record<string, string> = {
  'White Belt': 'bg-gray-100 border-gray-300 text-gray-700',
  'Orange Belt (2 tags)': 'bg-orange-100 border-orange-400 text-orange-800',
  'Orange Belt': 'bg-orange-100 border-orange-400 text-orange-800',
  'Yellow Belt': 'bg-yellow-100 border-yellow-400 text-yellow-800',
  'Yellow Belt (2 tags)': 'bg-yellow-100 border-yellow-400 text-yellow-800',
  'Green Belt': 'bg-green-100 border-green-500 text-green-800',
  'Blue Belt': 'bg-blue-100 border-blue-500 text-blue-800',
  'Brown Belt': 'bg-amber-100 border-amber-700 text-amber-900',
  'Brown Belt (1 tag)': 'bg-amber-100 border-amber-700 text-amber-900',
  'Brown Belt (2 tags)': 'bg-amber-100 border-amber-700 text-amber-900',
};

export default function GradingPage() {
  return (
    <>
      <PageHero
        title="Grading System"
        subtitle="The SKIF belt grading system — from White Belt to 9th Dan Black Belt."
        breadcrumbs={[
          { label: 'Structure', href: '/structure' },
          { label: 'Grading System', href: '/structure/grading' },
        ]}
        backgroundImage="/images/Gallery/P-3.jpg"
      />

      {/* Kyu Grades Table */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <div className="inline-block mb-3 px-3 py-1 bg-crimson/10 border border-crimson/20 rounded text-crimson text-xs font-bold uppercase tracking-widest">Beginner to Advanced</div>
            <h2 className="font-heading text-4xl font-bold text-navy uppercase tracking-wide mb-4">Kyu Grades</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              There are 10 Kyu (student) grades, each represented by a belt colour. Each grade has specific technical requirements and minimum training time.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border-light shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-4 font-bold uppercase tracking-wide">Grade</th>
                  <th className="text-left p-4 font-bold uppercase tracking-wide">Belt</th>
                  <th className="text-left p-4 font-bold uppercase tracking-wide hidden md:table-cell">Minimum Time</th>
                  <th className="text-left p-4 font-bold uppercase tracking-wide">Key Requirements</th>
                </tr>
              </thead>
              <tbody>
                {kyuGrades.map((grade, i) => (
                  <tr key={grade.kyu} className={`border-t border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}>
                    <td className="p-4 font-bold text-navy">{grade.kyu}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${beltColors[grade.belt] || 'bg-gray-100 border-gray-300 text-gray-700'}`}>
                        {grade.belt}
                      </span>
                    </td>
                    <td className="p-4 text-text-secondary hidden md:table-cell">{grade.months}</td>
                    <td className="p-4 text-text-secondary">{grade.requirements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dan Grades */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 text-right pr-10 pt-10">
          <span className="text-[20rem] font-bold text-white leading-none select-none" style={{ fontFamily: 'serif' }}>段</span>
        </div>
        <div className="section-container relative z-10">
          <div className="text-center mb-14">
            <div className="inline-block mb-3 px-3 py-1 bg-gold/20 border border-gold/30 rounded text-gold text-xs font-bold uppercase tracking-widest">Black Belt</div>
            <h2 className="font-heading text-4xl font-bold text-white uppercase tracking-wide mb-4">Dan Grades</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Dan grades represent mastery and are awarded by the SKIF grading committee. Each grade demands years of dedicated practice, technical excellence, and contribution to the art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danGrades.map((grade, i) => (
              <div key={grade.dan} className="bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all rounded-xl p-6 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <span className="text-gold font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-heading font-bold text-lg leading-tight">{grade.dan}</h3>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-0.5">{grade.title}</p>
                  </div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed">{grade.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result Images */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <h2 className="font-heading text-3xl font-bold text-navy uppercase tracking-wide mb-10 text-center">
            Grading Results & Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group">
              <Image
                src="/images/Certificates_and_Results/Sep-24-Kyu-test-result.jpg"
                alt="Kyu Grading Result Sheet"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4 pt-10">
                <p className="text-white font-semibold text-sm">September 2024 — Kyu Test Results</p>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group">
              <Image
                src="/images/Certificates_and_Results/skif-bd-ctg-dan-given.jpg"
                alt="Dan Certificate Award"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4 pt-10">
                <p className="text-white font-semibold text-sm">Dan Grading Ceremony — Chittagong</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
