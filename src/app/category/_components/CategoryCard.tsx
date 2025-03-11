import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Blog } from "@/types/blog"
import { Category } from "@/types/category"

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video">
        <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{category.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{category.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/category/${category.slug}`} className="w-full justify-between">
            Browse Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

