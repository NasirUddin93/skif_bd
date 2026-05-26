import { Dojo } from "@/types"
import { Card, CardContent, CardTitle } from "./Card"
import { Badge } from "./Badge"

interface DojoCardProps {
  dojo: Dojo
}

export function DojoCard({ dojo }: DojoCardProps) {
  return (
    <Card className="h-full flex flex-col card-hover border-border-light shadow-sm overflow-visible">
      <div className="relative pt-6 px-6 bg-surface-dark rounded-t-xl text-white pb-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-crimson rounded-bl-full opacity-20 -mr-10 -mt-10 pointer-events-none" />
        
        <div className="flex justify-between items-start gap-4 relative z-10">
          <div>
            <Badge variant="gold" className="mb-2">
              {dojo.division}
            </Badge>
            <CardTitle className="text-xl text-white font-bold mb-1">
              {dojo.name}
            </CardTitle>
            <div className="text-white/70 text-sm flex items-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{dojo.district}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-grow p-6 bg-white rounded-b-xl relative -mt-4 shadow-[0_-8px_16px_rgba(0,0,0,0.05)] mx-3 z-10 border border-border-light/50">
        <div className="space-y-4">
          <div>
            <div className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">
              Chief Instructor
            </div>
            <div className="font-semibold text-navy flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-surface flex items-center justify-center text-crimson">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {dojo.chiefInstructor}
            </div>
          </div>
          
          <div>
            <div className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">
              Contact
            </div>
            <div className="font-medium text-text-primary text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-crimson shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {dojo.contactPhone}
            </div>
          </div>
          
          <div className="border-t border-border-light pt-3 mt-3">
            <div className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">
              Training Days
            </div>
            <div className="flex flex-wrap gap-1.5">
              {dojo.trainingDays.map(day => (
                <span key={day} className="text-xs bg-surface text-navy font-medium px-2 py-1 rounded">
                  {day.substring(0, 3)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 pt-2 bg-white rounded-b-xl text-center">
        <a 
          href={dojo.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full py-2.5 px-4 text-sm font-semibold text-navy bg-surface hover:bg-navy hover:text-white rounded-lg transition-colors duration-200 group"
        >
          <svg className="w-4 h-4 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Get Directions
        </a>
      </div>
    </Card>
  )
}
