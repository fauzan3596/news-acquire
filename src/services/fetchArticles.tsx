const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getAllArticles() {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();

    
    if (!response.ok) {
      throw new Error("Failed to fetch articles, Please wait a moment");
    } else {
      return data.results;
    }
    return data.results;
  } catch (error) {
    throw new Error(`Failed to fetch all articles: ${error}`);
  }
}

export async function getArticlesBySection(section: string) {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch articles, Please wait a moment");
    } else {
      return data.results;
    }
    return data.results;
  } catch (error) {
    throw new Error(
      `Failed to fetch articles for section "${section}": ${error}`
    );
  }
}

export async function getArticlesByMostViewedInAMonth() {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch articles, Please wait a moment");
    } else {
      return data.results;
    }
    return data.results;
  } catch (error) {
    throw new Error(
      `Failed to fetch articles by most viewed in a month: ${error}`
    );
  }
}

export async function getArticlesByMostViewedInADay() {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch articles, Please wait a moment");
    } else {
      return data.results;
    }
    return data.results;
  } catch (error) {
    throw new Error(
      `Failed to fetch articles by most viewed in a day: ${error}`
    );
  }
}
