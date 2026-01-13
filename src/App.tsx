import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import { articles } from './data/mockData';

type PageType = 'home' | 'article' | 'about' | 'category';

interface PageState {
  type: PageType;
  articleId?: string;
  category?: string;
}

function App() {
  const [page, setPage] = useState<PageState>({ type: 'home' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleNavigate = (destination: string) => {
    if (destination === 'home') {
      setPage({ type: 'home' });
    } else if (destination === 'about') {
      setPage({ type: 'about' });
    } else {
      setPage({ type: 'category', category: destination });
    }
  };

  const handleArticleClick = (articleId: string) => {
    setPage({ type: 'article', articleId });
  };

  const handleBack = () => {
    setPage({ type: 'home' });
  };

  const renderPage = () => {
    switch (page.type) {
      case 'home':
        return <HomePage onArticleClick={handleArticleClick} />;
      case 'article': {
        const article = articles.find((a) => a.id === page.articleId);
        return article ? (
          <ArticlePage
            article={article}
            onBack={handleBack}
            onArticleClick={handleArticleClick}
          />
        ) : (
          <HomePage onArticleClick={handleArticleClick} />
        );
      }
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'category':
        return page.category ? (
          <CategoryPage
            category={page.category}
            onArticleClick={handleArticleClick}
          />
        ) : (
          <HomePage onArticleClick={handleArticleClick} />
        );
      default:
        return <HomePage onArticleClick={handleArticleClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onNavigate={handleNavigate}
        currentPage={page.category || page.type}
      />
      <main className="pt-[72px]">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
