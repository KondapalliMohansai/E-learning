import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import MyLearning from "./pages/MyLearning";
import Auth from "./pages/Auth";

function Layout({ children }) {
  return <><Navbar />{children}<Footer /></>;
}

export default function App() {
  return <Routes>
    <Route path="/" element={<Layout><Home /></Layout>} />
    <Route path="/courses" element={<Layout><Courses /></Layout>} />
    <Route path="/courses/:id" element={<Layout><CourseDetails /></Layout>} />
    <Route path="/my-learning" element={<Layout><MyLearning /></Layout>} />
    <Route path="/login" element={<Auth mode="login" />} />
    <Route path="/register" element={<Auth mode="register" />} />
    <Route path="*" element={<Layout><main className="page-wrap empty-state"><h2>Page not found</h2><a className="button" href="/">Back home</a></main></Layout>} />
  </Routes>;
}