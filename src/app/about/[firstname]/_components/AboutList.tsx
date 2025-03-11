
import { getBlogByAuthor } from "@/app/blogs/_api/getBlogByAuthor";
import AboutCardAuthor from "./BlogCardByAuthor";
import { FC } from "react";
import BlogCardByAuthor from "./BlogCardByAuthor";


interface AboutListProps {
  firstName: string
}
const AboutList: FC<AboutListProps> = async ({firstName}) => {
  const blogs = await getBlogByAuthor(firstName);

  return (
    <section className="container mx-auto p-4">
       <p className="text-5xl font-semibold flex justify-center py-10">My Article</p>
      <div className="grid grid-cols-3 gap-4 py-14">
        {blogs.map((blogs) => {
          return <BlogCardByAuthor firstname={blogs}/>;
        })}
      </div>
    </section>
  );
};

export default AboutList;
