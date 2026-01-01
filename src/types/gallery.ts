// Gallery type definitions

export type Category = 'design' | '3d' | 'webdev' | 'all';

export type Tab = 'images' | 'videos' | 'credit';

export interface Credit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  titleJP?: string;
  category: Exclude<Category, 'all'>;
  year: string;
  description: string;
  tags: string[];
  images: string[];
  videos?: string[];
  credits?: Credit[];
  thumbnail?: string;
}
