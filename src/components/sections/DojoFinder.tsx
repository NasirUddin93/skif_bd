'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const divisions = [
  'Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 
  'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh'
];

export function DojoFinder() {
  const router = useRouter();
  const [selectedDivision, setSelectedDivision] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDivision) {
      router.push(`/dojos?division=${selectedDivision.toLowerCase()}`);
    } else {
      router.push('/dojos');
    }
  };

  return (
    <section className="py-20 bg-surface relative">
      {/* Karate silhouette background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full max-w-4xl h-auto" fill="currentColor">
          <path d="M48.8,12.7c-2.4,0-4.3,1.9-4.3,4.3s1.9,4.3,4.3,4.3c2.4,0,4.3-1.9,4.3-4.3S51.1,12.7,48.8,12.7z M48.7,24 c-2.6-0.1-5.1,0.5-7.4,1.8c-2,1.2-3.8,2.7-5.5,4.3c-2.2,2.1-4.2,4.3-6.2,6.6c-2.5,3.1-4.5,6.5-5.9,10.2c-0.8,2.1-1.3,4.3-1.4,6.5 c0.1,2.8,0.7,5.5,1.9,8.1c1.3,2.5,3.1,4.7,5.3,6.5c1.4,1.1,2.9,2,4.5,2.7c1.4,0.6,3,1.1,4.5,1.4c1.8,0.3,3.7,0.3,5.6,0.1 c1.6-0.2,3.1-0.7,4.6-1.3c2.8-1.2,5.3-3.1,7.2-5.4c1.7-2.2,3-4.7,4-7.4c1-2.9,1.6-5.9,1.9-8.9c0.2-2.3,0.1-4.7-0.4-7 c-0.6-2.5-1.5-4.8-2.9-6.9c-1.3-2-2.9-3.8-4.7-5.3C52.7,24.8,50.7,24.1,48.7,24z M46.5,33.1c1.7-0.7,3.6-0.9,5.5-0.5 c2.1,0.4,4,1.5,5.5,3c1.3,1.4,2.3,3,3,4.8c0.6,1.8,1,3.7,1,5.6c0,2.1-0.4,4.2-1.3,6.1c-0.8,1.7-2,3.3-3.4,4.5 c-1.6,1.4-3.5,2.3-5.5,2.8c-2.3,0.5-4.7,0.4-7-0.2c-2.1-0.6-4.1-1.8-5.7-3.4c-1.4-1.5-2.5-3.3-3.1-5.3c-0.5-1.9-0.7-3.9-0.5-5.9 c0.3-2.1,1.1-4,2.2-5.7C39.4,36.1,41.9,34,44.7,33.1H46.5z"/>
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="bg-navy rounded-2xl shadow-xl overflow-hidden border border-border-light/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <div className="inline-block mb-4 px-3 py-1 bg-crimson/20 border border-crimson/30 rounded w-fit text-crimson-light text-xs font-bold uppercase tracking-widest">
                Dojo Directory
              </div>
              <h2 className="heading-display text-white mb-4 leading-tight">
                Find Your Nearest Dojo
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Join our growing network of certified SKIF dojos across Bangladesh. Start your martial arts journey today with expert instructors in your area.
              </p>
              
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <select 
                    value={selectedDivision}
                    onChange={(e) => setSelectedDivision(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg bg-white border-0 text-navy font-medium outline-none focus:ring-2 focus:ring-crimson appearance-none cursor-pointer"
                  >
                    <option value="" className="text-text-secondary">Select Division (All)</option>
                    {divisions.map(div => (
                      <option key={div} value={div}>{div}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-text-secondary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <Button type="submit" variant="crimson" className="h-12 px-8 shrink-0 rounded-lg">
                  Search Dojos
                </Button>
              </form>
            </div>
            
            <div className="hidden md:block bg-crimson relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 z-10" />
              {/* This will be replaced with an actual image */}
              <div className="absolute inset-0 bg-[url('/images/hero/hero-1.webp')] bg-cover bg-center mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center z-20 p-12">
                <div className="text-center">
                  <div className="text-5xl font-heading font-bold text-white mb-2">50+</div>
                  <div className="text-gold font-bold uppercase tracking-wider">Affiliated Dojos</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
