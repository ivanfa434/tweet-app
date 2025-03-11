import { getAuthors } from "@/app/blogs/_api/getAuthors";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import AboutCard from "./AboutCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const AboutPage = async () => {
  const about = await getAuthors();

  return (
    <main>
      <div className="mx-auto max-w-4xl space-y-12 mt-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About Our Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn more about our journey, mission, and the team behind the
            content
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p>
                Founded in 2020, our blog started as a small personal project to
                document and share web development experiences. What began as a
                hobby quickly grew into a comprehensive resource for developers
                of all skill levels.
              </p>
              <p>
                Over the years, we've expanded our content to cover a wide range
                of topics in technology, design, and business, always with a
                focus on providing practical, actionable insights that our
                readers can apply to their own projects.
              </p>
              <p>
                Today, we're proud to serve a community of over 100,000 monthly
                readers who trust us for reliable, up-to-date information and
                tutorials.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Our team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Our mission visualization"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <p>
                Our mission is to demystify web development and technology,
                making it accessible to everyone regardless of their background
                or experience level.
              </p>
              <p>
                We believe in the power of knowledge sharing and community
                learning. By providing high-quality, well-researched content, we
                aim to empower our readers to build better websites,
                applications, and digital experiences.
              </p>
              <p>
                We're committed to staying at the forefront of technological
                advancements and sharing our insights in a way that's practical,
                engaging, and easy to understand.
              </p>
            </div>
          </div>
        </section>

        <Separator />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        <main className="py-12 ">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-384 mx-auto">
              {about.map((about) => (
                <AboutCard key={about.objectId} about={about}/>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Separator />

      <section className="space-y-6 container mx-auto my-20">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-muted-foreground">
          Have questions, feedback, or want to collaborate? We'd love to hear
          from you!
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="gap-2">
            <Mail className="h-4 w-4" />
            Email Us
          </Button>
          <Button variant="outline" className="gap-2">
            <Twitter className="h-4 w-4" />
            Twitter
          </Button>
          <Button variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" className="gap-2">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
