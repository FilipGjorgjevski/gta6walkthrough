"use client";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import GuideCard from "@/components/GuideCard";
import type { Guide } from "@/lib/guides";

export default function GuideDirectory({allGuides, initialQuery}: {allGuides: Guide[]; initialQuery: string}) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => allGuides.filter((guide) => {
    const haystack = [guide.title, guide.subtitle, guide.description, ...guide.tags].join(" ").toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  }), [allGuides, query]);
  return (
    <div>
      <div className="directory-filter">
        <div className="directory-search"><Search size={18}/><input aria-label="Search walkthroughs" placeholder="Search missions, characters, objectives..." value={query} onChange={e=>setQuery(e.target.value)} /></div>
        <div className="filter-label"><SlidersHorizontal size={16}/> {results.length} {results.length === 1 ? "GUIDE" : "GUIDES"}</div>
      </div>
      {results.length ? <div className="directory-grid">{results.map(guide=><GuideCard key={guide.slug} guide={guide}/>)}</div> :
        <div className="empty-state"><Search size={27}/><h3>No matching guide yet</h3><p>Try a different search. New verified notes are added as chapters are played.</p><button onClick={()=>setQuery("")}>Clear search <ArrowRight size={16}/></button></div>}
    </div>
  );
}
