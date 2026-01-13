import { Clock } from 'lucide-react';
import { Article } from '../../types';

interface SmallArticleCardProps {
  article: Article;
  onReadMore: (id: string) => void;
}

export default function SmallArticleCard({ article, onReadMore }: SmallArticleCardProps) {
  return (
    <article
      onClick={() => onReadMore(article.id)}
      className="group cursor-pointer flex space-x-4 hover:bg-gray-50 p-3 -mx-3 rounded-lg transition-colors"
    >
      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 min-w-0">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {article.category}
        </span>
        <h4 className="text-sm font-serif font-bold mt-1 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {article.title}
        </h4>
        <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500">
          <Clock size={12} />
          <span>{article.readTime} min</span>
        </div>
      </div>
    </article>
  );
}
