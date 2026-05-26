'use client';

import { useState, useEffect } from 'react';
import { getTimeRemaining } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: string;
  light?: boolean;
}

export function CountdownTimer({ targetDate, light = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
      
      if (remaining.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-2 sm:gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-14 h-16 sm:w-20 sm:h-24 rounded-lg bg-border-light animate-pulse mb-1`} />
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft.total <= 0) {
    return (
      <div className={`text-center p-4 rounded-lg border-2 border-dashed ${light ? 'border-white/30 text-white' : 'border-border-light text-navy'}`}>
        <span className="font-heading text-xl uppercase tracking-wider font-bold text-crimson">Event Has Started</span>
      </div>
    );
  }

  const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className={`
        relative w-14 h-16 sm:w-20 sm:h-24 sm:text-5xl rounded-lg shadow-inner flex items-center justify-center
        font-heading font-bold text-3xl mb-1 sm:mb-2
        ${light ? 'bg-white/10 text-white border border-white/20' : 'bg-surface border border-border-light text-navy'}
      `}>
        {value.toString().padStart(2, '0')}
      </div>
      <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${light ? 'text-white/70' : 'text-text-secondary'}`}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-2 sm:gap-4">
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className={`font-heading text-2xl sm:text-4xl mt-3 sm:mt-5 ${light ? 'text-white/50' : 'text-border-light'}`}>:</span>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <span className={`font-heading text-2xl sm:text-4xl mt-3 sm:mt-5 ${light ? 'text-white/50' : 'text-border-light'}`}>:</span>
      <TimeBlock value={timeLeft.minutes} label="Mins" />
      <span className={`font-heading text-2xl sm:text-4xl mt-3 sm:mt-5 ${light ? 'text-white/50' : 'text-border-light'}`}>:</span>
      <TimeBlock value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
