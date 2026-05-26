'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { mainNavigation } from '@/data/navigation';
import { NavItem } from '@/types';

function DropdownMenu({ items, isOpen }: { items: NavItem[]; isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg border border-border-light/50 z-50 dropdown-enter">
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-5 py-2.5 text-sm text-text-primary hover:bg-surface hover:text-crimson transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-border-light">
          <span className="font-heading text-xl font-bold text-navy uppercase">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-surface rounded-lg transition-colors" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="py-4">
          {mainNavigation.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-text-primary hover:text-crimson hover:bg-surface/50 uppercase tracking-wide transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-surface/30 border-l-2 border-crimson ml-5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block px-5 py-2.5 text-sm text-text-secondary hover:text-crimson transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-5 py-3 text-sm font-semibold text-text-primary hover:text-crimson hover:bg-surface/50 uppercase tracking-wide transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-crimson rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl font-heading">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl lg:text-2xl font-bold text-navy uppercase tracking-wider">
                SKIF-BD
              </span>
              <p className="text-[10px] text-text-secondary uppercase tracking-widest leading-none -mt-0.5">
                Shotokan Karate Bangladesh
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    activeDropdown === item.label ? 'text-crimson' : 'text-navy-light hover:text-crimson'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <DropdownMenu items={item.children} isOpen={activeDropdown === item.label} />
                )}
              </div>
            ))}
          </nav>

          {/* Search + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-surface rounded-lg transition-colors" aria-label="Search">
              <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              className="lg:hidden p-2 hover:bg-surface rounded-lg transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
