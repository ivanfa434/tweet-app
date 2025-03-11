import { getAuthors } from "@/app/blogs/_api/getAuthors";
import { getAuthorByFirstName } from "@/app/blogs/_api/getAuthorsByFirstName";
import AboutHeader from "./_components/AboutHeader";
import AboutBody from "./_components/AboutBody";
import AboutCard from "../_components/AboutCard";
import AboutList from "./_components/AboutList";


const AuthorDetailpage = async ({
   params,
}: {
   params: Promise<{ firstname: string }>;
}) => {
   const firstname = (await params).firstname;
   const author = await getAuthorByFirstName(firstname);

   return <main>
      <AboutHeader slug={firstname} />
      <AboutBody slug={firstname} />
      <AboutList firstName={firstname} />
   </main>;
};

export default AuthorDetailpage;