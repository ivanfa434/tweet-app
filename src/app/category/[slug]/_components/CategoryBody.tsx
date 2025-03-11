// CategoryBody.jsx
import { FC } from "react";
import Markdown from "@/components/Markdown";
import getCategoryWithBlogs from "../../_api/getCategoryBlogs";
import { Separator } from "@/components/ui/separator";

interface CategoryBodyProps {
  slug: string;
}

const CategoryBody: FC<CategoryBodyProps> = async ({ slug }) => {
  // Call getCategoryWithBlogs without parameters
  const blogs = await getCategoryWithBlogs();

  // Then filter the blogs by slug - use exact match to prevent duplicates
  const filteredBlogs = blogs.filter(
    (blog) => blog.slug === slug // Use exact match only
  );

  // Use the first matching blog or handle empty case
  if (filteredBlogs.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">
          No content found for this category
        </h3>
      </div>
    );
  }

  const blog = filteredBlogs[0];

  return (
    <div className="relative">
      <div
        className="prose prose-lg md:prose-xl max-w-none mx-auto dark:prose-invert 
                     prose-headings:text-gray-800 dark:prose-headings:text-white
                     prose-p:text-gray-600 dark:prose-p:text-gray-300
                     prose-a:text-blue-600 hover:prose-a:text-blue-700
                     dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
                     prose-img:rounded-xl prose-img:shadow-md"
      >
        <Markdown content={blog.description} />
      </div>
    </div>
  );
};

export default CategoryBody;
