import getCategoryWithBlogs from "../_api/getCategoryBlogs";
import { CategoryCard } from "./CategoryCard";

export default async function CategoriesPage() {
  const categories = await getCategoryWithBlogs();

  return (
    <main className="container py-12 mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Categories</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Browse our content by topic
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard 
              key={category.objectId || category.slug || JSON.stringify(category)} 
              category={category} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}