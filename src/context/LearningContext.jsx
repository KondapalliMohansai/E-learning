import { createContext, useContext, useEffect, useState } from "react";

const LearningContext = createContext(null);
const read = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export function LearningProvider({ children }) {
  const [enrolled, setEnrolled] = useState(() => read("learnify-enrolled", []));
  const [progress, setProgress] = useState(() => read("learnify-progress", {}));
  const [user, setUser] = useState(() => read("learnify-user", null));

  useEffect(() => localStorage.setItem("learnify-enrolled", JSON.stringify(enrolled)), [enrolled]);
  useEffect(() => localStorage.setItem("learnify-progress", JSON.stringify(progress)), [progress]);
  useEffect(() => localStorage.setItem("learnify-user", JSON.stringify(user)), [user]);

  const enroll = (courseId) => setEnrolled((current) => current.includes(courseId) ? current : [...current, courseId]);
  const updateProgress = (courseId, amount = 1) => setProgress((current) => ({
    ...current,
    [courseId]: Math.min(100, (current[courseId] || 0) + amount)
  }));
  const signIn = (details) => setUser(details);
  const signOut = () => setUser(null);

  return (
    <LearningContext.Provider value={{ enrolled, progress, enroll, updateProgress, user, signIn, signOut }}>
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) throw new Error("useLearning must be used inside LearningProvider");
  return context;
}