import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLearning } from "../context/LearningContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useLearning();
  const close = () => setOpen(false);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}><span className="brand-mark">L</span> learnify<span className="brand-dot">.</span></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? "✕" : "☰"}</button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/courses" onClick={close}>Courses</NavLink>
          <NavLink to="/my-learning" onClick={close}>My Learning</NavLink>
          {user ? (
            <div className="nav-user"><span className="avatar">{user.name?.charAt(0)?.toUpperCase() || "S"}</span><span className="user-name">{user.name}</span><button className="text-button" onClick={() => { signOut(); close(); }}>Log out</button></div>
          ) : <div className="nav-actions"><Link className="login-link" to="/login" onClick={close}>Log in</Link><Link className="button button-small" to="/register" onClick={close}>Get started <span>↗</span></Link></div>}
        </nav>
      </div>
    </header>
  );
}