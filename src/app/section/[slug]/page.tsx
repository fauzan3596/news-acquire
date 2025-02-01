"use client";

import { Article } from "@/app/interfaces/articleInterface";
import { Section } from "@/app/interfaces/sectionInterface";
import SectionCard from "@/components/section/SectionCard";
import SectionSkeleton from "@/components/section/SectionSkeleton";
import { getArticlesBySection } from "@/services/fetchArticles";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SectionPageProps {
  params: { slug: string };
}

const sections: Section[] = [
  {
    name: "fashion",
    icon: "/fashion-icon.png",
  },
  {
    name: "food",
    icon: "/food-icon.png",
  },
  {
    name: "sports",
    icon: "/sports-icon.png",
  },
  {
    name: "technology",
    icon: "/technology-icon.png",
  },
];

export default function Page({ params }: SectionPageProps) {
  const { slug } = params;
  const [totalArticle, setTotalArticle] = useState(10);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticlesBySection(slug);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [slug]);

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
    <main className="lg:px-20 md:px-10 px-5 py-5">
      <div className="flex items-center gap-4">
        <Image
          src={
            sections.find((section: Section) => section.name === slug)?.icon ||
            ""
          }
          alt="Section Image"
          height={56}
          width={56}
        />
        <h1 className="capitalize font-medium text-3xl">
          {sections.find((section: Section) => section.name === slug)?.name}
        </h1>
      </div>
      <div className="bg-white mt-8 p-5 shadow-xl rounded-box">
        {loading ? (
          <SectionSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5">
              {articles
                ?.slice(0, totalArticle)
                .map((article: Article, index: number) => (
                  <SectionCard article={article} key={index} />
                ))}
            </div>
            <div className="flex justify-center mt-10 p-0">
              {totalArticle < articles?.length && (
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
      </div>
    </main>
  );
}
