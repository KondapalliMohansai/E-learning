import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLearning } from "../context/LearningContext";

export default function Auth({ mode = "login" }) {
  const isRegister = mode === "register";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useLearning();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = (e) => {
    e.preventDefault();
    if (isRegister && name.trim().length < 2) return setError("Please enter your name (at least 2 characters).");
    if (!/^[^\s@]+@[^\s@]+\\.[^\s@]+$/.test(email)) return setError("Enter a valid email address.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    signIn({ name: isRegister ? name.trim() : (email.split("@")[0] || "Learner"), email });
    navigate(location.state?.from || "/my-learning");
  };
  return <main className="auth-page"><div className="auth-decoration"><div className="auth-decoration-circle circle-a" /><div className="auth-decoration-circle circle-b" /><span className="auth-star star-a">✦</span><span className="auth-star star-b">✳</span><div className="auth-promo"><span className="eyebrow">A LITTLE PROGRESS, EVERY DAY</span><h2>Make room for<br /><span>what's next.</span></h2><p>Learn practical skills from wherever you are. Your next chapter is waiting.</p><div className="auth-mini-stats"><div><strong>25k+</strong><small>learners</small></div><div><strong>120+</strong><small>lessons</small></div><div><strong>4.8★</strong><small>course rating</small></div></div></div></div><div className="auth-form-side"><div className="auth-form-wrap"><Link to="/" className="brand auth-brand"><span className="brand-mark">L</span> learnify<span className="brand-dot">.</span></Link><span className="eyebrow">{isRegister ? "START YOUR JOURNEY" : "WELCOME BACK"}</span><h1>{isRegister ? "Create your account" : "Good to see you."}</h1><p className="auth-subtitle">{isRegister ? "Set up your free account and start learning." : "Sign in to pick up where you left off."}</p><form onSubmit={submit} className="auth-form">{isRegister && <label>Full name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Alex Morgan" autoComplete="name" required /></label>}<label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required /></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 6 characters" autoComplete={isRegister ? "new-password" : "current-password"} required minLength={6} /></label>{error && <p className="form-error">{error}</p>}<button className="button button-full" type="submit">{isRegister ? "Create account" : "Log in"} <span>↗</span></button><p className="demo-note">Demo only — your details stay in this browser. No backend is connected.</p></form><p className="auth-switch">{isRegister ? "Already have an account?" : "New to Learnify?"} <Link to={isRegister ? "/login" : "/register"}>{isRegister ? "Log in" : "Create an account"}</Link></p><Link to="/" className="back-home">← Back to home</Link></div></div></main>;
}