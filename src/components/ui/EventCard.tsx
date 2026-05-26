import Image from "next/image"
import Link from "next/link"
import { Event } from "@/types"
import { formatDateShort } from "@/lib/utils"
import { Badge } from "./Badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./Card"
import { Button } from "./Button"

interface EventCardProps {
  event: Event
  compact?: boolean
}

export function EventCard({ event, compact = false }: EventCardProps) {
  const isUpcoming = new Date(event.startDate) > new Date()
  
  // WKF style category colors
  const categoryColor = {
    'national': 'bg-navy text-white',
    'international': 'bg-gold text-navy',
    'seminar': 'bg-forest text-white',
    'training-camp': 'bg-slate-600 text-white',
  }

  if (compact) {
    return (
      <Card className="flex flex-col sm:flex-row overflow-hidden card-hover rounded-lg border-l-4 border-l-crimson">
        <div className="relative w-full sm:w-48 h-32 sm:h-auto shrink-0">
          <Image
            src={event.featuredImage}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col flex-grow p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <span className="text-xs font-bold text-crimson uppercase tracking-wide block mb-1">
                {formatDateShort(event.startDate)} {event.endDate !== event.startDate && `- ${formatDateShort(event.endDate)}`}
              </span>
              <h3 className="font-heading text-lg font-bold text-navy line-clamp-1 hover:text-crimson transition-colors">
                <Link href={`/events/${event.slug}`}>{event.title}</Link>
              </h3>
            </div>
          </div>
          <div className="flex items-center text-sm text-text-secondary mt-auto">
            <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{event.location}</span>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="h-full flex flex-col rounded-xl overflow-hidden group card-hover border-border-light shadow-sm">
      <Link href={`/events/${event.slug}`} className="block relative h-48 sm:h-56 overflow-hidden shrink-0">
        <Image
          src={event.featuredImage}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {isUpcoming ? (
            <Badge variant="live">Upcoming</Badge>
          ) : (
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">Past Event</Badge>
          )}
          <Badge className={`border-0 ${categoryColor[event.category]}`}>
            {event.category.replace('-', ' ')}
          </Badge>
        </div>
      </Link>
      
      <div className="flex flex-col flex-grow p-5 sm:p-6 bg-white">
        <div className="flex items-center gap-3 mb-3 border-b border-border-light/50 pb-3">
          <div className="bg-surface rounded-lg p-2 text-center min-w-[3.5rem] shrink-0 border border-border-light">
            <span className="block text-xs font-bold text-crimson uppercase">
              {new Date(event.startDate).toLocaleString('default', { month: 'short' })}
            </span>
            <span className="block text-xl font-heading font-bold text-navy">
              {new Date(event.startDate).getDate()}
            </span>
          </div>
          <CardTitle className="text-lg sm:text-xl line-clamp-2 group-hover:text-crimson transition-colors leading-tight">
            <Link href={`/events/${event.slug}`}>
              {event.title}
            </Link>
          </CardTitle>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-start text-sm text-text-secondary">
            <svg className="w-4 h-4 mr-2 mt-0.5 text-navy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-start text-sm text-text-secondary">
            <svg className="w-4 h-4 mr-2 mt-0.5 text-navy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {formatDateShort(event.startDate)}
              {event.endDate !== event.startDate && ` - ${formatDateShort(event.endDate)}`}
            </span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <Link href={`/events/${event.slug}`} className="w-full">
            <Button 
              variant={event.isRegistrationOpen ? "crimson" : "outline"} 
              className="w-full rounded-full"
            >
              {event.isRegistrationOpen ? 'Register Now' : 'View Details'}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
