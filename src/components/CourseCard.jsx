import { Link } from "react-router-dom";
import { useLearning } from "../context/LearningContext";

export default function CourseCard({ course }) {
  const { enrolled, progress } = useLearning();
  const isEnrolled = enrolled.includes(course.id);
  return (
    <article className="course-card">
      <Link to={`/courses/${course.id}`} className={`course-art ${course.color}`}>
        <span className="art-label">{course.category}</span>
        <span className="art-icon">{course.icon}</span>
        <span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" />
      </Link>
      <div className="course-card-body">
        <div className="course-meta"><span>{course.level}</span><span>◷ {course.duration}</span></div>
        <h3><Link to={`/courses/${course.id}`}>{course.title}</Link></h3>
        <p className="instructor">By {course.instructor}</p>
        <div className="course-bottom"><span className="rating">★ {course.rating} <span className="muted">({course.students})</span></span><span className="price">{course.price}</span></div>
        {isEnrolled && <div className="mini-progress"><span style={{ width: `${progress[course.id] || 0}%` }} /></div>}
      </div>
    </article>
  );
}