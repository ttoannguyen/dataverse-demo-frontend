// dataverseParser.ts

export interface Dataset {
  id: string;
  metadata: {
    title: string;
    description: string;
    keywords?: string[];
    [key: string]: any;
  };
  [key: string]: any;
}

export interface Metadata {
  id: string;
  title: string;
  description: string;
  keywords?: string[];
  authors: string[];
  publicationDate: string;
  [key: string]: any;
}

// Dành cho datasets.json
export function mapDatasets(raw: any[]): Dataset[] {
  return raw.map((item) => ({
    id: item.id,
    metadata: item.metadata,
    ...item,
  }));
}

// Dành cho metadata.json
export function mapMetadata(raw: any[]): Metadata[] {
  return raw.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    keywords: item.keywords,
    authors: item.authors || [],
    publicationDate: item.publicationDate || "",
    ...item,
  }));
}
