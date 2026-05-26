'use client';

import { cn } from "@/lib/utils"

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function FilterTabs({ tabs, activeTab, onTabChange, className }: FilterTabsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300",
            activeTab === tab 
              ? "bg-navy text-white shadow-md" 
              : "bg-surface text-text-secondary hover:bg-navy/10 hover:text-navy"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
