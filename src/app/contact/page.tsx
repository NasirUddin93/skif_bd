import { PageHero } from '@/components/layout/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with SKIF-Bangladesh headquarters for general inquiries, affiliation requests, or membership information."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
        backgroundImage="/images/Gallery/P-3.jpg"
      />
      
      <section className="py-20 bg-surface">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Contact Information */}
            <div className="lg:col-span-5">
              <SectionHeading title="Get In Touch" />
              <p className="text-text-secondary mb-10">
                Have questions about joining a dojo, registering for an event, or affiliating your club with SKIF? Reach out to us using the contact details below or send a message.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-gold shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-navy uppercase mb-1">Headquarters</h4>
                    <p className="text-text-secondary">Mirpur Indoor Stadium, Section 2,<br/>Mirpur, Dhaka-1216, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-gold shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-navy uppercase mb-1">Phone</h4>
                    <p className="text-text-secondary">+880-1711-123456</p>
                    <p className="text-text-secondary">+880-1811-234567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-gold shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-navy uppercase mb-1">Email</h4>
                    <p className="text-text-secondary">info@skif-bd.com</p>
                    <p className="text-text-secondary">admin@skif-bd.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-lg border border-border-light p-8 lg:p-12">
                <h3 className="font-heading text-2xl font-bold text-navy uppercase tracking-wide mb-6">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-navy uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg bg-surface border border-border-light focus:ring-2 focus:ring-crimson focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-navy uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg bg-surface border border-border-light focus:ring-2 focus:ring-crimson focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-navy uppercase tracking-wider">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border-light focus:ring-2 focus:ring-crimson focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="affiliation">Dojo Affiliation</option>
                      <option value="membership">Membership Registration</option>
                      <option value="events">Events & Tournaments</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-navy uppercase tracking-wider">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border-light focus:ring-2 focus:ring-crimson focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <Button type="button" variant="crimson" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
