import { PageHero } from '@/components/layout/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';

export default function StructurePage() {
  return (
    <>
      <PageHero 
        title="Structure & Style" 
        subtitle="The philosophy, grading system, and technical rules of Shotokan Karate."
        breadcrumbs={[{ label: 'Structure & Style', href: '/structure' }]}
        backgroundImage="/images/Gallery/P-3.jpg"
      />
      
      <section className="py-20 bg-surface">
        <div className="section-container">
          <SectionHeading title="The Philosophy of Shotokan Karate" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="prose prose-lg text-text-secondary">
              <p>
                Shotokan Karate is a traditional Japanese martial art founded by Gichin Funakoshi. It is characterized by deep, strong stances that provide stability, enable powerful movements, and strengthen the legs. 
              </p>
              <p>
                The philosophy of Shotokan is deeply rooted in the concept of Dojo Kun, a set of five guiding principles that every practitioner must strive to uphold both inside and outside the dojo:
              </p>
              
              <ul className="list-none pl-0 space-y-4 mt-6">
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center font-bold mr-4 shrink-0">1</span>
                  <div>
                    <strong className="text-navy block">Seek Perfection of Character</strong>
                    <span className="text-sm">Jinkaku Kansei ni Tsutomuru Koto</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center font-bold mr-4 shrink-0">2</span>
                  <div>
                    <strong className="text-navy block">Be Faithful</strong>
                    <span className="text-sm">Makoto no Michi o Mamoru Koto</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center font-bold mr-4 shrink-0">3</span>
                  <div>
                    <strong className="text-navy block">Endeavor</strong>
                    <span className="text-sm">Doryoku no Seishin o Yashinau Koto</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center font-bold mr-4 shrink-0">4</span>
                  <div>
                    <strong className="text-navy block">Respect Others</strong>
                    <span className="text-sm">Reigi o Omonzuru Koto</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center font-bold mr-4 shrink-0">5</span>
                  <div>
                    <strong className="text-navy block">Refrain From Violent Behavior</strong>
                    <span className="text-sm">Kekki no Yu o Imashimuru Koto</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy p-10 rounded-2xl text-white shadow-xl">
               <h3 className="font-heading text-2xl text-gold mb-6 uppercase tracking-wide">The Three Pillars</h3>
               <div className="space-y-6">
                 <Card className="bg-white/10 border-white/20 text-white">
                   <CardContent className="p-6">
                     <h4 className="font-bold text-lg mb-2 text-crimson-light uppercase">Kihon (Basics)</h4>
                     <p className="text-sm text-white/80">The foundation of all karate techniques. Repetitive practice of stances, blocks, punches, and kicks to develop muscle memory, speed, and power.</p>
                   </CardContent>
                 </Card>
                 <Card className="bg-white/10 border-white/20 text-white">
                   <CardContent className="p-6">
                     <h4 className="font-bold text-lg mb-2 text-crimson-light uppercase">Kata (Form)</h4>
                     <p className="text-sm text-white/80">Detailed choreographed patterns of movements practiced solo. Kata teaches the application of techniques, rhythm, and mental focus against imaginary opponents.</p>
                   </CardContent>
                 </Card>
                 <Card className="bg-white/10 border-white/20 text-white">
                   <CardContent className="p-6">
                     <h4 className="font-bold text-lg mb-2 text-crimson-light uppercase">Kumite (Sparring)</h4>
                     <p className="text-sm text-white/80">The practical application of kihon and kata against a real opponent. It ranges from basic step sparring to free sparring (jiyu kumite).</p>
                   </CardContent>
                 </Card>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
