import { ArrowRight } from 'lucide-react';
import { Article } from '../types';
import Badge from './ui/Badge';

interface HeroProps {
  article: Article;
  onReadMore: (id: string) => void;
}

export default function Hero({ article, onReadMore }: HeroProps) {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden group">
      <div className="absolute inset-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative h-full flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="max-w-3xl">
            <Badge variant="featured" className="mb-6">
              {article.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            <button
              onClick={() => onReadMore(article.id)}
              className="group/btn inline-flex items-center space-x-2 text-white font-semibold text-lg hover:text-gray-300 transition-colors"
            >
              <span>Read Full Story</span>
              <ArrowRight
                size={20}
                className="transform group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
