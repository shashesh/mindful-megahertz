const NOTION_API_BASE = 'https://api.notion.com';

export async function handler(event) {
  const API_KEY = process.env.NOTION_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing Notion configuration' }),
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const pageId = event.queryStringParameters?.id;

  if (!pageId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing page ID' }),
    };
  }

  try {
    // Fetch both page and blocks in parallel
    const [pageResponse, blocksResponse] = await Promise.all([
      fetch(`${NOTION_API_BASE}/v1/pages/${pageId}`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Notion-Version': '2022-06-28',
        },
      }),
      fetch(`${NOTION_API_BASE}/v1/blocks/${pageId}/children`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Notion-Version': '2022-06-28',
        },
      }),
    ]);

    const [pageData, blocksData] = await Promise.all([
      pageResponse.json(),
      blocksResponse.json(),
    ]);

    if (!pageResponse.ok) {
      return {
        statusCode: pageResponse.status,
        body: JSON.stringify(pageData),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: pageData,
        blocks: blocksData.results || [],
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
