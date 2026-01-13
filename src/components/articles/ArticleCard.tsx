import { Clock } from 'lucide-react';
import { Article } from '../../types';
import Badge from '../ui/Badge';

interface ArticleCardProps {
  article: Article;
  onReadMore: (id: string) => void;
}

export default function ArticleCard({ article, onReadMore }: ArticleCardProps) {
  return (
    <article
      onClick={() => onReadMore(article.id)}
      className="group cursor-pointer bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-4 left-4">
          <Badge>{article.category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="font-medium">{article.author.name}</span>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{article.readTime} min</span>
          </div>
        </div>
      </div>
    </article>
  );
}
