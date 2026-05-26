import Image from "next/image"
import Link from "next/link"
import { Partner } from "@/types"

interface LogoWallProps {
  partners: Partner[]
}

export function LogoWall({ partners }: LogoWallProps) {
  if (!partners || partners.length === 0) return null;

  return (
    <div className="bg-surface py-12 border-y border-border-light overflow-hidden">
      <div className="section-container relative">
        {/* Gradient fades for smooth scroll effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10" />
        
        <div className="flex overflow-hidden group">
          <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {/* Triplicate for seamless looping across ultra-wide screens */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="mx-8 sm:mx-12 md:mx-16 flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {partner.url && partner.url !== '#' ? (
                  <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
