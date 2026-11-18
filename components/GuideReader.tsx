"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, Check, ChevronDown, Clapperboard, Compass, Eye, EyeOff, Info, Lightbulb, ListChecks, Sparkles } from "lucide-react";
import type { Guide, GuideSection } from "@/lib/guides";

function Step({section, index, checked, onToggle}: {section: GuideSection; index?: number; checked: boolean; onToggle: () => void}) {
  const optional=!!section.optional;
  return <section className={`walkthrough-step ${checked?"walkthrough-step-done":""} ${optional?"walkthrough-step-optional":""}`} id={section.id}>
    <div className="walkthrough-step-number">{optional?"✳":String(index || 0).padStart(2,"0")}</div>
    <div className="walkthrough-step-content">
      <div className="walkthrough-step-meta"><span>{optional?"OPTIONAL INTERACTION":"STEP "+String(index || 0).padStart(2,"0")}</span><span className="walkthrough-step-type">{optional?"BONUS":"ACTION REQUIRED"}</span></div>
      <h3>{section.title}</h3>
      {section.objective&&<div className="objective-box"><span>ON-SCREEN OBJECTIVE</span><strong>{section.objective}</strong></div>}
      <ol className="walkthrough-directions">{section.description.map((paragraph,i)=><li key={i}>{paragraph}</li>)}</ol>
      {section.tip&&<div className="walkthrough-tip"><Lightbulb size={18}/><div><strong>GOOD TO KNOW</strong><p>{section.tip}</p></div></div>}
      {section.editorialNote&&<p className="walkthrough-caveat"><Info size={15}/>{section.editorialNote}</p>}
      <button type="button" className={`complete-btn ${checked?"done":""}`} onClick={onToggle} aria-pressed={checked}><span className="check-square">{checked&&<Check size={13}/>}</span>{checked?"Step completed":"Mark as completed"}</button>
    </div>
  </section>;
}

