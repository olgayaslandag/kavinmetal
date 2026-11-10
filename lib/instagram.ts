// Instagram veri katmanı: canlı API + yedek içerik
// Canlı akış için INSTAGRAM_ACCESS_TOKEN gerekir (bkz. .env.example).
// Token yoksa/geçersizse site yine de yedek gönderilerle ayakta kalır.

export type InstaPost = {
  id: string;
  caption: string;
  image: string;
  permalink: string;
  timestamp: string;
};

type RawMedia = {
  id: string;
  caption?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

const PROFILE_URL = "https://www.instagram.com/kavinmetal/";

// Token tanımlanmadan önce gösterilen yedek gönderiler (kavinmetal.com görselleri)
export const fallbackPosts: InstaPost[] = [
  {
    id: "fallback-1",
    caption: "Elektrostatik toz boya tesisimizden kareler — Kavin Metal kalitesiyle.",
    image: "/assets/img/services/toz-boya-1.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-2",
    caption: "Göktürk Konutları — WAT55 pencere ve kapı sistem uygulaması.",
    image:
      "/assets/img/projects/Referanslar_0036_47_0001_Gokturk_KONUTLARI-3_WA55_KHR-2.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-3",
    caption: "Profil ebatlama ve mekanik işlemler — Lüleburgaz fabrikamızdan.",
    image: "/assets/img/services/profil-ebatlama.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-4",
    caption: "Bizi Instagram'da takip edin: @kavinmetal",
    image: "/assets/img/projects/asdasd1.png",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-5",
    caption: "Proje referansları - Kavin Metal üretim faciliteleri.",
    image: "/assets/img/projects/gsa130.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-6",
    caption: "WAT55 sistemleri kurulum projeleri.",
    image: "/assets/img/projects/Referanslar_0036_47_0003_wa-55-safiport-ticari.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-7",
    caption: "Kemerburgaz Apartmanları - WAT55 uygulama.",
    image: "/assets/img/projects/Referanslar_0036_47_0028_kemerburgaz-evleri-wat-55.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-8",
    caption: "Mekanik işlemler ve calidad kontrol.",
    image: "/assets/img/products/cam-kupeste.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-9",
    caption: "Alüminyum profiller - usine detayları.",
    image: "/assets/img/products/aluminyum-profiller-150x150.png",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-10",
    caption: "Kompozit paneller uygulamaları.",
    image: "/assets/img/products/kompozit-paneller-150x150.png",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-11",
    caption: "Dekoratif profil çalışmaları.",
    image: "/assets/img/products/donanim-grubu.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
  {
    id: "fallback-12",
    caption: "Proje referans galerisi - Kavin Metal projeleri.",
    image: "/assets/img/projects/Referanslar_0036_47_0011_Akkus-Tekstil_2013_WAT55-1.jpg",
    permalink: PROFILE_URL,
    timestamp: "",
  },
];

// Ham Graph API yanıtını kart modeline indirger
export function normalizeMedia(item: RawMedia): InstaPost | null {
  const image =
    item.media_type === "VIDEO"
      ? (item.thumbnail_url ?? item.media_url)
      : item.media_url;
  if (!item.id || !image || !item.permalink) return null;
  return {
    id: item.id,
    caption: item.caption ?? "",
    image,
    permalink: item.permalink,
    timestamp: item.timestamp ?? "",
  };
}

export async function fetchLivePosts(
  token: string,
  limit = 8
): Promise<InstaPost[]> {
  const params = new URLSearchParams({
    fields: "id,caption,media_url,media_type,thumbnail_url,permalink,timestamp",
    limit: String(limit),
    access_token: token,
  });
  const res = await fetch(`https://graph.instagram.com/me/media?${params}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`instagram-api-${res.status}`);
  const json = (await res.json()) as { data?: RawMedia[] };
  return (json.data ?? [])
    .map(normalizeMedia)
    .filter((p): p is InstaPost => p !== null)
    .slice(0, limit);
}
