export interface NotionPage {
  id: string;
  properties: NotionProperties;
  cover: NotionCover | null;
  created_time: string;
  last_edited_time: string;
}

export interface NotionProperties {
  Title: NotionTitleProperty;
  Excerpt: NotionRichTextProperty;
  Category: NotionSelectProperty;
  'Author Name': NotionRichTextProperty;
  'Author Bio': NotionRichTextProperty;
  'Author Avatar': NotionUrlProperty;
  'Cover Image': NotionUrlProperty;
  Published: NotionDateProperty;
  'Read Time': NotionNumberProperty;
  Featured: NotionCheckboxProperty;
  'Editors Pick': NotionCheckboxProperty;
  Status: NotionSelectProperty;
}

export interface NotionTitleProperty {
  title: NotionRichText[];
}

export interface NotionRichTextProperty {
  rich_text: NotionRichText[];
}

export interface NotionRichText {
  type: 'text';
  text: { content: string; link: { url: string } | null };
  plain_text: string;
  annotations: NotionAnnotations;
}

export interface NotionAnnotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface NotionSelectProperty {
  select: { name: string } | null;
}

export interface NotionUrlProperty {
  url: string | null;
}

export interface NotionDateProperty {
  date: { start: string } | null;
}

export interface NotionNumberProperty {
  number: number | null;
}

export interface NotionCheckboxProperty {
  checkbox: boolean;
}

export interface NotionCover {
  type: 'external' | 'file';
  external?: { url: string };
  file?: { url: string };
}

export interface NotionBlock {
  id: string;
  type: string;
  paragraph?: { rich_text: NotionRichText[] };
  heading_1?: { rich_text: NotionRichText[] };
  heading_2?: { rich_text: NotionRichText[] };
  heading_3?: { rich_text: NotionRichText[] };
  bulleted_list_item?: { rich_text: NotionRichText[] };
  numbered_list_item?: { rich_text: NotionRichText[] };
  quote?: { rich_text: NotionRichText[] };
  code?: { rich_text: NotionRichText[]; language: string };
  image?: {
    type: 'external' | 'file';
    external?: { url: string };
    file?: { url: string };
    caption?: NotionRichText[];
  };
  callout?: {
    rich_text: NotionRichText[];
    icon?: { emoji?: string };
  };
}

export interface NotionDatabaseQueryResponse {
  results: NotionPage[];
  has_more: boolean;
  next_cursor: string | null;
}

export interface NotionBlocksResponse {
  results: NotionBlock[];
  has_more: boolean;
  next_cursor: string | null;
}
