import { useState } from 'react';
import { useArticles } from '../hooks/useArticles';
import Hero from '../components/Hero';
import FeaturedArticleCard from '../components/articles/FeaturedArticleCard';
import ArticleCard from '../components/articles/ArticleCard';
import SmallArticleCard from '../components/articles/SmallArticleCard';
import Newsletter from '../components/Newsletter';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

interface HomePageProps {
  onArticleClick: (id: string) => void;
}

export default function HomePage({ onArticleClick }: HomePageProps) {
  const [visibleArticles, setVisibleArticles] = useState(6);
  const { articles, loading, error, refetch } = useArticles();

  if (loading) {
    return <LoadingSpinner className="py-24" />;
  }

  if (error) {
    return <ErrorMessage message={error.message} onRetry={refetch} />;
  }

  const featuredArticles = articles.filter((a) => a.featured);
  const heroArticle = featuredArticles[0];
  const featuredArticle = featuredArticles[1];
  const nonFeaturedArticles = articles.filter((a) => !a.featured);
  const recentArticles = nonFeaturedArticles.slice(0, visibleArticles);
  const popularArticles = articles.slice(0, 4);

  const loadMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  return (
    <div className="bg-gray-50">
      {heroArticle && <Hero article={heroArticle} onReadMore={onArticleClick} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <main className="lg:col-span-8">
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-8 pb-4 border-b-2 border-gray-900">
                Featured Story
              </h2>
              {featuredArticle && (
                <FeaturedArticleCard
                  article={featuredArticle}
                  onReadMore={onArticleClick}
                />
              )}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-8 pb-4 border-b-2 border-gray-900">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onReadMore={onArticleClick}
                  />
                ))}
              </div>

              {visibleArticles < nonFeaturedArticles.length && (
                <div className="text-center mt-12">
                  <Button onClick={loadMore} variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>
          </main>

          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-6 pb-3 border-b border-gray-200">
                About Mindful Megahertz
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We bring you thoughtfully curated stories that matter. From culture to technology,
                design to business, we explore the ideas shaping our world.
              </p>
              <Button variant="text" className="px-0 font-semibold">
                Learn More →
              </Button>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-6 pb-3 border-b border-gray-200">
                Popular Stories
              </h3>
              <div className="space-y-6">
                {popularArticles.map((article) => (
                  <SmallArticleCard
                    key={article.id}
                    article={article}
                    onReadMore={onArticleClick}
                  />
                ))}
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8">
              <h3 className="text-xl font-serif font-bold mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Get exclusive content, behind-the-scenes insights, and early access to new features.
              </p>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-200">
                Subscribe Now
              </Button>
            </div>
          </aside>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              "We believe in the power of storytelling to inspire, inform, and transform."
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our mission is to deliver exceptional content that challenges perspectives and
              enriches lives.
            </p>
            <Button variant="outline" size="lg">
              Discover Our Story
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
