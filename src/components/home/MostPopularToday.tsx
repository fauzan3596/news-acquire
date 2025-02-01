import { PopularArticle } from "@/app/interfaces/popularArticleInterface";
import { getArticlesByMostViewedInADay } from "@/services/fetchArticles";
import { sortArticles } from "@/app/utils";
import MostPopularCard from "./MostPopularCard";

export default async function MostPopularToday() {
  const popularArticles = await getArticlesByMostViewedInADay();
  const sortedArticles = sortArticles(popularArticles);

  if (!sortedArticles) {
    throw new Error("Server is busy. Please try again later.");
  }

  return (
    <section className="mt-8">
      <div className="w-full border-b-2 border-[#333333]">
        <p className="bg-[#333333] text-white w-fit px-2 font-bold text-lg">
          Most Popular Today
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {sortedArticles.slice(0, 3).map((article: PopularArticle) => (
          <MostPopularCard article={article} key={article.id} />
        ))}
      </div>
    </section>
  );
}
