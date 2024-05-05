import { Card, CardHeader } from "@nextui-org/card";
import Image, { StaticImageData } from "next/image";

interface Props {
  genre: string;
  title: string;
  alt: string;
  src: StaticImageData | string;
}

export function ArticleCard(props: Props) {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{props.genre}</p>
        <h4 className="text-white font-medium text-large">{props.title}</h4>
      </CardHeader>
      <Image alt={props.alt} className="z-0 h-full w-full object-cover" src={props.src} width={300} height={300}/>
    </Card>
  );
}
