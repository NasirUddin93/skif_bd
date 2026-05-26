import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function VideoHighlights() {
  const videos = [
    { id: '1', title: 'SKIF World Championship Finals', embedId: 'dQw4w9WgXcQ' },
    { id: '2', title: 'Kata Demonstration: Unsu', embedId: 'dQw4w9WgXcQ' },
    { id: '3', title: 'National Kumite Highlights', embedId: 'dQw4w9WgXcQ' },
  ];

  return (
    <section className="py-20 bg-surface-dark relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-surface-dark to-crimson/20 opacity-50 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
          <SectionHeading 
            title="Video Highlights" 
            light
            className="mb-0"
          />
          <a href="https://youtube.com/@skifbd" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button variant="crimson" className="rounded-full gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Subscribe
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group relative rounded-xl overflow-hidden aspect-video bg-navy shadow-lg card-hover">
              {/* 
                In a real app, this would be an actual iframe or an image placeholder 
                that loads the iframe on click for performance.
                We'll use a styled placeholder for now.
              */}
              <div className="absolute inset-0 bg-[url('/images/events/national-championship.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 overlay-gradient group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-crimson/90 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold line-clamp-1">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:hidden text-center">
          <a href="https://youtube.com/@skifbd" target="_blank" rel="noopener noreferrer">
            <Button variant="crimson" className="w-full rounded-full gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Subscribe on YouTube
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
