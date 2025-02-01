import { Article } from "@/app/interfaces/articleInterface";
import { getBadgeColor, getTimeFromNow } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";

interface SectionCardProps {
  article: Article;
}

export default function SectionCard({ article }: SectionCardProps) {
  const {
    title,
    abstract,
    multimedia,
    updated_date,
    byline,
    section,
    des_facet,
    url,
  } = article;
  const badgeColor = getBadgeColor(section ? section : "Sports");

  return (
    <Link href={url} className="card md:card-side rounded-none">
      <figure>
        <Image
          src={multimedia[0].url}
          alt="Article Image"
          className="md:max-h-52 md:min-h-52 md:w-60 max-h-96 object-cover hover:opacity-70"
          width={900}
          height={600}
        />
      </figure>
      <div className="card-body w-full h-fit md:py-0 py-3 md:px-5 px-0">
        <div
          className={`badge badge-lg text-white font-semibold border-0 ${badgeColor} ${
            section == "us" ? "uppercase" : "capitalize"
          }`}
          style={{
            backgroundColor: badgeColor.startsWith("bg-") 
              ? undefined
              : badgeColor,
          }}
        >
          {section ? section : "Sports"}
        </div>
        <h2 className="card-title hover:text-[#0c8cd2]">{title}</h2>
        <div className="flex md:flex-row flex-col gap-5">
          <div className="flex items-center gap-1 text-gray-400">
            <LuClock9 className="shrink-0" />
            <p className="line-clamp-1 min-w-14">
              {getTimeFromNow(updated_date)}
            </p>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <IoPersonCircleOutline className="shrink-0" />
            <p className="line-clamp-1">{byline ? byline : "By Anonymous"}</p>
          </div>
        </div>
        <p className="line-clamp-2">{abstract}</p>
        <div className="flex gap-2 flex-wrap">
          {des_facet.slice(0, 5).map((des: string, index: number) => (
            <div key={index}>
              <div className="badge font-semibold capitalize badge-md bg-gray-600 text-white">
                {des}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
