import { Article } from "@/app/interfaces/articleInterface";
import { Category } from "@/app/interfaces/categoryInterface";
import { getCategoryColor } from "@/app/utils";
import { getArticlesBySection } from "@/services/fetchArticles";
import Link from "next/link";

export default async function Categories() {
  const fashionArticles: Article[] = await getArticlesBySection("fashion");
  const foodArticles: Article[] = await getArticlesBySection("food");
  const sportsArticles: Article[] = await getArticlesBySection("sports");
  const technologyArticles: Article[] = await getArticlesBySection(
    "technology"
  );

  const categories: Category[] = [
    { name: "Fashion", count: fashionArticles.length },
    { name: "Food", count: foodArticles.length },
    { name: "Sports", count: sportsArticles.length },
    { name: "Technology", count: technologyArticles.length },
  ];

  return (
    <section>
      <div className="w-full border-b-2 border-[#333333]">
        <p className="bg-[#333333] text-white w-fit px-2 font-bold text-lg">
          Categories
        </p>
      </div>
      <div className="border mt-5">
        <div className="grid grid-cols-1">
          {categories.map((category: Category, index: number) => (
            <Link
              href={`/section/${category.name.toLowerCase()}`}
              key={index}
              className={`group relative cursor-pointer flex justify-between items-center overflow-hidden border-l-2 border-${getCategoryColor(
                index
              )}`}
            >
              <div
                className={`absolute inset-0 bg-${getCategoryColor(
                  index
                )} scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform xl:duration-300 duration-700`}
              ></div>
              <p className="z-10 px-3 group-hover:text-white">
                {category.name}
              </p>
              <p
                className={`z-10 bg-${getCategoryColor(
                  index
                )} py-2 w-10 text-center text-white`}
              >
                {category.count}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
