import { NextRequest, NextResponse } from "next/server";
import { getNews, getNewsDetail } from "@/lib/api/client";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = (searchParams.get('locale') || 'tr') as 'tr' | 'en';
  const slug = searchParams.get('slug');
  const category = searchParams.get('category');

  try {
    if (slug) {
      const article = await getNewsDetail(slug);
      if (!article) {
        return NextResponse.json(
          { error: "not_found" },
          { status: 404 }
        );
      }
      return NextResponse.json(article);
    }

    const articles = await getNews();
    
    let filteredArticles = articles;
    if (category && ['Basın', 'Duyuru', 'Etkinlik'].includes(category)) {
      filteredArticles = articles.filter(article => article.category === category);
    }
    
    // Sort by publishedAt descending
    filteredArticles.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
    
    return NextResponse.json(filteredArticles);
  } catch (err) {
    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    );
  }
}