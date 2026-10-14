import { Link } from "react-router-dom";
export default function Footer() {
  return <footer className="footer"><div className="footer-inner"><Link to="/" className="brand"><span className="brand-mark">L</span> learnify<span className="brand-dot">.</span></Link><p>Small steps today. Big possibilities tomorrow.</p><span>© {new Date().getFullYear()} Learnify. Keep learning.</span></div></footer>;
}