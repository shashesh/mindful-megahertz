import { NotionDatabaseQueryResponse, NotionPage, NotionBlocksResponse } from './types';

const NOTION_API_BASE = '/api/notion';
const API_KEY = import.meta.env.VITE_NOTION_API_KEY;
const DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;

async function notionFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${NOTION_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return response.json();
}

export async function queryDatabase(
  filter?: object,
  sorts?: object[]
): Promise<NotionDatabaseQueryResponse> {
  return notionFetch(`/v1/databases/${DATABASE_ID}/query`, {
    method: 'POST',
    body: JSON.stringify({
      filter: filter || undefined,
      sorts: sorts || [{ property: 'Published', direction: 'descending' }],
    }),
  });
}

export async function getPage(pageId: string): Promise<NotionPage> {
  return notionFetch(`/v1/pages/${pageId}`);
}

export async function getPageBlocks(pageId: string): Promise<NotionBlocksResponse> {
  return notionFetch(`/v1/blocks/${pageId}/children`);
}
