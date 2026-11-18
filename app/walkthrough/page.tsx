import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Compass } from "lucide-react";
import GuideDirectory from "@/components/GuideDirectory";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "GTA VI Walkthroughs & Mission Guides",
  description: "Find GTA VI story mission walkthroughs, exact on-screen objectives and player-led notes. Begin with Lucia's prologue.",
  alternates: { canonical: "/walkthrough" },
};

export default function WalkthroughIndex() {
  const query = "";
  return <>
    <section className="page-intro shell"><div className="breadcrumbs"><a href="/">HOME</a><span>/</span><strong>WALKTHROUGHS</strong></div><div className="page-intro-split"><div><span className="section-kicker"><Compass size={15}/> THE GUIDEBOOK</span><h1>WALK<span className="gradient-text">THROUGHS.</span></h1><p>Playable objectives, cutscenes, and useful context, clearly separated. Find what you need. Get back to the game.</p></div><div className="page-intro-stat"><BookOpen size={23}/><strong>{String(guides.length).padStart(2,"0")}</strong><span>LIVE GUIDE</span></div></div></section>
    <section className="directory-section shell"><GuideDirectory allGuides={guides} initialQuery={query}/><div className="directory-hint">MORE GUIDES WILL APPEAR AS NEW MISSIONS ARE VERIFIED <ArrowUpRight size={15}/></div></section>
  </>;
}
