import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: "/favicon.svg" },
  title: { default: `${siteName} — GTA VI Walkthroughs & Field Notes`, template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
  openGraph: { type: "website", locale: "en_US", siteName, title: `${siteName} — GTA VI Field Guide`, description: siteDescription, images: [{url: "/og.png", width: 1200, height: 630, alt: "Vice Atlas — GTA VI field guide"}] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><Analytics/><body><Header/><main>{children}</main><Footer/></body></html>;
}
