import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3, Footprints, Clapperboard, ShieldCheck } from "lucide-react";
import GuideReader from "@/components/GuideReader";
import { getGuide, guides, getGuideUrl } from "@/lib/guides";
import { siteUrl } from "@/lib/site";

type Props = {params: Promise<{slug: string}>};
export function generateStaticParams() { return guides.map(guide=>({slug:guide.slug})); }

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const guide=getGuide((await params).slug);
  if (!guide) return {title:"Guide not found", robots: {index:false}};
  return {
    title: `GTA 6 ${guide.title} Walkthrough — Step-by-Step Guide`,
    description: guide.description,
    alternates: {canonical:getGuideUrl(guide.slug)},
    openGraph: {title:`GTA 6 ${guide.title} Walkthrough | VICE ATLAS`, description:guide.description, type:"article"},
  };
}

export default async function GuidePage({params}: Props) {
  const guide=getGuide((await params).slug);
  if (!guide) notFound();
  const gameSteps=guide.sections.filter(s=>s.type==="gameplay" && !s.optional).length;
  const scenes=guide.sections.filter(s=>s.type==="cinematic").length;
  const structured = {
    "@context": "https://schema.org", "@type": "Article",
    headline: `GTA 6 ${guide.title} Walkthrough`, description:guide.description,
    dateModified: guide.updated, datePublished: guide.updated,
    mainEntityOfPage: `${siteUrl}${getGuideUrl(guide.slug)}`,
    author: {"@type":"Organization", name:"VICE ATLAS"},
    publisher: {"@type":"Organization", name:"VICE ATLAS"}
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}}/>
    <section className="article-hero"><div className="shell"><div className="breadcrumbs"><Link href="/">HOME</Link><span>/</span><Link href="/walkthrough">WALKTHROUGHS</Link><span>/</span><strong>{guide.title.toUpperCase()}</strong></div>
      <div className="article-meta"><span className="pill pill-live"><span className="dot"/> STEP-BY-STEP GUIDE</span><span>{guide.chapter}</span><span><Clock3 size={14}/>{guide.readingMinutes} MIN READ</span></div>
      <h1>GTA 6 <span className="gradient-text">{guide.title.toUpperCase()}</span><br/>WALKTHROUGH</h1><p>{guide.description}</p>
      <div className="article-stats"><div><Footprints size={19}/><strong>{gameSteps}</strong><span>REQUIRED STEPS</span></div><div><Clapperboard size={19}/><strong>{scenes}</strong><span>CUTSCENES</span></div><div><ShieldCheck size={19}/><strong>LIVE</strong><span>WALKTHROUGH AVAILABLE</span></div></div>
    </div></section>
    <div className="shell reader-container"><GuideReader guide={guide}/><div className="article-end"><Link href="/walkthrough"><ArrowLeft size={17}/> All walkthroughs</Link><span>{guide.slug === "prologue" ? <Link href="/walkthrough/chapter-1">NEXT: GONE FISHING <ArrowUpRight size={16}/></Link> : <Link href="/walkthrough/prologue">PREVIOUS: PROLOGUE <ArrowUpRight size={16}/></Link>}</span></div></div>
  </>;
}
