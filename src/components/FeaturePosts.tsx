import { getBlogs } from "@/app/blogs/_api/getBlogs";
import { FeaturePostCard } from "./FeaturePostCard";
import { getBlogPopuler } from "@/app/blogs/_api/getBlogPopuler";

const FeaturePosts = async () => {
  // In a real app, you would fetch featured posts from a database or API
  const feature = await getBlogPopuler();
  return (
    <section className="container py-12 mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Featured Posts</h2>
        <p className="text-muted-foreground mb-10">
          Discover our most popular and trending articles
        </p>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {feature.map((feature) => (
            <FeaturePostCard key={feature.objectId} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePosts;
