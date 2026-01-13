import { useState, useEffect, useCallback } from 'react';
import { Article } from '../types';
import {
  fetchArticles,
  fetchArticleById,
  fetchArticlesByCategory,
} from '../services/notion';

interface UseArticlesResult {
  articles: Article[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useArticles(): UseArticlesResult {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchArticles();
      setArticles(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch articles'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { articles, loading, error, refetch: fetchData };
}

export function useArticlesByCategory(category: string): UseArticlesResult {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchArticlesByCategory(category);
      setArticles(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch articles'));
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { articles, loading, error, refetch: fetchData };
}

interface UseArticleResult {
  article: Article | null;
  loading: boolean;
  error: Error | null;
}

export function useArticle(id: string | undefined): UseArticleResult {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchArticleById(id);
        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch article'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { article, loading, error };
}
