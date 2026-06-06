import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';

const syllabus = [
  {
    belt: 'White / Orange Belt',
    color: 'bg-gray-200',
    kyu: '10th – 8th Kyu',
    kata: ['Heian Shodan'],
    kihon: ['Oi-zuki', 'Gedan Barai', 'Age-uke', 'Mae-geri'],
    kumite: ['Gohon Kumite (5-step basic sparring)'],
  },
  {
    belt: 'Yellow Belt',
    color: 'bg-yellow-300',
    kyu: '7th – 6th Kyu',
    kata: ['Heian Nidan', 'Heian Sandan'],
    kihon: ['Gyaku-zuki', 'Uchi-uke', 'Soto-uke', 'Mawashi-geri'],
    kumite: ['Kihon Ippon Kumite'],
  },
  {
    belt: 'Green Belt',
    color: 'bg-green-400',
    kyu: '5th Kyu',
    kata: ['Heian Yondan'],
    kihon: ['Yoko-geri Kekomi', 'Kizami-zuki', 'Nukite'],
    kumite: ['Jiyu Ippon Kumite'],
  },
  {
    belt: 'Blue Belt',
    color: 'bg-blue-500',
    kyu: '4th Kyu',
    kata: ['Heian Godan'],
    kihon: ['Ushiro-geri', 'Uraken-uchi', 'Empi-uchi'],
    kumite: ['5-step Jiyu Kumite'],
  },
  {
    belt: 'Brown Belt',
    color: 'bg-amber-700',
    kyu: '3rd – 1st Kyu',
    kata: ['Tekki Shodan', 'Tekki Nidan', 'Tekki Sandan', 'Bassai Dai', 'Kanku Dai'],
    kihon: ['Full advanced combinations', 'Renrakuwaza (combination techniques)'],
    kumite: ['Jiyu Kumite (Free sparring)'],
  },
  {
    belt: 'Black Belt',
    color: 'bg-gray-900',
    kyu: '1st Dan +',
    kata: ['Empi', 'Jion', 'Gankaku', 'Hangetsu', 'Kanku Sho', 'Unsu', 'Sochin', 'Nijushiho', 'Meikyo'],
    kihon: ['All previous + instructor-level demonstration'],
    kumite: ['Open Jiyu Kumite', 'Competitive Kumite rules'],
  },
];

const advancedKata = [
  'Bassai Sho', 'Kanku Sho', 'Jiin', 'Gojushiho Dai', 'Gojushiho Sho',
  'Wankan', 'Unsu', 'Sochin', 'Nijushiho', 'Chinte', 'Meikyo',
];

export default function SyllabusPage() {
  return (
    <>
      <PageHero
        title="Technical Syllabus"
        subtitle="The official SKIF-Bangladesh Kata and Kumite syllabus from beginner to black belt."
        breadcrumbs={[
          { label: 'Structure', href: '/structure' },
          { label: 'Syllabus', href: '/structure/syllabus' },
        ]}
        backgroundImage="/images/Gallery/P-2.jpg"
      />

      {/* Intro + Bulletin download */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 prose prose-lg text-text-secondary max-w-none">
              <h2 className="font-heading text-3xl font-bold text-navy not-prose mb-4">SKIF-BD Official Syllabus</h2>
              <p>
                The SKIF-Bangladesh training syllabus follows the international SKIF curriculum as prescribed by SKIF Japan. All Kata, Kihon combinations, and Kumite requirements are graded strictly in accordance with SKIF International standards.
              </p>
              <p>
                Students are expected to meet both the technical and time requirements for each grade before applying for a grading examination. All Dan gradings must be approved by the SKIF-BD Chief Examiner and adhere to SKIF International protocols.
              </p>
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl border border-border-light">
              <Image
                src="/images/Gallery/exam-mp4.jpg"
                alt="SKIF Bulletin Cover"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent flex flex-col justify-end p-6">
                <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">Official Document</p>
                <p className="text-white font-semibold text-lg mb-4">SKIF-BD Bulletin & Category Guide</p>
                <a
                  href="/images/Documents/SKIF-Bulletin-Updated-category-1-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Belt-by-belt Syllabus */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <h2 className="font-heading text-3xl font-bold text-navy uppercase tracking-wide mb-12 text-center">
            Syllabus by Belt Level
          </h2>
          <div className="space-y-6">
            {syllabus.map((level) => (
              <div key={level.kyu} className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 p-5 border-b border-border-light">
                  <div className={`w-8 h-8 rounded-full ${level.color} border-2 border-white shadow shrink-0`} />
                  <div>
                    <h3 className="font-heading font-bold text-navy text-lg">{level.belt}</h3>
                    <p className="text-text-secondary text-sm">{level.kyu}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div>
                    <p className="text-xs font-bold text-crimson uppercase tracking-widest mb-3">Kata</p>
                    <ul className="space-y-1">
                      {level.kata.map((k) => (
                        <li key={k} className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-crimson uppercase tracking-widest mb-3">Kihon (Basics)</p>
                    <ul className="space-y-1">
                      {level.kihon.map((k) => (
                        <li key={k} className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-crimson uppercase tracking-widest mb-3">Kumite</p>
                    <ul className="space-y-1">
                      {level.kumite.map((k) => (
                        <li key={k} className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Kata */}
      <section className="py-16 bg-navy">
        <div className="section-container">
          <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-wide mb-8 text-center">
            Advanced Kata List
          </h2>
          <p className="text-white/70 text-center max-w-xl mx-auto mb-10">
            Advanced Kata are required for higher Dan grades and competition. All advanced Kata follow SKIF International standards.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {advancedKata.map((kata) => (
              <span
                key={kata}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-gold/20 hover:border-gold/40 hover:text-gold transition-all cursor-default"
              >
                {kata}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
