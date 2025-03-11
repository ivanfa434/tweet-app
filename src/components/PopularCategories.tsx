"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getBlogPopuler } from "@/app/blogs/_api/getBlogPopuler";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/types/blog";

export function PopularCategories() {
  const [categories, setCategories] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getBlogPopuler();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-col gap-2 pt-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Popular Categories
        </h2>
        <p className="text-muted-foreground mb-10">
          Browse content by your favorite topics
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Card key={category.objectId} className="flex flex-col">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between"
                  asChild
                >
                  <Link href={`/category/${category.slug}`}>
                    View Articles
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
}
