import { Article } from "@/app/interfaces/articleInterface";
import { getArticlesBySection } from "@/services/fetchArticles";
import { LuClock9 } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { getBadgeColor, getTimeFromNow } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

const sections: string[] = ["Fashion", "Food", "Sports", "Technology"];

export default async function Header() {
  const fashionArticles: Article[] = await getArticlesBySection("fashion");
  const foodArticles: Article[] = await getArticlesBySection("food");
  const sportsArticles: Article[] = await getArticlesBySection("sports");
  const technologyArticles: Article[] = await getArticlesBySection(
    "technology"
  );

  const fashionArticle: Article =
    fashionArticles[Math.floor(Math.random() * fashionArticles.length)];
  const foodArticle: Article =
    foodArticles[Math.floor(Math.random() * foodArticles.length)];
  const sportsArticle: Article =
    sportsArticles[Math.floor(Math.random() * sportsArticles.length)];
  const technologyArticle: Article =
    technologyArticles[Math.floor(Math.random() * technologyArticles.length)];

  const articlesToDisplay: Article[] = [
    fashionArticle,
    foodArticle,
    sportsArticle,
    technologyArticle,
  ];

  if (!articlesToDisplay) {
    throw new Error("Server is busy. Please try again later.");
  }

  return (
    <header className="flex lg:flex-row flex-col w-full lg:gap-0 gap-5">
      {articlesToDisplay.map((article: Article, index: number) => {
        const { title, abstract, multimedia, updated_date, byline, url } =
          article;
        return (
          <Link
            href={url}
            className="group card rounded-full image-full md:h-[30rem] md:max-h-[30rem] max-h-96 min-h-96 flex-1 transform transition-all duration-300 ease-in-out hover:flex-[1.4] relative cursor-pointer"
            key={index}
          >
            <figure>
              <Image
                src={multimedia[0].url}
                alt="Article Image"
                className="object-cover"
                fill={true}
              />
            </figure>
            <div className="card-body mt-auto absolute bottom-0 transform transition-transform duration-500 group-hover:-translate-y-5">
              <div
                className={`badge badge-lg text-white font-light border-0 ${getBadgeColor(
                  sections[index]
                )}`}
              >
                {sections[index]}
              </div>
              <h2 className="card-title line-clamp-2 lg:group-hover:line-clamp-none group-hover:line-clamp-2">
                {title}
              </h2>
              <div className="flex xl:flex-row lg:flex-col flex-row xl:items-center text-xs group-hover:text-sm gap-2">
                <div className="flex items-center gap-1">
                  <LuClock9 className="shrink-0" />
                  <p className="line-clamp-1 min-w-14">
                    {getTimeFromNow(updated_date)}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <IoPersonCircleOutline className="shrink-0" />
                  <p className="line-clamp-1">
                    {byline ? byline : "By Anonymous"}
                  </p>
                </div>
              </div>
              <p className="hidden group-hover:line-clamp-2 group-hover:pt-2">
                {abstract}
              </p>
            </div>
          </Link>
        );
      })}
    </header>
  );
}
