import { Clock } from 'lucide-react';
import { Article } from '../../types';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface FeaturedArticleCardProps {
  article: Article;
  onReadMore: (id: string) => void;
}

export default function FeaturedArticleCard({ article, onReadMore }: FeaturedArticleCardProps) {
  return (
    <article className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute top-6 left-6">
          {article.editorsPick && (
            <Badge variant="editors-pick">Editor's Pick</Badge>
          )}
          {article.featured && !article.editorsPick && (
            <Badge variant="featured">Featured</Badge>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <Badge className="mb-4">{article.category}</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
            {article.title}
          </h2>
          <p className="text-lg text-gray-200 mb-6 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <span>{article.author.name}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{article.readTime} min read</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onReadMore(article.id)}
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
