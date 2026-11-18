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
        {guide.quickAnswers?.length ? <div className="quick-answer-panel">
          <div className="quick-answer-heading"><span className="section-kicker">FAST ANSWERS</span><h2>GET UNSTUCK.</h2></div>
          <div className="quick-answer-grid">{guide.quickAnswers.map(answer=><div className="quick-answer" key={answer.question}><h3>{answer.question}</h3><p>{answer.answer}</p></div>)}</div>
        </div> : null}
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
        {guide.sources?.length ? <div className="guide-sources"><h2>Sources &amp; verification</h2><p>Our guide uses original playthrough notes, with supplemental factual checks credited here. Wording and walkthrough explanations are written for VICE ATLAS.</p><ul>{guide.sources.map(source=><li key={source.name}>{source.url?<a href={source.url} target="_blank" rel="noopener noreferrer">{source.name} ↗</a>:source.name}</li>)}</ul></div>:null}
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
