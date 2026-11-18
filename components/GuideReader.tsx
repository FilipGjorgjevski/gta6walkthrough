"use client";

import { useEffect, useState } from "react";
import { Check, Clapperboard, Footprints, Eye, EyeOff, Info } from "lucide-react";
import type { Guide } from "@/lib/guides";

export default function GuideReader({guide}: {guide: Guide}) {
  const [checked, setChecked] = useState<string[]>([]);
  const [showStory, setShowStory] = useState(true);
  const storageKey = `vice-atlas-progress-${guide.slug}`;
  const gameplay = guide.sections.filter(s=>s.type==="gameplay");
  useEffect(()=>{
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) setChecked(JSON.parse(saved) as string[]);
    } catch { /* local storage may be unavailable */ }
  }, [storageKey]);
  function toggle(id: string) {
    setChecked(prev=>{
      const next=prev.includes(id)?prev.filter(item=>item!==id):[...prev,id];
      try { window.localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* optional feature */ }
      return next;
    });
  }
  return (
    <div className="reader-grid">
      <div className="reader-main">
        <div className="reader-toolbar">
          <span><Info size={15}/> Field notes in progress · Some dialogue needs verification.</span>
          <button className="story-toggle" onClick={()=>setShowStory(!showStory)}>{showStory?<EyeOff size={15}/>:<Eye size={15}/>} {showStory?"Hide story spoilers":"Show story spoilers"}</button>
        </div>
        <div className="section-stack">
          {guide.sections.map((section, index) => {
            const isScene=section.type==="cinematic";
            return <section className={`guide-step ${isScene ? "guide-step-scene" : ""}`} id={section.id} key={section.id}>
              <div className="step-number">{String(index+1).padStart(2,"0")}</div>
              <div className="step-content">
                <div className="step-kind">{isScene ? <Clapperboard size={14}/> : <Footprints size={14}/>} {isScene?"CINEMATIC · NO PLAYER ACTION":"PLAYABLE SEQUENCE"}</div>
                <h2>{section.title}</h2>
                {isScene && !showStory ? <p className="spoiler-covered">Story details hidden. Use “Show story spoilers” above to reveal this section.</p> : <>
                  {section.objective && <div className="objective-box"><span>IN-GAME OBJECTIVE</span><strong>{section.objective}</strong></div>}
                  {section.description.map((p,i)=><p key={i}>{p}</p>)}
                  {section.editorialNote && <div className="editorial-note"><Info size={17}/><span>{section.editorialNote}</span></div>}
                </>}
                {!isScene && <button className={`complete-btn ${checked.includes(section.id)?"done":""}`} onClick={()=>toggle(section.id)}><span className="check-square">{checked.includes(section.id)&&<Check size={13}/>}</span>{checked.includes(section.id)?"Marked complete":"Mark step complete"}</button>}
              </div>
            </section>;
          })}
        </div>
      </div>
      <aside className="reader-aside">
        <div className="sticky-panel">
          <div className="aside-kicker">IN THIS GUIDE</div>
          <nav aria-label="Guide sections" className="toc-list">{guide.sections.map((section,i)=><a key={section.id} href={`#${section.id}`}><span>{String(i+1).padStart(2,"0")}</span>{section.title}</a>)}</nav>
          <div className="aside-progress">
            <div className="progress-heading"><span>YOUR PROGRESS</span><strong>{checked.length}/{gameplay.length}</strong></div>
            <div className="progress-track"><div style={{width:`${gameplay.length?checked.length/gameplay.length*100:0}%`}}/></div>
            <small>Saved on this device, no account required.</small>
          </div>
        </div>
      </aside>
    </div>
  );
}
