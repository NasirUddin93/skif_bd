import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PresidentWelcome() {
  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image (President Portrait) */}
          <div className="relative">
            {/* Gold frame accent */}
            <div className="absolute -inset-4 border-2 border-gold/30 rounded-2xl transform rotate-2 hidden md:block" />
            <div className="absolute -inset-4 border-2 border-gold/30 rounded-2xl transform -rotate-1 hidden md:block" />
            
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-navy z-10">
              <Image
                src="/images/members/president.webp"
                alt="President of SKIF-BD"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6 pt-20">
                <h3 className="text-white font-heading text-2xl font-bold uppercase tracking-wide">
                  Sensei Mohammad Kamal Uddin
                </h3>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider">
                  President, SKIF-Bangladesh
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-8 h-0.5 bg-crimson" />
                  <span className="text-white/80 text-xs font-bold uppercase">6th Dan Black Belt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Content */}
          <div className="relative z-10">
            <SectionHeading 
              title="Message from the President" 
              subtitle="Welcome to the official portal of SKIF-Bangladesh."
            />
            
            <div className="prose prose-lg text-text-secondary">
              <p className="lead text-xl text-navy font-medium italic border-l-4 border-crimson pl-6 mb-8">
                "Karate is not just about physical strength or mastering techniques; it is a lifelong journey of character development, discipline, and mutual respect."
              </p>
              
              <p className="mb-6">
                Since our inception, SKIF-Bangladesh has been dedicated to propagating the authentic teachings of Shotokan Karate as envisioned by Kancho Nobuaki Kanazawa. Our mission is to empower the youth of Bangladesh by instilling the core values of traditional martial arts.
              </p>
              
              <p className="mb-10">
                Whether you are a beginner looking to take your first step onto the tatami, or an advanced practitioner striving for perfection, our federation provides the highest standard of instruction, state-of-the-art facilities, and a supportive community to help you achieve your goals. Let us train hard, cultivate our spirits, and build a stronger nation together.
              </p>
              
              {/* Signature Placeholder */}
              <div className="mt-8">
                <div className="font-heading text-3xl text-navy/20 font-bold italic transform -rotate-2">
                  M. Kamal Uddin
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
