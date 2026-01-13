import { Clock, Calendar, User, Share2, ArrowLeft } from 'lucide-react';
import { Article } from '../types';
import Badge from '../components/ui/Badge';
import ArticleCard from '../components/articles/ArticleCard';
import { useArticlesByCategory } from '../hooks/useArticles';

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
  onArticleClick: (id: string) => void;
}

export default function ArticlePage({ article, onBack, onArticleClick }: ArticlePageProps) {
  const { articles: categoryArticles } = useArticlesByCategory(article.category);
  const relatedArticles = categoryArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="bg-white">
      <button
        onClick={onBack}
        className="fixed top-24 left-4 z-40 p-3 bg-white shadow-lg rounded-full hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      <article>
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <Badge variant="featured" className="mb-4">
                {article.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white text-sm">
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span className="font-medium">{article.author.name}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-12 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={24} className="text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-lg">{article.author.name}</p>
                {article.author.bio && (
                  <p className="text-sm text-gray-600">{article.author.bio}</p>
                )}
              </div>
            </div>
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-2xl font-serif leading-relaxed text-gray-800 mb-8">
              {article.excerpt}
            </p>

            {article.content ? (
              <div
                className="space-y-6 text-gray-700 leading-relaxed prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-blockquote:border-l-4 prose-blockquote:border-gray-900 prose-blockquote:pl-6 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-gray-800"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            ) : (
              <p className="text-gray-600 italic">No content available.</p>
            )}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Share this article</span>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  onReadMore={onArticleClick}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
