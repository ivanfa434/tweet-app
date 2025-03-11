import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="/gambarrrr.jpg"
          alt="Blog hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="container flex relative z-10 py-24 md:py-32 lg:py-40 justify-center">
        <div className="flex flex-col gap-6 md:max-w-[70%] lg:max-w-[60%] ">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Insights and Inspiration for Modern Developers
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Discover the latest trends, tutorials, and best practices in web development, design, and technology.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/blogs">
                Read Latest Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/category">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

