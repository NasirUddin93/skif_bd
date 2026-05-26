'use client';

import { useState } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { events } from '@/data/events';
import { EventCard } from '@/components/ui/EventCard';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { SectionHeading } from '@/components/ui/SectionHeading';

const eventCategories = ['All', 'National', 'International', 'Seminar', 'Training Camp'];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('All');
  
  const filteredEvents = activeTab === 'All' 
    ? events 
    : events.filter(event => event.category.toLowerCase().replace('-', ' ') === activeTab.toLowerCase());

  const upcomingEvents = filteredEvents.filter(e => new Date(e.startDate) >= new Date());
  const pastEvents = filteredEvents.filter(e => new Date(e.startDate) < new Date());

  return (
    <>
      <PageHero 
        title="Events & Calendar" 
        subtitle="Stay updated with our national tournaments, international seminars, and training camps."
        breadcrumbs={[{ label: 'Events & Calendar', href: '/events' }]}
        backgroundImage="/images/hero/hero-1.webp"
      />
      
      <section className="py-20 bg-surface min-h-screen">
        <div className="section-container">
          
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <SectionHeading title="Event Calendar" className="mb-0" />
            <FilterTabs 
              tabs={eventCategories} 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
            />
          </div>

          <div className="mb-16">
            <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide mb-6 flex items-center">
              <span className="w-3 h-8 bg-crimson mr-3 inline-block rounded-sm"></span>
              Upcoming Events
            </h3>
            
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {upcomingEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-xl border border-border-light shadow-sm">
                <p className="text-text-secondary text-lg">No upcoming events found for this category.</p>
              </div>
            )}
          </div>

          {pastEvents.length > 0 && (
            <div>
              <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide mb-6 flex items-center">
                <span className="w-3 h-8 bg-border-light mr-3 inline-block rounded-sm"></span>
                Past Events
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 opacity-70 hover:opacity-100 transition-opacity">
                {pastEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
