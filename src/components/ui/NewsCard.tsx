import Image from "next/image"
import Link from "next/link"
import { Article } from "@/types"
import { formatDateShort } from "@/lib/utils"
import { Badge } from "./Badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./Card"
import { Button } from "./Button"

interface NewsCardProps {
  article: Article
  featured?: boolean
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <Link href={`/news/${article.slug}`} className="block h-full">
        <Card className="h-full border-0 rounded-none shadow-none group bg-surface-dark overflow-hidden relative card-hover">
          <div className="absolute inset-0 w-full h-full">
            {/* AI Generated image placeholder: This will be replaced with real image */}
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 overlay-gradient" />
          </div>
          
          <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-12 z-10 text-white min-h-[400px]">
            <div className="mb-4 flex items-center gap-3">
              <Badge variant="crimson">{article.category.replace('-', ' ')}</Badge>
              <span className="text-sm font-medium text-white/80">
                {formatDateShort(article.publishedAt)}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 leading-tight group-hover:text-gold transition-colors">
              {article.title}
            </h3>
            
            <p className="text-white/80 text-sm sm:text-base mb-6 line-clamp-2 max-w-2xl">
              {article.excerpt}
            </p>
            
            <div>
              <Button variant="crimson" className="rounded-full pointer-events-none group-hover:bg-white group-hover:text-crimson">
                Read Full Story
              </Button>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Card className="h-full flex flex-col rounded-xl overflow-hidden group card-hover border-border-light shadow-sm">
      <Link href={`/news/${article.slug}`} className="block relative h-48 sm:h-56 overflow-hidden shrink-0">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="default" className="bg-navy/90 backdrop-blur-sm">
            {article.category.replace('-', ' ')}
          </Badge>
        </div>
      </Link>
      
      <div className="flex flex-col flex-grow p-5 sm:p-6 bg-white">
        <div className="text-sm text-text-secondary mb-2 font-medium">
          {formatDateShort(article.publishedAt)}
        </div>
        
        <CardTitle className="mb-3 text-lg sm:text-xl line-clamp-2 group-hover:text-crimson transition-colors">
          <Link href={`/news/${article.slug}`}>
            {article.title}
          </Link>
        </CardTitle>
        
        <p className="text-text-secondary text-sm mb-5 line-clamp-2 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="mt-auto pt-4 border-t border-border-light/50">
          <Link 
            href={`/news/${article.slug}`}
            className="inline-flex items-center text-sm font-semibold text-crimson hover:text-crimson-dark uppercase tracking-wide group/link"
          >
            Read Article
            <svg 
              className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  )
}
