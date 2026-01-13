import { NotionBlock, NotionRichText } from './types';

function renderRichText(richTexts: NotionRichText[]): string {
  return richTexts
    .map((rt) => {
      let text = rt.plain_text;

      if (rt.annotations.bold) text = `<strong>${text}</strong>`;
      if (rt.annotations.italic) text = `<em>${text}</em>`;
      if (rt.annotations.strikethrough) text = `<del>${text}</del>`;
      if (rt.annotations.code) text = `<code>${text}</code>`;
      if (rt.annotations.underline) text = `<u>${text}</u>`;

      if (rt.text.link) {
        text = `<a href="${rt.text.link.url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }

      return text;
    })
    .join('');
}

export function blocksToHtml(blocks: NotionBlock[]): string {
  const htmlParts: string[] = [];
  let inList: 'ul' | 'ol' | null = null;

  for (const block of blocks) {
    const isListItem =
      block.type === 'bulleted_list_item' || block.type === 'numbered_list_item';
    const listType = block.type === 'bulleted_list_item' ? 'ul' : 'ol';

    if (!isListItem && inList) {
      htmlParts.push(`</${inList}>`);
      inList = null;
    }

    if (isListItem && inList !== listType) {
      if (inList) {
        htmlParts.push(`</${inList}>`);
      }
      htmlParts.push(`<${listType}>`);
      inList = listType;
    }

    switch (block.type) {
      case 'paragraph': {
        const pText = renderRichText(block.paragraph?.rich_text || []);
        if (pText) htmlParts.push(`<p>${pText}</p>`);
        break;
      }

      case 'heading_1':
        htmlParts.push(`<h1>${renderRichText(block.heading_1?.rich_text || [])}</h1>`);
        break;

      case 'heading_2':
        htmlParts.push(`<h2>${renderRichText(block.heading_2?.rich_text || [])}</h2>`);
        break;

      case 'heading_3':
        htmlParts.push(`<h3>${renderRichText(block.heading_3?.rich_text || [])}</h3>`);
        break;

      case 'bulleted_list_item':
        htmlParts.push(`<li>${renderRichText(block.bulleted_list_item?.rich_text || [])}</li>`);
        break;

      case 'numbered_list_item':
        htmlParts.push(`<li>${renderRichText(block.numbered_list_item?.rich_text || [])}</li>`);
        break;

      case 'quote':
        htmlParts.push(`<blockquote>${renderRichText(block.quote?.rich_text || [])}</blockquote>`);
        break;

      case 'code': {
        const lang = block.code?.language || '';
        htmlParts.push(
          `<pre><code class="language-${lang}">${renderRichText(block.code?.rich_text || [])}</code></pre>`
        );
        break;
      }

      case 'image': {
        const imgUrl =
          block.image?.type === 'external'
            ? block.image.external?.url
            : block.image?.file?.url;
        const caption = block.image?.caption?.length
          ? renderRichText(block.image.caption)
          : '';
        if (imgUrl) {
          htmlParts.push(
            `<figure><img src="${imgUrl}" alt="${caption}" />${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`
          );
        }
        break;
      }

      case 'divider':
        htmlParts.push('<hr />');
        break;

      case 'callout': {
        const emoji = block.callout?.icon?.emoji || '';
        htmlParts.push(
          `<div class="callout">${emoji} ${renderRichText(block.callout?.rich_text || [])}</div>`
        );
        break;
      }

      default:
        break;
    }
  }

  if (inList) {
    htmlParts.push(`</${inList}>`);
  }

  return htmlParts.join('\n');
}
