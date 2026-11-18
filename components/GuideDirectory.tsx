"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, LockKeyhole, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import GuideCard from "@/components/GuideCard";
import type { Guide } from "@/lib/guides";
import { chapters, indexedMissionCount } from "@/lib/chapters";

export default function GuideDirectory({allGuides, initialQuery=""}:{allGuides:Guide[];initialQuery?:string}) {
  const [query, setQuery] = useState(initialQuery);
  const [chapterFilter, setChapterFilter] = useState<number | "all">("all");
  const [showLateSpoilers, setShowLateSpoilers] = useState(false);
  const q = query.trim().toLocaleLowerCase();
  const results = useMemo(() => allGuides.filter(guide => [guide.title,guide.subtitle,guide.description,...guide.tags].join(" ").toLowerCase().includes(q)), [allGuides,q]);
  const matchChapters = useMemo(() => chapters.map(chapter => ({...chapter,missions:chapter.missions.filter(mission=>!q || [mission.name,mission.note||"",chapter.title,chapter.region].join(" ").toLowerCase().includes(q))})).filter(chapter=>(chapterFilter==="all" || chapter.number===chapterFilter) && chapter.missions.length),[q,chapterFilter]);
  return <div>
    <div className="directory-filter">
      <div className="directory-search"><Search size={19}/><input aria-label="Search GTA 6 missions" placeholder="Search a mission, place, or character..." value={query} onChange={e=>setQuery(e.target.value)} /></div>
      <div className="filter-label"><SlidersHorizontal size={16}/>{indexedMissionCount} INDEXED ENTRIES · {allGuides.length} FULL GUIDES</div>
    </div>
    <div className="directory-section-head"><span className="section-kicker"><Sparkles size={14}/> READY TO PLAY</span><h2>ACTUAL <em>WALKTHROUGHS</em></h2><p>Follow clear numbered actions, track completed objectives, and reveal story spoilers only when you want them.</p></div>
    {results.length ? <div className="directory-grid">{results.map(guide=><GuideCard key={guide.slug} guide={guide}/>)}</div> : <p className="directory-empty">No published walkthrough matches this search yet. The broader mission index below might have it.</p>}
    <div className="catalogue-title-row"><div><span className="section-kicker">THE LEONIDA ARCHIVE</span><h2>STORY <em>MISSION INDEX.</em></h2><p>Browse mission titles and jump to guides as they are written. A listed mission does not mean a walkthrough is published.</p></div><span className="catalogue-counter"><BookOpen size={19}/>{indexedMissionCount} ENTRIES</span></div>
    <div className="chapter-filters" role="group" aria-label="Filter by chapter"><button className={chapterFilter==="all"?"selected":""} onClick={()=>setChapterFilter("all")}>ALL</button>{chapters.map(c=><button key={c.number} className={chapterFilter===c.number?"selected":""} onClick={()=>setChapterFilter(c.number)}>{c.number===0?"PROLOGUE":`CH ${String(c.number).padStart(2,"0")}`}</button>)}</div>
    <div className="chapter-catalogue">
      {matchChapters.map(chapter=>{
        const locked = chapter.number>=3&&!showLateSpoilers;
        return <section id={`chapter-${chapter.number}`} key={chapter.number} className={`chapter-panel chapter-panel-${chapter.number}`}>
          <div className="chapter-panel-top">
            <div className="chapter-no">{String(chapter.number).padStart(2,"0")}</div>
            <div className="chapter-panel-head"><span className="chapter-region">{chapter.region} / {chapter.number===0?"OPENING":"CHAPTER"} {String(chapter.number).padStart(2,"0")}</span><h3>{chapter.title}</h3><p>{chapter.strapline}</p></div>
            <div className="chapter-count">{chapter.missions.length}<span>LISTED</span></div>
          </div>
          {locked ? <div className="chapter-spoiler-lock"><LockKeyhole size={23}/><div><strong>Later chapter titles are hidden</strong><p>These entries can spoil the game. Reveal Chapters 3–5 if you want to see them.</p></div><button onClick={()=>setShowLateSpoilers(true)}>REVEAL TITLES <ArrowUpRight size={16}/></button></div> : <div className="mission-table">
            {chapter.missions.map((mission, i)=><div className="mission-row" key={`${chapter.number}-${i}`}>
              <span className="mission-index">{String(i+1).padStart(2,"0")}</span>
              <div className="mission-name">{mission.name}{mission.note&&<span className="mission-note">{mission.note}</span>}</div>
              {mission.guideSlug ? <Link href={`/walkthrough/${mission.guideSlug}`} className="mission-link">READ GUIDE <ArrowUpRight size={16}/></Link> : <span className="mission-pending">INDEX ONLY</span>}
            </div>)}
          </div>}
          <div className="chapter-source">MISSION NAMES: <a href={chapter.sourceUrl} target="_blank" rel="noopener noreferrer">{chapter.sourceName} <ArrowUpRight size={12}/></a><span> · Guides are written independently</span></div>
        </section>
      })}
      {!matchChapters.length && <div className="directory-empty">No matching mission title. Try a different keyword or select all chapters.</div>}
    </div>
    <p className="catalogue-disclaimer">Mission listings are sourced from launch-day published indexes and may change. Full walkthroughs are independently written from gameplay observations and credited reference sources. No unplayed mission is presented as a completed guide.</p>
  </div>
}
