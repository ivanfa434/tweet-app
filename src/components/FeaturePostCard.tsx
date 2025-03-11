import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Blog } from "@/types/blog";

interface BlogPostCardProps {
  feature: Blog;
}

export function FeaturePostCard({ feature }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video">
        <Link href={`/blogs/${feature.slug}`}>
          <Image
            src={feature.thumbnail || "/placeholder.svg"}
            alt={feature.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </Link>
      </div>
      <CardHeader className="p-4">
        <div className="space-y-2">
          <Badge className="mb-2">{feature.category}</Badge>
          <Link href={`/blogs/${feature.slug}`} className="hover:underline">
            <h3 className="font-bold text-xl line-clamp-2">{feature.title}</h3>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-muted-foreground line-clamp-3">
          {feature.description}
        </p>
      </CardContent>
      <CardContent className="p-4 pt-0 flex-grow"></CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={feature.user?.image || "/default-avatar.png"}
              alt={`${feature.user?.firstName?.charAt(0) || ""}${
                feature.user?.lastName?.charAt(0) || ""
              }`}
            />
            <AvatarFallback>
              {`${feature.user?.firstName?.charAt(0) || ""}${
                feature.user?.lastName?.charAt(0) || ""
              }`}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-black">{`${
            feature.user?.firstName?.charAt(0) || ""
          }${feature.user?.lastName?.charAt(0) || ""}`}</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {format(new Date(feature.created), "dd MMM yyyy")}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
