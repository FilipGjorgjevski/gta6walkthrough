import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Compass } from "lucide-react";
import GuideDirectory from "@/components/GuideDirectory";
import { guides } from "@/lib/guides";
import { indexedMissionCount } from "@/lib/chapters";

export const metadata: Metadata = {
  title: "GTA 6 Missions List, Chapters & Walkthroughs",
  description: "Explore GTA 6 story missions across five chapters. Find the prologue, Gone Fishing, an indexed mission list, and independently written guides from VICE ATLAS.",
  alternates: { canonical: "/walkthrough" },
};

export default function WalkthroughIndex() {
  return <>
    <section className="page-intro shell"><div className="breadcrumbs"><a href="/">HOME</a><span>/</span><strong>WALKTHROUGHS</strong></div><div className="page-intro-split"><div><span className="section-kicker"><Compass size={15}/> THE LEONIDA FIELD GUIDE</span><h1>THE <span className="gradient-text">MISSION</span><br/>ARCHIVE.</h1><p>Five chapters. One road through Leonida. Browse the mission index, then open the guides we have actually documented.</p></div><div className="page-intro-stat"><BookOpen size={23}/><strong>{indexedMissionCount}</strong><span>INDEXED ENTRIES</span></div></div></section>
    <section className="directory-section shell"><GuideDirectory allGuides={guides}/><div className="directory-hint">MORE FIELD GUIDES APPEAR AS OBJECTIVES ARE DOCUMENTED <ArrowUpRight size={15}/></div></section>
  </>;
}
