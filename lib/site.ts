export const siteName = "VICE ATLAS";
export const siteDescription = "Step-by-step GTA 6 walkthroughs with clear mission objectives, exact gameplay instructions, optional secrets and spoiler-controlled story explanations.";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")).replace(/\/$/, "");
