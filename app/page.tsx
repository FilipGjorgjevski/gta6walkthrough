import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Compass, Crosshair, Footprints, Search, ShieldCheck, MoveUpRight } from "lucide-react";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/lib/guides";
import { chapters, indexedMissionCount } from "@/lib/chapters";

export default function Home() {
  return <>
    <div className="top-announcement"><span className="announcement-dot"/> LIVE FROM LEONIDA <span className="announcement-sep">/</span> COMPLETE EACH MISSION · STEP BY STEP <ArrowUpRight size={13}/></div>
    <section className="home-hero">
      <div className="hero-atmosphere" aria-hidden="true"><div className="hero-sun"/><div className="hero-horizon"/><div className="hero-buildings b1"/><div className="hero-buildings b2"/><div className="hero-grain"/><div className="hero-gridfloor"/></div>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> THE GTA VI STEP-BY-STEP WALKTHROUGH <span className="eyebrow-no">001—∞</span></div>
          <h1>OWN THE<br/><span className="gradient-text">NIGHT.</span></h1>
          <p>Your neon-lit guide to GTA 6. Find the next mission, escape the trouble, and follow every turn through Leonida — without the filler.</p>
          <div className="hero-actions"><Link href="/walkthrough" className="button button-primary">Explore walkthroughs <ArrowUpRight size={19}/></Link><Link href="/walkthrough/prologue" className="button button-ghost">Start with the prologue <ArrowRight size={18}/></Link></div>
          <div className="hero-meta"><div className="hero-meta-orb"><span/></div><span>INDEPENDENT. PLAYER-LED. ALWAYS EVOLVING.</span></div>
        </div>
        <div className="hero-info-card">
          <div className="hero-info-top"><span><span className="tiny-orange-dot"/> MISSION WALKTHROUGH</span><Crosshair size={18}/></div>
          <div className="hero-info-no">001 <span>/ OPENING SEQUENCE</span></div>
          <h2>THE<br/>PROLOGUE</h2>
          <p>The guard. The robbery. The coffee shop. Six clear steps with optional discoveries and spoilers kept separate.</p><div className="hero-guide-route"><span>01 · FOLLOW THE GUARD</span><span>02 · ROB THE STORE</span><span>03 · ESCAPE THE POLICE</span></div>
          <Link href="/walkthrough/prologue">FOLLOW THE STEPS <ArrowUpRight size={18}/></Link>
          <div className="hero-card-coordinate">MISSION / 0001 <span>6 REQUIRED STEPS</span></div>
        </div>
      </div>
      <div className="hero-bottomline shell"><span>SCROLL TO EXPLORE</span><span className="line-dash"/><span>EST. 2026 &nbsp; / &nbsp; PLAYER FIRST</span></div>
    </section>
    <section className="value-strip"><div className="shell value-grid">
      <div><Footprints size={20}/><strong>PLAYABLE OBJECTIVES</strong><p>Clear actions for every mission.</p></div>
      <div><ShieldCheck size={20}/><strong>NO MADE-UP GUIDES</strong><p>Unconfirmed details are labeled.</p></div>
      <div><Search size={20}/><strong>THE ANSWER, FAST</strong><p>Skip the filler, get unstuck.</p></div>
    </div></section>
    <section className="section-block" id="latest"><div className="shell">
      <div className="section-heading"><div><span className="section-kicker"><span className="kicker-star">✳</span> START EXPLORING</span><h2>FRESH FROM <em>THE STREETS.</em></h2><p>Real guides where it matters, and a growing map of the story ahead.</p></div><Link className="text-link" href="/walkthrough">All walkthroughs <ArrowUpRight size={17}/></Link></div>
      <div className="home-guides"><GuideCard guide={guides[0]} featured/><GuideCard guide={guides[1]}/></div>
    </div></section>
    <section className="chapter-showcase"><div className="shell">
      <div className="section-heading"><div><span className="section-kicker">THE STORY, MAPPED</span><h2>THE ROAD TO <em>VICE CITY.</em></h2><p>Browse the published mission index. Full walkthroughs are added only after gameplay is documented.</p></div><Link className="text-link" href="/walkthrough">EXPLORE EVERY CHAPTER <ArrowUpRight size={17}/></Link></div>
      <div className="home-chapter-rail">{chapters.slice(1).map(chapter=><Link key={chapter.number} href={`/walkthrough#chapter-${chapter.number}`} className={`home-chapter-card home-chapter-${chapter.number}`}><span className="home-chapter-kicker">CHAPTER {String(chapter.number).padStart(2,"0")} / {chapter.region}</span><strong>{chapter.title}</strong><span className="home-chapter-bottom">{chapter.missions.length} INDEXED ENTRIES <ArrowUpRight size={17}/></span></Link>)}</div>
      <div className="chapter-rail-foot"><span>{indexedMissionCount} mission index entries across the current sources</span><span>FULL GUIDES: {String(guides.length).padStart(2,"0")}</span></div>
    </div></section>
    <section className="philosophy-section"><div className="shell philosophy-grid"><div><div className="philosophy-icon"><Compass size={28}/></div><span className="section-kicker">THE VICE ATLAS APPROACH</span><h2>A GUIDE THAT<br/><em>GETS TO THE POINT.</em></h2></div><div className="philosophy-right"><p>Each walkthrough gives you the exact actions in the right order. Optional discoveries and cinematic explanations live in their own sections, so you can play without spoilers or distractions.</p><Link href="/about" className="text-link">How we write our guides <ArrowUpRight size={16}/></Link></div></div></section>
    <section className="last-cta"><div className="shell last-cta-inner"><div><span className="section-kicker">READY WHEN YOU ARE</span><h2>YOUR NEXT MISSION<br/>STARTS <em>HERE.</em></h2></div><Link href="/walkthrough" className="button button-primary">Open the guidebook <MoveUpRight size={20}/></Link></div></section>
  </>;
}
