import type { MetadataRoute } from "next";
import { guides, getGuideUrl } from "@/lib/guides";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {url:siteUrl,changeFrequency:"weekly",priority:1},
    {url:`${siteUrl}/walkthrough`,changeFrequency:"daily",priority:0.9},
    ...guides.map(guide=>({url:`${siteUrl}${getGuideUrl(guide.slug)}`,lastModified:new Date(`${guide.updated}T12:00:00Z`),changeFrequency:"weekly" as const,priority:0.8})),
    {url:`${siteUrl}/about`,changeFrequency:"monthly",priority:0.3},
    {url:`${siteUrl}/privacy`,changeFrequency:"monthly",priority:0.1},
  ];
}
