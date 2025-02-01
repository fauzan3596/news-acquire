import { Article } from "@/app/interfaces/articleInterface";
import { getBadgeColor, getTimeFromNow } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";

interface TopStoriesCardProps {
  article: Article;
}

export default function TopStoriesCard({ article }: TopStoriesCardProps) {
  const { title, abstract, multimedia, section, updated_date, byline, url } =
    article;
  const badgeColor = getBadgeColor(section);

  return (
    <Link href={url} className="card rounded-none cursor-pointer">
      <figure className="lg:max-h-80 lg:min-h-80 md:max-h-60 md:min-h-60 sm:max-h-40 sm:min-h-40 ">
        <Image
          src={multimedia ? multimedia[0].url : "/image.png"}
          alt="Article Image"
          className="hover:opacity-70"
          width={600}
          height={600}
        />
      </figure>
      <div className="card-body px-0">
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
          {section}
        </div>
        <h2 className="card-title line-clamp-2 hover:text-[#0c8cd2]">
          {title}
        </h2>
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
        <p className="line-clamp-3">{abstract}</p>
      </div>
    </Link>
  );
}
