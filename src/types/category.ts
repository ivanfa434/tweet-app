import { Blog } from "./blog";

export interface Category {
  title: string;
  description: string;
  slug: string;
  objectId: string;
  image: string;
  blog: Blog;
  created: number;
}
