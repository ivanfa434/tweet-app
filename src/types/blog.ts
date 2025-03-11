import { User } from "./user";

export interface Blog {
  objectId: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
  thumbnail: string;
  created: number;
  views: number
  updated: number;
  user: User
}
