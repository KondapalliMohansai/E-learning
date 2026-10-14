import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LearningProvider } from "./context/LearningContext";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LearningProvider>
        <App />
      </LearningProvider>
    </BrowserRouter>
  </React.StrictMode>
);