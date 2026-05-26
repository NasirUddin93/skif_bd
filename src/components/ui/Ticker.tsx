'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TickerItem {
  text: string;
  href?: string;
  tag?: string;
}

interface TickerProps {
  items: TickerItem[];
}

export function Ticker({ items }: TickerProps) {
  const [isPaused, setIsPaused] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <div className="bg-navy border-b border-white/10 text-white overflow-hidden flex items-center h-10">
      <div className="bg-crimson h-full flex items-center px-4 md:px-6 font-bold uppercase text-xs tracking-wider z-10 shadow-[4px_0_10px_rgba(0,0,0,0.5)] shrink-0">
        Latest Updates
      </div>
      
      <div 
        className="flex-1 overflow-hidden relative h-full flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex whitespace-nowrap animate-ticker"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {/* We duplicate the items to create a seamless loop */}
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              {item.tag && (
                <span className="bg-gold text-navy text-[10px] font-bold px-2 py-0.5 rounded uppercase mr-3">
                  {item.tag}
                </span>
              )}
              
              {item.href ? (
                <Link href={item.href} className="text-sm hover:text-gold transition-colors font-medium">
                  {item.text}
                </Link>
              ) : (
                <span className="text-sm font-medium">{item.text}</span>
              )}
              
              <span className="mx-8 text-white/30">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
