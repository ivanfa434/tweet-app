import { FC } from "react";
import Markdown from "@/components/Markdown";
import IncrementViews from "./IncrementViewsAbout";
import { getBlog } from "@/app/blogs/_api/getBlog";
import { getAuthorByFirstName } from "@/app/blogs/_api/getAuthorsByFirstName";


interface BlogBodyProps {
  slug: string;
}
const AboutBody: FC<BlogBodyProps> = async ({ slug }) => {
  const blogs = await getAuthorByFirstName(slug);
  return (
    <section className="container mx-auto p-4">
    </section>
  );
};

export default AboutBody;
