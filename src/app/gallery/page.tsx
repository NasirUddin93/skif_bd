'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';

const galleryPhotos = [
  '/images/Gallery/GS-Pic-1-Cw.jpg',
  '/images/Gallery/P-2.jpg',
  '/images/Gallery/P-3.jpg',
  '/images/Gallery/P-4.jpg',
  '/images/Gallery/P-5.jpg',
  '/images/Gallery/P-6.jpg',
  '/images/Gallery/P-7.jpg',
  '/images/Gallery/P-8.jpg',
  '/images/Gallery/P-9.jpg',
  '/images/Gallery/P-10.jpg',
  '/images/Gallery/01.jpg',
  '/images/Gallery/02.jpg',
  '/images/Gallery/03.jpg',
  '/images/Gallery/04.jpg',
  '/images/Gallery/05.jpg',
  '/images/Gallery/06.jpg',
  '/images/Gallery/07.jpg',
  '/images/Gallery/08.jpg',
  '/images/Gallery/09.jpg',
  '/images/Gallery/Pic.jpg',
  '/images/Gallery/np2.jpg',
  '/images/Gallery/71.jpg',
  '/images/Gallery/72.jpg',
  '/images/Gallery/74.jpg',
  '/images/Gallery/75.jpg',
  '/images/Gallery/77.jpg',
  '/images/Gallery/86.jpg',
  '/images/Gallery/90.jpg',
  '/images/Gallery/94.jpg',
  '/images/Gallery/100.jpg',
  '/images/Gallery/42.jpg',
  '/images/Gallery/47.jpg',
  '/images/Gallery/53.jpg',
  '/images/Gallery/60.jpg',
  '/images/Gallery/62.jpg',
  '/images/Gallery/23.jpg',
  '/images/Gallery/33.jpg',
  '/images/Gallery/34.jpg',
  '/images/WhatsApp_Uploads/wa_2024_11_16_34.jpg',
  '/images/WhatsApp_Uploads/wa_2024_11_16_79.jpg',
  '/images/WhatsApp_Uploads/wa_2024_11_16_93.jpg',
  '/images/WhatsApp_Uploads/wa_2024_11_15_35.jpg',
  '/images/WhatsApp_Uploads/wa_2024_11_15_84.jpg',
  '/images/WhatsApp_Uploads/wa_2024_10_30_2.jpg',
  '/images/WhatsApp_Uploads/wa_2024_10_30_44.jpg',
  '/images/WhatsApp_Uploads/wa_2024_10_19_11.jpg',
  '/images/WhatsApp_Uploads/wa_2024_06_06_7.jpg',
  '/images/Events_and_Tournaments/Zia-Cup-Karate-26-2026-02-27-at-01.48.01.jpeg',
  '/images/Events_and_Tournaments/5-Pandop-zia-cup-2026-02-27-at-01.49.27.jpeg',
  '/images/Events_and_Tournaments/Aminul-vai-Minister-zia-cup-2026-02-27-at-01.48.33.jpeg',
  '/images/Guests/SKIF-Special-Guest-Nestor-Parreno-IKO-.jpg',
  '/images/Guests/SKIF-Special-Guest-DR-ABM-Obaidul-islam.jpg',
  '/images/Guests/SKIF-Spefial-Guest-Nazmul-Hasan.jpg',
  '/images/Dojos/SKA-1.jpg',
  '/images/Dojos/SKA2.jpg',
  '/images/Dojos/SKA4.jpg',
  '/images/Dojos/SKA5.jpg',
  '/images/Dojos/SKA6.jpg',
  '/images/Dojos/SKA7.jpg',
  '/images/Dojos/SKA8.jpg',
  '/images/Dojos/SKA10.jpg',
  '/images/Dojos/SKA11.jpg',
  '/images/Dojos/SKA12.jpg',
];

const videos = [
  {
    type: 'local' as const,
    src: '/images/Videos/Somoy-Tv.mp4',
    poster: '/images/Gallery/GS-Pic-1-Cw.jpg',
    title: 'Somoy TV Coverage — SKIF-Bangladesh',
    desc: 'National television coverage of SKIF-BD events and activities.',
  },
  {
    type: 'local' as const,
    src: '/images/Videos/mp41.mp4',
    poster: '/images/Gallery/P-2.jpg',
    title: 'SKIF-BD Training Highlights',
    desc: 'Training and competition highlights from SKIF-BD events.',
  },
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialTab = searchParams.get('tab') === 'videos' ? 'Videos' : 'Photos';

  const [activeTab, setActiveTab] = useState<'Photos' | 'Videos'>(initialTab as 'Photos' | 'Videos');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabChange = (tab: 'Photos' | 'Videos') => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    if (tab === 'Videos') params.set('tab', 'videos');
    else params.delete('tab');
    router.replace(`${pathname}?${params.toString()}`);
  };

  const openLightbox = (src: string, idx: number) => {
    setLightbox(src);
    setCurrentIndex(idx);
  };

  const closeLightbox = () => setLightbox(null);

  const prev = () => {
    const idx = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    setCurrentIndex(idx);
    setLightbox(galleryPhotos[idx]);
  };

  const next = () => {
    const idx = (currentIndex + 1) % galleryPhotos.length;
    setCurrentIndex(idx);
    setLightbox(galleryPhotos[idx]);
  };

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual chronicle of SKIF-Bangladesh's events, tournaments, training sessions, and milestones."
        breadcrumbs={[{ label: 'Gallery', href: '/gallery' }]}
        backgroundImage="/images/Gallery/GS-Pic-1-Cw.jpg"
      />

      <section className="py-16 bg-surface min-h-screen">
        <div className="section-container">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-10 bg-white rounded-xl p-1.5 shadow-sm border border-border-light w-fit">
            {(['Photos', 'Videos'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
                  activeTab === tab
                    ? 'bg-crimson text-white shadow'
                    : 'text-text-secondary hover:text-navy'
                }`}
              >
                {tab === 'Photos' ? '📷 Photos' : '🎬 Videos'}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          {activeTab === 'Photos' && (
            <>
              <p className="text-text-secondary text-sm mb-6">{galleryPhotos.length} photos — click any image to enlarge</p>
              <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
                {galleryPhotos.map((src, idx) => (
                  <div
                    key={src}
                    className="relative break-inside-avoid rounded-lg overflow-hidden cursor-pointer group shadow hover:shadow-xl transition-shadow"
                    onClick={() => openLightbox(src, idx)}
                  >
                    <Image
                      src={src}
                      alt={`Gallery photo ${idx + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Videos */}
          {activeTab === 'Videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div key={video.src} className="bg-white rounded-2xl overflow-hidden shadow border border-border-light hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video bg-navy">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster={video.poster}
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-navy text-lg mb-1">{video.title}</h3>
                    <p className="text-text-secondary text-sm">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-10 text-xl"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-10 text-xl"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            ›
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Gallery image"
              fill
              className="object-contain"
              priority
            />
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/60 text-xs">
              {currentIndex + 1} / {galleryPhotos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center text-navy font-semibold">Loading…</div>}>
      <GalleryContent />
    </Suspense>
  );
}
