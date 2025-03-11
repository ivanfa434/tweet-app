import FeaturePosts from "@/components/FeaturePosts";
import { HeroSection } from "@/components/Herosection";
import { PopularCategories } from "@/components/PopularCategories";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturePosts />
      <PopularCategories />
      <div className="flex flex-col items-center gap-4 py-8">
        <h2 className="text-2xl font-bold text-center">Join our newsletter</h2>
        <p className="text-center text-muted-foreground max-w-[600px]">
          Stay updated with our latest articles, tips, and insights delivered
          straight to your inbox.
        </p>
        <Button size="lg" className="mt-4">
          Subscribe Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}
