import { PageHero } from '@/components/layout/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { committeeMembers } from '@/data/committee';
import { MemberCard } from '@/components/ui/MemberCard';

export default function CommitteePage() {
  return (
    <>
      <PageHero 
        title="Executive Committee" 
        subtitle="Meet the dedicated leaders guiding SKIF-Bangladesh towards excellence."
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Executive Committee', href: '/about/committee' }
        ]}
      />
      
      <section className="py-20 bg-surface min-h-screen">
        <div className="section-container">
          <SectionHeading 
            title="Board of Directors" 
            subtitle="Our executive committee brings together decades of experience in martial arts, sports administration, and community development."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {committeeMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
