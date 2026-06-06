import Image from "next/image"
import Link from "next/link"

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs: Breadcrumb[];
}

export function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = "/images/Gallery/GS-Pic-1-Cw.jpg",
  breadcrumbs 
}: PageHeroProps) {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-navy overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover opacity-20"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
          <Link href="/" className="text-white/60 hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center gap-2">
              <span className="text-white/40">/</span>
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gold font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="text-white/60 hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Title & Subtitle */}
        <h1 className="heading-display text-white mb-4">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-white/80 max-w-2xl text-lg">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Decorative WKF-style bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-crimson via-navy to-crimson opacity-50" />
    </div>
  )
}
