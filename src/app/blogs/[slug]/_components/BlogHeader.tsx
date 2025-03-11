import { FC } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { getBlog } from "../../_api/getBlog";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { RelatedPosts } from "./RelatedPosts";

interface BlogHeaderProps {
  slug: string;
}

const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
  const post = await getBlog(slug);
  
  return (
    <main className="container py-12">
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 space-y-4">
          <Link href="/blogs" className="text-sm text-muted-foreground hover:underline mr-5">
            ← Back to all posts
          </Link>
          <Link href={`/category/${post[0].category}`}>
          <Badge>{post[0].category}</Badge>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{post[0].title}</h1>
          <p className="text-xl text-muted-foreground">{post[0].description}</p>
          <div className="flex items-center gap-4 pt-4">
            
            <Avatar>
              <AvatarImage src={post[0].user.image || '/placeholder-avatar.png'} alt={post[0].user.firstName} />
              <AvatarFallback>{`${post[0].user?.firstName?.charAt(0) || ""}${
                post[0].user?.lastName?.charAt(0) || ""
              }`}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Link href={`/about/${post[0].user?.firstName}`} className="font-medium">{`${post[0].user?.firstName?.charAt(0) || ""}${
                post[0].user?.lastName?.charAt(0) || ""
              }`}</Link>
              <div className="text-sm text-muted-foreground">{post[0].user?.title || 'Author'}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {format(new Date(post[0].created), 'MMMM d, yyyy')}
            </div>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <Image src={post[0].thumbnail || "/placeholder.svg"} alt={post[0].title} fill className="object-cover" priority />
        </div>
        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post[0].content }}
        />
        <Separator className="my-12" />
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Related Posts</h2>
          <RelatedPosts />
        </div>
      </article>
    </main>
  );
};

export default BlogHeader;