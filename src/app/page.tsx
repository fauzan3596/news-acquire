import Categories from "@/components/home/Categories";
import Header from "@/components/home/Header";
import MostPopular from "@/components/home/MostPopular";
import MostPopularToday from "@/components/home/MostPopularToday";
import TopStories from "@/components/home/TopStories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NewsAcquire - Online News",
  description: "Discover the latest news from around the world",
  keywords: [
    "news",
    "online news",
    "breaking news",
    "global news",
    "world news",
    "fashion news",
    "food news",
    "sports news",
    "technology news",
  ],
};

export default function Home() {
  return (
    <main className="bg-white shadow-xl lg:mx-10 mx-5 p-5">
      <Header />
      <div className="flex mt-10 gap-8 xl:flex-row flex-col">
        <div className="flex-[0.73]">
          <MostPopular />
        </div>
        <div className="flex-[0.27]">
          <Categories />
          <MostPopularToday />
        </div>
      </div>
      <TopStories />
    </main>
  );
}
