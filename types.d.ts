type Tag = {
  id: number;
  name: string;
  slug: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
};

type Author = {
  name: string | null;
  image: string | null;
};

type Post = {
  id: number;
  title: string;
  slug: string;
  coverImageUrl: string | null;
  description: string | null;
  readTime: string | null;
  publishedAt: string | null; // It will be a string after JSON serialization
  author: Author;
  category: Category;
  tags: Tag[];
};
