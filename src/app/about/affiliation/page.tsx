import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';

const affiliations = [
  {
    org: 'SKIF Japan',
    fullName: 'Shotokan Karate-Do International Federation',
    logo: '/images/Logos_and_UI/skif-logo.jpg',
    description: 'The global governing body of Shotokan Karate founded by Kancho Nobuaki Kanazawa. SKIF-BD is the official national affiliate of SKIF Japan, authorizing us to issue SKIF-recognized Dan certificates and conduct official gradings.',
    since: '1998',
    url: 'https://www.skif.jp/',
  },
  {
    org: 'Bangladesh Karate Federation (BKF)',
    fullName: 'Bangladesh Karate Federation',
    logo: '/images/Logos_and_UI/karate-logo-bkf.jpeg',
    description: 'The national governing body for karate in Bangladesh, affiliated with the World Karate Federation (WKF) and the Bangladesh Olympic Association (BOA). SKIF-BD holds full affiliation with BKF.',
    since: '2001',
    url: '#',
  },
  {
    org: 'National Sports Council (NSC)',
    fullName: 'National Sports Council, Bangladesh',
    logo: '/images/Logos_and_UI/bd-flage.jpg',
    description: 'SKIF-Bangladesh is a recognized martial arts organization under the National Sports Council of Bangladesh, enabling official participation in national-level competitions and access to government sports facilities.',
    since: '2005',
    url: '#',
  },
];

export default function AffiliationPage() {
  return (
    <>
      <PageHero
        title="Affiliation & Recognition"
        subtitle="SKIF-Bangladesh is officially affiliated with leading national and international karate bodies."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Affiliation', href: '/about/affiliation' },
        ]}
        backgroundImage="/images/Gallery/P-2.jpg"
      />

      {/* Affiliation Cards */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-crimson/10 border border-crimson/20 rounded text-crimson text-xs font-bold uppercase tracking-widest">
              Official Affiliations
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy uppercase tracking-wide mb-4">
              Our Governing Bodies
            </h2>
            <p className="text-text-secondary text-lg">
              Our affiliations with international and national bodies ensure the highest standards of Shotokan Karate are maintained across all our programs and certifications.
            </p>
          </div>

          <div className="space-y-10">
            {affiliations.map((aff, i) => (
              <div
                key={aff.org}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center p-8 rounded-2xl border border-border-light shadow-sm hover:shadow-lg transition-shadow ${i % 2 === 1 ? 'bg-surface' : 'bg-white'}`}
              >
                <div className="lg:col-span-1 flex justify-center">
                  <div className="w-28 h-28 relative rounded-xl overflow-hidden border border-border-light shadow bg-white flex items-center justify-center p-2">
                    <Image
                      src={aff.logo}
                      alt={aff.org}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide">{aff.org}</h3>
                    <span className="text-xs font-bold bg-gold/20 text-gold border border-gold/30 px-2 py-0.5 rounded uppercase tracking-wider">Since {aff.since}</span>
                  </div>
                  <p className="text-sm text-crimson font-semibold mb-3 uppercase tracking-wide">{aff.fullName}</p>
                  <p className="text-text-secondary leading-relaxed">{aff.description}</p>
                  {aff.url !== '#' && (
                    <a
                      href={aff.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-crimson hover:text-crimson-dark transition-colors uppercase tracking-wide"
                    >
                      Visit Official Website
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Display */}
      <section className="py-20 bg-navy">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-wide mb-4">
              Official Certificates
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Our affiliation and recognition certificates are issued by the respective governing bodies and are renewed periodically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-2 border-gold/30 group">
              <Image
                src="/images/Certificates_and_Results/skif-bd-affilation-certificate-.jpg"
                alt="SKIF-BD Affiliation Certificate"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4 pt-12">
                <p className="text-white font-semibold text-sm uppercase tracking-wide">SKIF International Affiliation Certificate</p>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-2 border-gold/30 group">
              <Image
                src="/images/Certificates_and_Results/tz-SKIF-3dan-certificate.jpg"
                alt="SKIF Dan Certificate"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4 pt-12">
                <p className="text-white font-semibold text-sm uppercase tracking-wide">SKIF Dan Grading Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