export default function GuideReader({guide}: {guide: Guide}) {
  const requiredSteps=guide.sections.filter(section=>section.type==="gameplay"&&!section.optional);
  const optionalSteps=guide.sections.filter(section=>section.type==="gameplay"&&section.optional);
  const cinematics=guide.sections.filter(section=>section.type==="cinematic");
  const [checked,setChecked]=useState<string[]>([]);
  const [showStory,setShowStory]=useState(false);
  const storageKey=`vice-atlas-progress-${guide.slug}`;

  useEffect(()=>{
    try { const stored=window.localStorage.getItem(storageKey); if(stored) {
      const parsed=JSON.parse(stored);
      if(Array.isArray(parsed)) setChecked(parsed.filter((s):s is string=>typeof s==="string"));
    }} catch { /* Progress tracking is optional. */ }
  },[storageKey]);

  function toggle(id:string) {
    setChecked(previous=>{
      const next=previous.includes(id)?previous.filter(item=>item!==id):[...previous,id];
      try {window.localStorage.setItem(storageKey,JSON.stringify(next));}catch{/* Storage unavailable */}
      return next;
    });
  }

  const completed=requiredSteps.filter(step=>checked.includes(step.id)).length;
  const percent=requiredSteps.length?Math.round(completed/requiredSteps.length*100):0;

  return <div className="reader-grid reader-grid-v5">
    <div className="reader-main">
      <section className="walkthrough-overview">
        <div className="walkthrough-overview-top"><span><ListChecks size={17}/> THE WALKTHROUGH</span><span>{requiredSteps.length} REQUIRED STEPS</span></div>
        <h2>STEP BY <em>STEP.</em></h2>
        <p>Follow the numbered actions below to finish the mission. Optional interactions and story cinematics are kept separate, so you can find what to do without spoilers.</p>
        <div className="walkthrough-progress-inline"><div className="walkthrough-progress-label"><span>MISSION PROGRESS</span><strong>{completed} / {requiredSteps.length} steps</strong></div><div className="progress-track"><div style={{width:`${percent}%`}}/></div></div>
        <a className="walkthrough-start" href={`#${requiredSteps[0]?.id||"story-recap"}`}>START WALKTHROUGH <ArrowUpRight size={17}/></a>
      </section>

      {guide.quickAnswers?.length?<section className="quick-answer-panel" aria-labelledby="quick-answers-heading">
        <div className="quick-answer-heading"><span className="section-kicker"><Sparkles size={15}/> QUICK ANSWERS</span><h2 id="quick-answers-heading">STUCK ON <em>SOMETHING?</em></h2></div>
        <div className="quick-answer-grid">{guide.quickAnswers.map(item=><div className="quick-answer" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</div>
      </section>:null}

      {optionalSteps.length>0&&<section className="optional-section" aria-label="Optional interactions">
        <div className="optional-header"><span><Sparkles size={16}/> BEFORE YOU START</span><strong>100% OPTIONAL</strong></div>
        {optionalSteps.map(section=><Step key={section.id} section={section} checked={checked.includes(section.id)} onToggle={()=>toggle(section.id)}/>)}
      </section>}

      <div className="walkthrough-section-title"><div><span className="section-kicker"><Compass size={15}/> MAIN OBJECTIVES</span><h2>FOLLOW <em>THE ROUTE.</em></h2></div><span>{String(requiredSteps.length).padStart(2,"0")} STEPS</span></div>
      <div className="section-stack walkthrough-main-steps">{requiredSteps.map((section,index)=><Step key={section.id} section={section} index={index+1} checked={checked.includes(section.id)} onToggle={()=>toggle(section.id)}/>)}</div>

      {cinematics.length>0&&<section className="story-recap" id="story-recap">
        <div className="story-recap-head"><div><span className="section-kicker"><Clapperboard size={15}/> STORY EXPLAINED</span><h2>WHAT HAPPENS <em>BETWEEN STEPS.</em></h2><p>Cutscenes are not playable objectives. The story summary is hidden by default to avoid spoilers.</p></div></div>
        <button type="button" className="story-reveal-button" onClick={()=>setShowStory(previous=>!previous)} aria-expanded={showStory}>{showStory?<EyeOff size={18}/>:<Eye size={18}/>} {showStory?"HIDE STORY SPOILERS":"REVEAL STORY SPOILERS"}<ChevronDown className={showStory?"up":""} size={18}/></button>
        {showStory&&<div className="cinematic-list">{cinematics.map((scene,index)=><div className="cinematic-item" key={scene.id} id={scene.id}><div className="cinematic-num">{String(index+1).padStart(2,"0")}</div><div><span>CINEMATIC / NO PLAYER ACTION</span><h3>{scene.title}</h3>{scene.description.map((paragraph,i)=><p key={i}>{paragraph}</p>)}{scene.editorialNote&&<p className="walkthrough-caveat"><Info size={14}/>{scene.editorialNote}</p>}</div></div>)}</div>}
      </section>}

      {guide.sources?.length?<div className="guide-sources"><h2>Sources &amp; accuracy</h2><p>Instructions are written independently from firsthand gameplay observations and attributed reference guides. Unconfirmed names or controls are identified rather than presented as fact.</p><ul>{guide.sources.map(source=><li key={source.name}>{source.url?<a href={source.url} target="_blank" rel="noopener noreferrer">{source.name} ↗</a>:source.name}</li>)}</ul></div>:null}
    </div>
    <aside className="reader-aside"><div className="sticky-panel">
      <div className="aside-kicker"><BookOpen size={16}/> JUMP TO A STEP</div>
      <nav aria-label="Walkthrough steps" className="toc-list">{requiredSteps.map((section,index)=><a key={section.id} href={`#${section.id}`}><span>{String(index+1).padStart(2,"0")}</span>{section.title}</a>)}</nav>
      <div className="aside-progress"><div className="progress-heading"><span>YOUR PROGRESS</span><strong>{percent}%</strong></div><div className="progress-track"><div style={{width:`${percent}%`}}/></div><small>{completed} of {requiredSteps.length} objectives complete. Saved on this device.</small></div>
      <a className="aside-next" href="#story-recap"><Clapperboard size={15}/> STORY RECAP <ArrowUpRight size={14}/></a>
    </div></aside>
  </div>;
}
