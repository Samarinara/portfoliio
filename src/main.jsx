import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import TopBar from "./TopBar.jsx";
import UnderConstruction from "./UnderConstruction.jsx";
import Projects from "./Projects.jsx";
import ProfilePage from "./ProfilePage.jsx";
import BackendDev from "./BackendDev.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TopBar></TopBar>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/backend-dev" element={<BackendDev />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
