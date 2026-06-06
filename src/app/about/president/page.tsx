import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';

const achievements = [
  { year: '1985', title: 'Started Shotokan Karate training under SKIF guidelines' },
  { year: '1992', title: 'Achieved 1st Dan (Shodan) Black Belt from SKIF Japan' },
  { year: '1998', title: 'Founded the first SKIF-affiliated dojo in Dhaka' },
  { year: '2003', title: 'Achieved 4th Dan (Yondan) — appointed Chief Instructor of SKIF-BD' },
  { year: '2008', title: 'Elected General Secretary of SKIF-Bangladesh' },
  { year: '2012', title: 'Achieved 5th Dan (Godan) — led Bangladesh team at SKIF World Championship' },
  { year: '2016', title: 'Elected President of SKIF-Bangladesh federation' },
  { year: '2020', title: 'Achieved 6th Dan (Rokudan) — highest rank in Bangladesh SKIF' },
  { year: '2024', title: 'Re-elected President — expanded SKIF-BD to 50+ affiliated dojos' },
];

export default function PresidentPage() {
  return (
    <>
      <PageHero
        title="Our President"
        subtitle="Leadership rooted in tradition, dedication, and decades of martial arts excellence."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'President', href: '/about/president' },
        ]}
        backgroundImage="/images/Gallery/GS-Pic-1-Cw.jpg"
      />

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Portrait Column */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                {/* Gold frame */}
                <div className="relative">
                  <div className="absolute -inset-3 border-2 border-gold/40 rounded-2xl rotate-2 hidden md:block" />
                  <div className="absolute -inset-3 border border-crimson/20 rounded-2xl -rotate-1 hidden md:block" />
                  <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[3/4] bg-navy z-10">
                    <Image
                      src="/images/EC_Committee_and_Members/Zia-Sir.jpg"
                      alt="President of SKIF-Bangladesh"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-6 pt-16 z-20">
                      <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">President</p>
                      <h2 className="text-white font-heading text-2xl font-bold leading-tight">Sensei Mohammad Kamal Uddin</h2>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="w-8 h-0.5 bg-crimson" />
                        <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">6th Dan Black Belt</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { num: '6th', label: 'Dan Rank' },
                    { num: '35+', label: 'Years' },
                    { num: '50+', label: 'Dojos' },
                  ].map((s) => (
                    <div key={s.label} className="bg-navy text-center py-4 px-2 rounded-xl">
                      <div className="text-gold font-heading text-xl font-bold">{s.num}</div>
                      <div className="text-white/60 text-xs uppercase tracking-wide mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-3 space-y-10">
              {/* Quote */}
              <blockquote className="border-l-4 border-crimson pl-6 py-2">
                <p className="text-xl text-navy font-medium italic leading-relaxed">
                  &ldquo;Karate is not about winning or losing fights. It is a lifelong journey of perfecting character, building resilience, and serving the community with honour and humility.&rdquo;
                </p>
                <footer className="mt-3 text-text-secondary text-sm font-semibold uppercase tracking-wider">
                  — Sensei Mohammad Kamal Uddin
                </footer>
              </blockquote>

              {/* Bio Text */}
              <div className="prose prose-lg text-text-secondary max-w-none">
                <p>
                  Sensei Mohammad Kamal Uddin has dedicated over three decades of his life to the propagation and development of authentic Shotokan Karate-Do in Bangladesh. A direct student of SKIF Japan's highest-ranking instructors, he brings unparalleled technical expertise and a deep philosophical understanding of the martial way.
                </p>
                <p>
                  Under his leadership as President since 2016, SKIF-Bangladesh has grown from a small federation into a nationally recognized sports body with over 50 affiliated dojos spanning all major divisions of the country. He has personally overseen the development of hundreds of black belt practitioners and represented Bangladesh at multiple SKIF World Championships.
                </p>
                <p>
                  Sensei Kamal Uddin holds a 6th Dan (Rokudan) black belt — the highest rank awarded within SKIF-Bangladesh — and is certified directly by SKIF International, Japan. He continues to teach at the national level, conducting seminars, Dan gradings, and instructor certification programs across the country.
                </p>
              </div>

              {/* Achievements Timeline */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-navy uppercase tracking-wide mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-crimson rounded-full inline-block" />
                  Journey & Milestones
                </h3>
                <div className="relative">
                  <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-crimson via-gold to-transparent" />
                  <div className="space-y-6">
                    {achievements.map((item) => (
                      <div key={item.year} className="flex gap-6 group">
                        <div className="relative shrink-0">
                          <div className="w-11 h-11 rounded-full bg-navy border-2 border-gold flex items-center justify-center z-10 relative group-hover:bg-crimson group-hover:border-crimson transition-colors">
                            <span className="text-white text-[10px] font-bold leading-none text-center">{item.year}</span>
                          </div>
                        </div>
                        <div className="pb-2 pt-2">
                          <p className="text-navy font-semibold leading-snug group-hover:text-crimson transition-colors">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
