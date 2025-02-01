import { getArticlesByMostViewedInAMonth } from "@/services/fetchArticles";
import { LuClock9 } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { getTimeFromNow } from "@/app/utils";
import { PopularArticle } from "@/app/interfaces/popularArticleInterface";
import MostPopularCard from "./MostPopularCard";
import Image from "next/image";
import Link from "next/link";

export default async function MostPopular() {
  const popularArticles = await getArticlesByMostViewedInAMonth();
  const filteredArticles = popularArticles.filter(
    (article: PopularArticle) => article.media.length > 0
  );

  if (!filteredArticles) {
    throw new Error("Server is busy. Please try again later.");
  }

  return (
    <section>
      <div className="w-full border-b-2 border-[#333333]">
        <p className="bg-[#333333] text-white w-fit px-2 font-bold text-lg">
          Most Popular
        </p>
      </div>
      <div className="flex gap-5 mt-5 md:flex-row flex-col">
        <div className="flex-[0.5]">
          <Link
            href={filteredArticles[0].url}
            className="card popular-card h-full min-h-96 cursor-pointer"
          >
            <figure>
              <Image
                src={filteredArticles[0].media[0]["media-metadata"][2].url}
                alt="Article Image"
                className="object-cover"
                fill={true}
              />
            </figure>
            <div className="card-body mt-auto">
              <div className="badge badge-lg text-white font-light bg-purple-500 border-purple-500">
                {filteredArticles[0].section}
              </div>
              <h2 className="card-title">{filteredArticles[0].title}</h2>
              <div className="flex items-center text-sm">
                <IoPersonCircleOutline className="me-1" />
                <p>{filteredArticles[0].byline}</p>
              </div>
              <div className="flex items-center text-sm">
                <LuClock9 className="me-1" />
                <p>{getTimeFromNow(filteredArticles[0].updated)}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-[0.5]">
          <div className="grid grid-cols-1 gap-5">
            {filteredArticles.slice(1, 6).map((article: PopularArticle) => (
              <MostPopularCard article={article} key={article.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
