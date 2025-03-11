// src/app/category/[slug]/page.tsx
import { Suspense } from "react";
import Loading from "@/components/Loading";
import CategoryHeader from "./_components/CategoryHeader";
import CategoryBody from "./_components/CategoryBody";

export default async function CategoryDetail({ params }: { params: { slug: string } }) {
  const paramsData = await Promise.resolve(params);
  const slug = paramsData.slug;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Suspense fallback={<Loading />}>
          <CategoryHeader slug={slug} />
          <CategoryBody slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}