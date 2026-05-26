import { articles } from '@/data/articles';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NewsCard } from '@/components/ui/NewsCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function LatestNews() {
  // Get the most recent 4 articles for the homepage
  const recentArticles = articles.slice(0, 4);
  const featuredArticle = recentArticles[0];
  const sideArticles = recentArticles.slice(1);

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
          <SectionHeading 
            title="Latest News & Highlights" 
            className="mb-0"
          />
          <Link href="/news" className="hidden sm:block">
            <Button variant="outline" className="rounded-full">
              View All News
            </Button>
          </Link>
        </div>

        {/* WKF Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Article (Left - 60%) */}
          <div className="lg:col-span-7">
            {featuredArticle && (
              <NewsCard article={featuredArticle} featured={true} />
            )}
          </div>
          
          {/* Side Articles (Right - 40%) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {sideArticles.map((article) => (
              <div key={article.id} className="flex-1">
                <NewsCard article={article} featured={false} />
              </div>
            ))}
          </div>
          
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 sm:hidden text-center">
          <Link href="/news">
            <Button variant="outline" className="w-full rounded-full">
              View All News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
