import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/types/user";
import Link from "next/link";
import { FC } from "react";

interface AboutCardProps {
  about: User;
}
const AboutCard: FC<AboutCardProps> = ({ about }) => {
  return (

      <Link href={`/about/${about.firstName}`}>
        <Card key={about.objectId} className="overflow-hidden">
          <div className="aspect-square relative">
            <Image
              src={about.image || "/placeholder.svg"}
              alt={`${about.firstName.charAt(0) || ""}${
                about.lastName.charAt(0) || ""
              }`}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{`${about.firstName || ""} ${
              about.lastName || ""
            }`}</CardTitle>
            <CardDescription>{about.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{about.description}</p>
          </CardContent>
        </Card>
      </Link>

  );
};

export default AboutCard;
