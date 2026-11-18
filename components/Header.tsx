"use client";

import Link from "next/link";
import { ArrowUpRight, Compass, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [{href:"/",label:"Home"},{href:"/walkthrough",label:"Missions"},{href:"/about",label:"About"}];
export default function Header() {
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav-wrap">
    <Link href="/" className="wordmark" aria-label="VICE ATLAS homepage" onClick={()=>setOpen(false)}><span className="mark"><Compass size={20} strokeWidth={2.4}/></span><span>VICE<span className="wordmark-accent">/</span>ATLAS</span><span className="wordmark-sub">GTA 6 MISSION WALKTHROUGHS</span></Link>
    <nav className={`main-nav ${open?"nav-open":""}`} aria-label="Main navigation">{links.map(link=><Link key={link.href} className="nav-link" href={link.href} onClick={()=>setOpen(false)}>{link.label}</Link>)}<Link className="nav-cta" href="/walkthrough" onClick={()=>setOpen(false)}>MISSION INDEX <ArrowUpRight size={15}/></Link></nav>
    <button type="button" className="mobile-menu" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={24}/>:<Menu size={24}/>}</button>
  </div></header>;
}
