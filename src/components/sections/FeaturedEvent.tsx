'use client';

import { events } from '@/data/events';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function FeaturedEvent() {
  // Find the next upcoming event
  const upcomingEvent = events.find(e => new Date(e.startDate) > new Date()) || events[0];

  if (!upcomingEvent) return null;

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${upcomingEvent.featuredImage})` }}
      />
      <div className="absolute inset-0 bg-navy/80 z-0" />
      
      <div className="section-container relative z-10">
        <SectionHeading 
          title="Next Major Event" 
          light 
          centered
        />
        
        <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              {upcomingEvent.title}
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  {new Date(upcomingEvent.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{upcomingEvent.location}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <CountdownTimer targetDate={upcomingEvent.startDate} light />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/events/${upcomingEvent.slug}`}>
              <Button variant="crimson" size="lg" className="w-full sm:w-auto min-w-[200px]">
                {upcomingEvent.isRegistrationOpen ? 'Register Now' : 'View Details'}
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/30 hover:bg-white hover:text-navy min-w-[200px]">
                All Events
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
