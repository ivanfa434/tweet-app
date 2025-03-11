import { Blog } from "@/types/blog";

import { notFound } from "next/navigation";
import { cache } from "react";

export const getCategoryWithBlogs = cache(async (slug: string) => {
  const response = await fetch(
   `https://fittingjump-us.backendless.app/api/data/category?where=%60blogs%60.%60category%60%20%3D%20'${slug}'`
  );
  const blogs: Blog[] = await response.json();
    if (!blogs.length) {
      return notFound();
    }
    return blogs;
  });
  
