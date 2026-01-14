import { NotionDatabaseQueryResponse, NotionPage, NotionBlock } from './types';

export async function queryDatabase(
  filter?: object,
  sorts?: object[]
): Promise<NotionDatabaseQueryResponse> {
  const response = await fetch('/api/notion-query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filter: filter || undefined,
      sorts: sorts || [{ property: 'Published', direction: 'descending' }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return response.json();
}

export async function getPageWithBlocks(pageId: string): Promise<{ page: NotionPage; blocks: NotionBlock[] }> {
  const response = await fetch(`/api/notion-page?id=${pageId}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return response.json();
}
