import { Category } from "@/types/category";

const getCategoryBlogs = async () => {
  const response = await fetch(
    `https://fittingjump-us.backendless.app/api/data/category?loadRelations=blogs`
  );
  const category: Category[] = await response.json();

  return category;
};

export default getCategoryBlogs;
