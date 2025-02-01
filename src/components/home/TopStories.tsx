"use client";

import { Article } from "@/app/interfaces/articleInterface";
import { getAllArticles } from "@/services/fetchArticles";
import TopStoriesCard from "./TopStoriesCard";
import { useEffect, useState } from "react";
import TopStoriesSkeleton from "./TopStoriesSkeleton";

export default function TopStories() {
  const [totalArticle, setTotalArticle] = useState(10);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const loadMoreHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setTotalArticle((prev) => prev + 10);
      setLoading(false);
    }, 1000);
  };

  if (!articles) {
    throw new Error("Server is busy. Please try again later.");
  }

  return (
    <section className="mt-8">
      <div className="w-full border-b-2 border-[#333333]">
        <p className="bg-[#333333] text-white w-fit px-2 font-bold text-lg">
          Top Stories
        </p>
      </div>
      {loading ? (
        <TopStoriesSkeleton />
      ) : (
        <>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-10 sm:gap-y-0 gap-5 mt-5">
            {articles.length > 0 &&
              articles
                .slice(0, totalArticle)
                .map((article: Article, index: number) => (
                  <TopStoriesCard article={article} key={index} />
                ))}
          </div>
          <div className="flex justify-center m-0 p-0">
            {totalArticle < articles.length && (
              <button
                className="btn btn-wide bg-blue-500 text-white hover:bg-blue-700"
                onClick={loadMoreHandler}
              >
                Load More
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
}
