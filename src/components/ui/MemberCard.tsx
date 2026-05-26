import Image from "next/image"
import { CommitteeMember } from "@/types"
import { Card, CardContent } from "./Card"

interface MemberCardProps {
  member: CommitteeMember
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="h-full flex flex-col group card-hover border-border-light overflow-hidden text-center">
      <div className="relative w-full pt-[100%] overflow-hidden bg-surface">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* WKF inspired colored overlay border on hover */}
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-crimson transition-colors duration-300 z-10" />
      </div>
      
      <CardContent className="pt-6 pb-6 flex-grow flex flex-col bg-white relative z-20">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap shadow-md">
          {member.designation}
        </div>
        
        <h3 className="font-heading text-lg sm:text-xl font-bold text-navy mb-1 leading-tight group-hover:text-crimson transition-colors">
          {member.name}
        </h3>
        
        <div className="text-sm font-medium text-text-secondary mb-4 flex items-center justify-center gap-2">
          <span className="w-3 h-0.5 bg-gold rounded-full" />
          {member.rank}
          <span className="w-3 h-0.5 bg-gold rounded-full" />
        </div>
        
        <div className="mt-auto pt-4 flex items-center justify-center gap-3">
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="w-8 h-8 rounded-full bg-surface text-navy hover:bg-crimson hover:text-white flex items-center justify-center transition-colors"
              title="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
          {member.phone && (
            <a 
              href={`tel:${member.phone}`}
              className="w-8 h-8 rounded-full bg-surface text-navy hover:bg-crimson hover:text-white flex items-center justify-center transition-colors"
              title="Phone"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
