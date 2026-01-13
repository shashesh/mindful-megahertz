import { articles } from '../data/mockData';
import ArticleCard from '../components/articles/ArticleCard';
import Newsletter from '../components/Newsletter';

interface CategoryPageProps {
  category: string;
  onArticleClick: (id: string) => void;
}

export default function CategoryPage({ category, onArticleClick }: CategoryPageProps) {
  const categoryArticles = articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{categoryName}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest stories and insights in {categoryName.toLowerCase()}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onReadMore={onArticleClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">
              No articles found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      <Newsletter />
    </div>
  );
}
