'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { NewsCard } from '@/components/ui/NewsCard';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { SearchInput } from '@/components/ui/SearchInput';
import { articles } from '@/data/articles';
import { Article } from '@/types';

const CATEGORIES = ['All', 'Highlight', 'News', 'Press Release'];

function NewsContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') ?? 'all';
  const matchedTab = CATEGORIES.find(c => c.toLowerCase().replace(' ', '-') === initialFilter) ?? 'All';

  const [activeTab, setActiveTab] = useState(matchedTab);
  const [query, setQuery] = useState('');

  const filtered = useMemo<Article[]>(() => {
    let list = articles;
    if (activeTab !== 'All') {
      const tabKey = activeTab.toLowerCase().replace(' ', '-') as Article['category'];
      list = list.filter(a => a.category === tabKey);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeTab, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Stay informed with the latest achievements, events, and announcements from SKIF-Bangladesh."
        breadcrumbs={[{ label: 'News', href: '/news' }]}
        backgroundImage="/images/Gallery/GS-Pic-1-Cw.jpg"
      />

      <section className="py-16 bg-surface min-h-screen">
        <div className="section-container">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <FilterTabs
              tabs={CATEGORIES}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            <div className="w-full md:w-72">
              <SearchInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-16 text-center border border-border-light shadow-sm">
              <svg className="w-12 h-12 text-text-secondary/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-text-secondary text-lg">No articles found.</p>
              <button onClick={() => { setActiveTab('All'); setQuery(''); }} className="mt-4 text-crimson font-semibold text-sm underline">
                Clear filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {featured && (
                <div className="mb-10 h-[420px] rounded-2xl overflow-hidden shadow-xl">
                  <NewsCard article={featured} featured />
                </div>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {rest.map(article => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default function NewsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center text-navy font-semibold">Loading…</div>}>
      <NewsContent />
    </Suspense>
  );
}
