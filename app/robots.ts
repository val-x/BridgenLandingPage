import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://bridgentraining.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/.*",
          "/*?*utm_*",
          "/*?*fbclid*",
          "/*?*gclid*",
          "/search",
          "/404",
          "/500",
        ],
      },
      // Specific rules for search engine bots
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/_next/"],
        crawlDelay: 1,
      },
      // Allow all for specific helpful bots
      {
        userAgent: ["facebookexternalhit", "twitterbot", "linkedinbot"],
        allow: "/",
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/courses-sitemap.xml`,
      `${baseUrl}/blog-sitemap.xml`,
    ],
    host: baseUrl,
  };
}
