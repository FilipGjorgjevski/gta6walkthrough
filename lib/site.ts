export const siteName = "VICE ATLAS";
export const siteDescription = "An independent GTA VI field guide: clear mission walkthroughs, gameplay objectives, and story notes collected as the game unfolds.";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")).replace(/\/$/, "");
