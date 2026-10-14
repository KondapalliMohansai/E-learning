import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { useLearning } from "../context/LearningContext";

export default function MyLearning() {
  const { enrolled, progress } = useLearning();
  const myCourses = courses.filter(course => enrolled.includes(course.id));
  const completed = myCourses.filter(course => (progress[course.id] || 0) >= 100).length;
  return <main className="page-wrap"><div className="page-intro"><span className="eyebrow">YOUR PERSONAL LEARNING SPACE</span><h1>Keep your <span>momentum.</span></h1><p>Every lesson is a step forward. Pick up where you left off.</p></div>
    <div className="stats-grid"><div className="stat-card"><span className="stat-icon violet-bg">▤</span><div><small>Courses enrolled</small><strong>{myCourses.length}</strong></div></div><div className="stat-card"><span className="stat-icon green-bg">✓</span><div><small>Courses completed</small><strong>{completed}</strong></div></div><div className="stat-card"><span className="stat-icon orange-bg">↗</span><div><small>Learning in progress</small><strong>{myCourses.filter(c => (progress[c.id] || 0) < 100).length}</strong></div></div></div>
    <div className="section-heading my-learning-heading"><div><h2>My courses</h2><p>Your learning, all in one place.</p></div><Link className="secondary-link" to="/courses">Discover more <span>→</span></Link></div>
    {myCourses.length ? <div className="course-grid">{myCourses.map(course => <div className="learning-card-wrap" key={course.id}><CourseCard course={course} /><div className="learning-progress"><div className="progress-label"><span>Course progress</span><strong>{progress[course.id] || 0}%</strong></div><div className="progress-track"><span style={{width:`${progress[course.id] || 0}%`}} /></div><Link to={`/courses/${course.id}`} className="continue-link">{(progress[course.id] || 0) >= 100 ? "Review course" : "Continue learning"} →</Link></div></div>)}</div> : <div className="empty-state"><span>✦</span><h3>Your learning journey starts here</h3><p>You haven't enrolled in any courses yet. Find a topic that excites you and take the first step.</p><Link className="button" to="/courses">Explore courses <span>↗</span></Link></div>}
  </main>;
}