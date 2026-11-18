import Link from "next/link";
import { Compass, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand"><Compass size={21}/><span>VICE/ATLAS</span></div>
        <div className="footer-links">
          <Link href="/walkthrough">Walkthroughs</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact <ArrowUpRight size={13}/></Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>Independent fan-made reference. Not affiliated with Rockstar Games or Take-Two Interactive. Grand Theft Auto is a trademark of its respective owners.</p>
        <span>BUILT FOR THE CURIOUS. © {new Date().getFullYear()} VICE ATLAS.</span>
      </div>
    </footer>
  );
}
