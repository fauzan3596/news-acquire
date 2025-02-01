import { PopularArticle } from "../interfaces/popularArticleInterface";

export const getTimeFromNow = (timestamp: string): string => {
  const currentTime = new Date().getTime();
  const differenceInTime = currentTime - new Date(timestamp).getTime();
  const differenceInMinutes = Math.floor(differenceInTime / 60000);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInMonths / 12);
  let result = "";
  if (differenceInYears > 0) {
    result += `${differenceInYears} ${
      differenceInYears > 1 ? "years" : "year"
    } ago`;
  } else if (differenceInMonths > 0) {
    result += `${differenceInMonths} ${
      differenceInMonths > 1 ? "months" : "month"
    } ago`;
  } else if (differenceInDays > 0) {
    result += `${differenceInDays} ${
      differenceInDays > 1 ? "days" : "day"
    } ago`;
  } else if (differenceInHours > 0) {
    result += `${differenceInHours} ${
      differenceInHours > 1 ? "hours" : "hour"
    } ago`;
  } else {
    result += `${differenceInMinutes} ${
      differenceInMinutes > 1 ? "minutes" : "minute"
    } ago`;
  }
  return result;
};

export const getBadgeColor = (section: string): string => {
  switch (section.toLowerCase()) {
    case "arts":
      return "bg-red-500";
    case "automobiles":
      return "bg-blue-700";
    case "books/review":
      return "bg-yellow-500";
    case "business":
      return "bg-green-500";
    case "fashion":
      return "bg-pink-500";
    case "food":
      return "bg-orange-500";
    case "health":
      return "bg-teal-500";
    case "home":
      return "bg-purple-500";
    case "insider":
      return "bg-indigo-500";
    case "magazine":
      return "bg-gray-500";
    case "movies":
      return "bg-cyan-500";
    case "nyregion":
      return "bg-lime-500";
    case "obituaries":
      return "bg-stone-500";
    case "opinion":
      return "bg-amber-500";
    case "politics":
      return "bg-rose-500";
    case "realestate":
      return "bg-sky-500";
    case "science":
      return "bg-fuchsia-500";
    case "sports":
      return "bg-red-500";
    case "sundayreview":
      return "bg-violet-500";
    case "technology":
      return "bg-blue-500";
    case "theater":
      return "bg-orange-700";
    case "t-magazine":
      return "bg-gray-700";
    case "travel":
      return "bg-yellow-700";
    case "upshot":
      return "bg-teal-700";
    case "us":
      return "bg-indigo-700";
    case "world":
      return "bg-red-700";
    case "dining":
      return "bg-green-700";
    case "style":
      return "bg-pink-700";
    default:
      return "bg-zinc-500";
  }
};

export const getCategoryColor = (index: number): string => {
  switch (index) {
    case 0:
      return "pink-500";
    case 1:
      return "orange-500";
    case 2:
      return "red-500";
    case 3:
      return "blue-500";
    default:
      return "gray-300";
  }
};

export const sortArticles = (popularArticles: PopularArticle) => {
  if (!popularArticles || !Array.isArray(popularArticles)) {
    return [];
  }

  const sortedArticles = popularArticles.sort(
    (a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()
  );
  return sortedArticles;
};
