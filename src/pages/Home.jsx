import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const categories = [
  ["⌘", "Development", "Build your next big idea"],
  ["✳", "Design", "Make digital experiences"],
  ["▥", "Data Science", "Turn data into insight"],
  ["↗", "Business", "Grow your career"]
];

export default function Home() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
          <h1>Learn skills.<br /><span>Unlock your</span><br />potential.</h1>
          <p className="hero-description">Learn something new today. Explore expert-led courses designed to help you grow, create, and move forward with confidence.</p>
          <div className="hero-actions"><Link className="button" to="/courses">Explore courses <span>↗</span></Link><Link className="secondary-link" to="/my-learning">View my learning <span>→</span></Link></div>
          <div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><div><strong>25,000+</strong><small>learners growing every day</small></div><span className="proof-divider" /><div><strong>4.8/5</strong><small>average course rating</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="hero-main-card"><div className="hero-card-top"><span className="live-dot" /> YOUR LEARNING SPACE <span>•••</span></div><div className="hero-illustration"><div className="illustration-sun" /><div className="illustration-arch" /><div className="illustration-person"><span /></div><div className="illustration-laptop">⌘</div><div className="floating-star">✦</div></div><div className="hero-card-bottom"><div><small>THIS WEEK</small><strong>Keep the momentum</strong></div><div className="streak">✦ 5 day streak</div></div></div>
          <div className="floating-note note-top"><span className="note-icon">✓</span><div><strong>You're doing great!</strong><small>Course progress updated</small></div></div>
          <div className="floating-note note-bottom"><div className="note-chart">↗</div><div><strong>One lesson at a time</strong><small>Progress adds up.</small></div></div>
        </div>
      </section>
      <section className="section-wrap category-section"><div className="section-heading"><div><span className="eyebrow">FIND YOUR DIRECTION</span><h2>What do you want to learn?</h2></div><Link className="secondary-link" to="/courses">All categories <span>→</span></Link></div><div className="category-grid">{categories.map(([icon, name, desc]) => <Link to={`/courses?category=${encodeURIComponent(name)}`} className="category-tile" key={name}><span className="category-icon">{icon}</span><strong>{name}</strong><small>{desc}</small><span className="tile-arrow">↗</span></Link>)}</div></section>
      <section className="section-wrap featured-section"><div className="section-heading"><div><span className="eyebrow">CURATED FOR YOU</span><h2>Popular courses</h2><p>Practical knowledge for your next big step.</p></div><Link className="secondary-link" to="/courses">Browse all courses <span>→</span></Link></div><div className="course-grid">{courses.slice(0, 3).map(course => <CourseCard key={course.id} course={course} />)}</div></section>
      <section className="cta-section section-wrap"><div><span className="eyebrow">YOUR JOURNEY, YOUR PACE</span><h2>There's always more to discover.</h2><p>Choose a course, learn at your own pace, and celebrate every milestone.</p></div><Link className="button button-light" to="/courses">Start learning <span>↗</span></Link></section>
    </>
  );
}