import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Compass, Crosshair, Footprints, Route, Search, ShieldCheck, Sparkles, MoveUpRight } from "lucide-react";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/lib/guides";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return <>
    <div className="top-announcement"><span className="announcement-dot"/> THE FIELD GUIDE IS LIVE <span className="announcement-sep">/</span> NEW NOTES ADDED AS WE PLAY <ArrowUpRight size={13}/></div>
    <section className="home-hero">
      <div className="hero-atmosphere" aria-hidden="true"><div className="hero-sun"/><div className="hero-horizon"/><div className="hero-buildings b1"/><div className="hero-buildings b2"/><div className="hero-grain"/><div className="hero-gridfloor"/></div>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> AN UNOFFICIAL GTA VI FIELD GUIDE <span className="eyebrow-no">001—∞</span></div>
          <h1>KNOW YOUR<br/><span className="gradient-text">NEXT MOVE.</span></h1>
          <p>Sharp walkthroughs. Real playthrough notes. Every mission, without the noise. Your guide to making it through Leonida.</p>
          <div className="hero-actions"><Link href="/walkthrough" className="button button-primary">Explore walkthroughs <ArrowUpRight size={19}/></Link><Link href="/walkthrough/prologue" className="button button-ghost">Start with the prologue <ArrowRight size={18}/></Link></div>
          <div className="hero-meta"><div className="hero-meta-orb"><span/></div><span>INDEPENDENT. PLAYER-LED. ALWAYS EVOLVING.</span></div>
        </div>
        <div className="hero-info-card">
          <div className="hero-info-top"><span><span className="tiny-orange-dot"/> LIVE FIELD REPORT</span><Crosshair size={18}/></div>
          <div className="hero-info-no">001 <span>/ OPENING SEQUENCE</span></div>
          <h2>THE<br/>PROLOGUE</h2>
          <p>From the prison corridor to the getaway. We've started mapping every moment.</p>
          <Link href="/walkthrough/prologue">Read the guide <ArrowUpRight size={18}/></Link>
          <div className="hero-card-coordinate">FIELD LOG / 0001 <span>PLAYER NOTES</span></div>
        </div>
      </div>
      <div className="hero-bottomline shell"><span>SCROLL TO EXPLORE</span><span className="line-dash"/><span>EST. 2026 &nbsp; / &nbsp; PLAYER FIRST</span></div>
    </section>
    <section className="value-strip"><div className="shell value-grid">
      <div><Footprints size={20}/><strong>REAL GAMEPLAY</strong><p>Notes from actual playthroughs.</p></div>
      <div><ShieldCheck size={20}/><strong>NO MADE-UP GUIDES</strong><p>Unconfirmed details are labeled.</p></div>
      <div><Search size={20}/><strong>THE ANSWER, FAST</strong><p>Skip the filler, get unstuck.</p></div>
    </div></section>
    <section className="section-block" id="latest"><div className="shell">
      <div className="section-heading"><div><span className="section-kicker"><span className="kicker-star">✳</span> START EXPLORING</span><h2>THE LATEST <em>FIELD NOTES.</em></h2><p>Start with the story. Stay for everything worth discovering.</p></div><Link className="text-link" href="/walkthrough">All walkthroughs <ArrowUpRight size={17}/></Link></div>
      <div className="home-guides"><GuideCard guide={guides[0]} featured/><div className="coming-card"><div className="coming-top"><span className="small-kicker">01 / NEXT CHAPTER</span><Sparkles size={20}/></div><div className="coming-art"><span>01</span><Route size={61} strokeWidth={0.7}/></div><div><span className="pill pill-muted">IN PROGRESS</span><h3>CHAPTER ONE</h3><p>The next set of mission notes will appear here once they've been played and checked.</p><div className="coming-footer">COMING FROM THE FIELD <ArrowUpRight size={16}/></div></div></div></div>
    </div></section>
    <section className="philosophy-section"><div className="shell philosophy-grid"><div><div className="philosophy-icon"><Compass size={28}/></div><span className="section-kicker">THE VICE ATLAS APPROACH</span><h2>A GUIDE THAT<br/><em>GETS TO THE POINT.</em></h2></div><div className="philosophy-right"><p>The best walkthrough is the one that helps you move forward and gets out of your way. We separate playable objectives from cinematic story beats, so you'll always know exactly when it's your turn.</p><Link href="/about" className="text-link">How we write our guides <ArrowUpRight size={16}/></Link></div></div></section>
    <section className="last-cta"><div className="shell last-cta-inner"><div><span className="section-kicker">READY WHEN YOU ARE</span><h2>YOUR NEXT MISSION<br/>STARTS <em>HERE.</em></h2></div><Link href="/walkthrough" className="button button-primary">Open the guidebook <MoveUpRight size={20}/></Link></div></section>
  </>;
}
