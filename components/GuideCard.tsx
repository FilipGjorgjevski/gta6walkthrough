import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3, Route } from "lucide-react";
import type { Guide } from "@/lib/guides";
import { getGuideUrl } from "@/lib/guides";

export default function GuideCard({guide, featured=false}: {guide: Guide; featured?: boolean}) {
  return (
    <Link href={getGuideUrl(guide.slug)} className={`guide-card ${featured ? "guide-card-featured" : ""}`}>
      <div className="guide-card-top"><span className="small-kicker">{guide.chapter}</span><ArrowUpRight size={20} /></div>
      <div className="guide-card-art"><span className="guide-art-num">{guide.slug === "prologue" ? "00" : "01"}</span><Route size={42} strokeWidth={1} /></div>
      <div className="guide-card-body">
        <div className="guide-card-badges"><span className="pill pill-live"><span className="dot"/> STEP-BY-STEP</span><span className="card-metadata"><Clock3 size={13}/> {guide.readingMinutes} MIN READ</span></div>
        <h3>{guide.title}</h3>
        <p>{guide.description}</p>
        <div className="card-read">Read walkthrough <ArrowUpRight size={16}/></div>
      </div>
    </Link>
  );
}
