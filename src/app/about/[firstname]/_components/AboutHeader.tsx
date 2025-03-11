import { FC } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAuthorByFirstName } from "@/app/blogs/_api/getAuthorsByFirstName";
import { Button } from "@/components/ui/button";

interface AboutHeaderProps {
  slug: string;
}
const capitalize = (str: string | undefined) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
const AboutHeader: FC<AboutHeaderProps> = async ({ slug }) => {
  const about = await getAuthorByFirstName(slug);
  return (
    <section className="bg-[#F5FCFF] py-24">
      <div className="container m-auto">
        <div className="grid grid-cols-2">
          {" "}
          {/* Kalo di cakra ini itu GRID */}
          {/* Kolom 1 */}
          <div className="item-center flex">
            <div className="space-y-4">
              <p className="font-semibold">
                Hey, I am{" "}
                {`${capitalize(about.firstName) || ""} ${
                  capitalize(about.lastName) || ""
                }`}
              </p>
              <p className="text-5xl font-semibold">
                {capitalize(about.title)} <br />
              </p>
              <p>
                {about.email} <br />
                {about.description}
              </p>
              <Button className="bg-[#5E3BEE]">Get In Touch</Button>
            </div>
          </div>{" "}
          {/* Kalo di cakra ini itu GRIDITEM */}
          {/* Kolom 2 */}
          <div className="relative h-[500px] w-full">
            <Image
              src={about.image}
              alt={about.firstName}
              objectFit="contain"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
