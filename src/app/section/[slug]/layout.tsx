import { Article } from "@/app/interfaces/articleInterface";
import { Section } from "@/app/interfaces/sectionInterface";
import type { Metadata } from "next";
type Props = {
  params: { slug: string };
};

const sections: Section[] = [
  {
    name: "Fashion",
    icon: "/fashion-icon.png",
  },
  {
    name: "Food",
    icon: "/food-icon.png",
  },
  {
    name: "Sports",
    icon: "/sports-icon.png",
  },
  {
    name: "Technology",
    icon: "/technology-icon.png",
  },
];

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  // read route params
  const slug = params.slug;

  // fetch data
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${slug}.json?api-key=${API_KEY}`,
    { next: { revalidate: 3600 * 24 } }
  );
  const data = await response.json();
  const articles: Article[] = data.results;

  const metadata: Metadata = {
    title: `NewsAcquire - Online News - ${
      sections.find((section) => section.name.toLocaleLowerCase() === slug)
        ?.name
    } News`,
    description: "Latest news from the New York Times",
    keywords: [
      "news",
      "NYTimes",
      "online news",
      "breaking news",
      "global news",
      "world news",
      `${
        sections.find((section) => section.name.toLowerCase() === slug)?.name
      } news`,
    ],
    openGraph: {
      type: "website",
      url: `https://localhost:3000/section/${slug}`,
      title: `${
        sections.find((section) => section.name.toLowerCase() === slug)?.name
      } News`,
      description: "Latest news from the New York Times",
      images: [
        {
          url: articles[0].multimedia[0].url,
          alt: articles[0].multimedia[0].caption,
        },
      ],
    },
  };

  return metadata;
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
