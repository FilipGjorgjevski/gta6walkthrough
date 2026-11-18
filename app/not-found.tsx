import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <div className="shell not-found-page"><span className="section-kicker">ROUTE NOT FOUND</span><h1>404<span className="gradient-text">.</span></h1><p>Looks like this road isn't on the map yet.</p><Link className="button button-primary" href="/"><ArrowLeft size={17}/> Back to the homepage</Link></div>}
