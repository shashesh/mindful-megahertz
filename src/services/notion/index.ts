import { Article } from '../../types';
import { queryDatabase, getPage, getPageBlocks } from './client';
import { transformNotionPageToArticle, transformNotionPagesToArticles } from './transformers';

export async function fetchArticles(): Promise<Article[]> {
  const response = await queryDatabase();
  return transformNotionPagesToArticles(response.results);
}

export async function fetchFeaturedArticles(): Promise<Article[]> {
  const response = await queryDatabase({
    property: 'Featured',
    checkbox: { equals: true },
  });
  return transformNotionPagesToArticles(response.results);
}

export async function fetchArticlesByCategory(category: string): Promise<Article[]> {
  const response = await queryDatabase({
    property: 'Category',
    rich_text: { equals: category },
  });
  return transformNotionPagesToArticles(response.results);
}

export async function fetchArticleById(id: string): Promise<Article | null> {
  try {
    const [page, blocksResponse] = await Promise.all([
      getPage(id),
      getPageBlocks(id),
    ]);
    return transformNotionPageToArticle(page, blocksResponse.results);
  } catch (error) {
    console.error('Failed to fetch article:', error);
    return null;
  }
}

export * from './types';
