import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bridgentraining.com";

  // Get the current date for the lastModified field
  const currentDate = new Date();

  // Define your routes
  const routes = [
    "",
    "/about-bridgen",
    "/courses",
    "/student-projects-portfolio",
    "/student-placement-success",
    "/freelance-cad-jobs",
    "/contact-bridgen",
  ];

  // Create sitemap entries for each route
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
