import { Article } from '../../types';
import { NotionPage, NotionBlock } from './types';
import { blocksToHtml } from './blocks';

function getPlainText(richTexts: { plain_text: string }[] | undefined): string {
  if (!richTexts) return '';
  return richTexts.map((rt) => rt.plain_text).join('');
}

export function transformNotionPageToArticle(
  page: NotionPage,
  blocks?: NotionBlock[]
): Article {
  const props = page.properties;

  return {
    id: page.id,
    title: getPlainText(props.Title?.title),
    excerpt: getPlainText(props.Excerpt?.rich_text),
    content: blocks ? blocksToHtml(blocks) : '',
    category: props.Category?.select?.name || 'Uncategorized',
    author: {
      name: getPlainText(props['Author Name']?.rich_text) || 'Anonymous',
      bio: getPlainText(props['Author Bio']?.rich_text) || undefined,
      avatar: props['Author Avatar']?.url || undefined,
    },
    image:
      props['Cover Image']?.url ||
      page.cover?.external?.url ||
      page.cover?.file?.url ||
      'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
    publishedAt: props.Published?.date?.start || new Date().toISOString().split('T')[0],
    readTime: props['Read Time']?.number || 5,
    featured: props.Featured?.checkbox || false,
    editorsPick: props['Editors Pick']?.checkbox || false,
  };
}

export function transformNotionPagesToArticles(pages: NotionPage[]): Article[] {
  return pages.map((page) => transformNotionPageToArticle(page));
}
