import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const categories = ["All categories", "Development", "Design", "Data Science", "Business", "Personal Growth"];
export default function Courses() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("category") || "All categories";
  const [category, setCategory] = useState(categories.includes(initial) ? initial : "All categories");
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All levels");
  const filtered = useMemo(() => courses.filter(course =>
    (category === "All categories" || course.category === category) &&
    (level === "All levels" || course.level === level) &&
    `${course.title} ${course.category} ${course.instructor}`.toLowerCase().includes(search.toLowerCase())
  ), [category, level, search]);
  const changeCategory = (value) => { setCategory(value); setParams(value === "All categories" ? {} : { category: value }); };
  return <main className="page-wrap"><div className="page-intro"><span className="eyebrow">THE COURSE LIBRARY</span><h1>Find your next <span>favorite skill.</span></h1><p>Explore practical courses created to help you learn, build, and grow.</p></div>
    <div className="course-tools"><label className="search-box"><span>⌕</span><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses, topics, instructors..." /></label><label className="select-wrap"><span className="sr-only">Filter by level</span><select value={level} onChange={e => setLevel(e.target.value)}><option>All levels</option><option>Beginner</option><option>Intermediate</option><option>All levels</option></select></label></div>
    <div className="filter-row">{categories.map(item => <button key={item} className={`filter-chip ${category === item ? "active" : ""}`} onClick={() => changeCategory(item)}>{item}</button>)}</div>
    <div className="results-row"><strong>{filtered.length} courses to explore</strong><span>Learn at your own pace</span></div>
    {filtered.length ? <div className="course-grid">{filtered.map(course => <CourseCard key={course.id} course={course} />)}</div> : <div className="empty-state"><span>⌕</span><h3>No courses found</h3><p>Try another search or category.</p><button className="button" onClick={() => { setSearch(""); changeCategory("All categories"); setLevel("All levels"); }}>Clear filters</button></div>}
  </main>;
}