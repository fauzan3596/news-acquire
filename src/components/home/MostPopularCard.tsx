import { PopularArticle } from "@/app/interfaces/popularArticleInterface";
import { getTimeFromNow } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { LuClock9 } from "react-icons/lu";

interface MostPopularCardProps {
  article: PopularArticle;
}

export default function MostPopularCard({ article }: MostPopularCardProps) {
  const { title, media, updated, url } = article;

  return (
    <Link
      href={url}
      className="card card-side h-20 rounded-l-none cursor-pointer"
    >
      <figure className="max-w-32 min-w-32">
        <Image
          src={media[0]["media-metadata"][2].url}
          alt="Article Image"
          className="object-cover hover:opacity-70"
          height={128}
          width={128}
        />
      </figure>
      <div className="card-body text-left flex justify-center px-3 py-0">
        <div className="flex items-center text-xs text-gray-400 gap-1">
          <LuClock9 />
          <p>{getTimeFromNow(updated)}</p>
        </div>
        <h2 className="card-title text-sm hover:text-[#0c8cd2] line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
}
