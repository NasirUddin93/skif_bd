'use client';

import { useState } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { dojos } from '@/data/dojos';
import { DojoCard } from '@/components/ui/DojoCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SearchInput } from '@/components/ui/SearchInput';
import { FilterTabs } from '@/components/ui/FilterTabs';

// Get unique divisions from data
const divisions = ['All', ...Array.from(new Set(dojos.map(d => d.division)))];

export default function DojosPage() {
  const [activeDivision, setActiveDivision] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDojos = dojos.filter(dojo => {
    const matchesDivision = activeDivision === 'All' || dojo.division === activeDivision;
    const matchesSearch = dojo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dojo.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dojo.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDivision && matchesSearch;
  });

  return (
    <>
      <PageHero 
        title="Dojo Directory" 
        subtitle="Find a certified SKIF affiliated dojo near you and start your martial arts journey."
        breadcrumbs={[{ label: 'Dojo Directory', href: '/dojos' }]}
        backgroundImage="/images/Gallery/P-2.jpg"
      />
      
      <section className="py-20 bg-surface min-h-screen">
        <div className="section-container">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-border-light mb-12">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
              <div className="w-full lg:w-1/3">
                <SearchInput 
                  placeholder="Search by dojo name or location..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
                <FilterTabs 
                  tabs={divisions} 
                  activeTab={activeDivision} 
                  onTabChange={setActiveDivision} 
                />
              </div>
            </div>
          </div>

          <SectionHeading 
            title={`${filteredDojos.length} Dojos Found`} 
            subtitle={activeDivision !== 'All' ? `In ${activeDivision} Division` : 'Across Bangladesh'}
          />
          
          {filteredDojos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredDojos.map(dojo => (
                <DojoCard key={dojo.id} dojo={dojo} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-xl border border-border-light shadow-sm">
              <svg className="w-16 h-16 text-text-secondary/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-bold text-navy mb-2">No dojos found</h3>
              <p className="text-text-secondary">Try adjusting your search criteria or selecting a different division.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveDivision('All'); }}
                className="mt-4 text-crimson font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
          
        </div>
      </section>
    </>
  );
}
