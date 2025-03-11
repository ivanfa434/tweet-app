import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface BlogCardProps {
  firstname: Blog;
}

const BlogCardByAuthor: FC<BlogCardProps> = ({ firstname }) => {
  return (
    <Link href={`/blogs/${firstname.slug}`}>
      <Card key={firstname.objectId}>
        <CardHeader>
          <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
              src={firstname.thumbnail}
              alt="blog"
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">{firstname.title}</h2>
          <p className="text-justify line-clamp-4">{firstname.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCardByAuthor;
