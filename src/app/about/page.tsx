import { PageHero } from '@/components/layout/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About SKIF Bangladesh" 
        subtitle="Discover our history, mission, and the legacy of Shotokan Karate in Bangladesh."
        breadcrumbs={[{ label: 'About Us', href: '/about' }]}
        backgroundImage="/images/Gallery/P-2.jpg"
      />
      
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <SectionHeading title="Our History" />
              <div className="prose prose-lg text-text-secondary">
                <p>
                  Shotokan Karate-Do International Federation (SKIF) Bangladesh was established with a singular vision: to propagate the authentic teachings of Shotokan Karate as envisioned by Kancho Nobuaki Kanazawa.
                </p>
                <p>
                  Since our inception, we have grown from a small group of dedicated practitioners to a nationwide federation with over 50 affiliated dojos across all major divisions of Bangladesh. Our journey is marked by a relentless pursuit of excellence, discipline, and the holistic development of our members.
                </p>
                <p>
                  We are officially recognized by SKIF Japan, the World Karate Federation (WKF), and the Bangladesh Karate Federation (BKF), ensuring that our training standards meet international benchmarks.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/WhatsApp_Uploads/wa_2024_11_16_34.jpg" 
                alt="SKIF Bangladesh History" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Animated Counters Section */}
            <div className="bg-surface p-8 rounded-xl text-center border-t-4 border-crimson shadow-sm">
              <div className="text-4xl font-heading font-bold text-navy mb-2">30+</div>
              <div className="text-sm font-bold text-text-secondary uppercase tracking-wider">Years of Excellence</div>
            </div>
            <div className="bg-surface p-8 rounded-xl text-center border-t-4 border-gold shadow-sm">
              <div className="text-4xl font-heading font-bold text-navy mb-2">5,000+</div>
              <div className="text-sm font-bold text-text-secondary uppercase tracking-wider">Active Members</div>
            </div>
            <div className="bg-surface p-8 rounded-xl text-center border-t-4 border-forest shadow-sm">
              <div className="text-4xl font-heading font-bold text-navy mb-2">50+</div>
              <div className="text-sm font-bold text-text-secondary uppercase tracking-wider">Affiliated Dojos</div>
            </div>
          </div>
          
          <div className="bg-navy text-white rounded-2xl p-10 lg:p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-crimson rounded-bl-full opacity-20 pointer-events-none" />
             
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                 <h3 className="font-heading text-2xl font-bold text-gold uppercase tracking-wide mb-4">Our Mission</h3>
                 <p className="text-white/80 leading-relaxed">
                   To promote, develop, and foster the practice of Shotokan Karate-Do in Bangladesh, maintaining the highest standards of technical excellence and preserving the traditional values of martial arts for the betterment of society.
                 </p>
               </div>
               <div>
                 <h3 className="font-heading text-2xl font-bold text-gold uppercase tracking-wide mb-4">Our Vision</h3>
                 <p className="text-white/80 leading-relaxed">
                   To be the premier martial arts organization in Bangladesh, empowering individuals through physical conditioning, mental discipline, and character development, while producing world-class athletes capable of competing on the global stage.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
