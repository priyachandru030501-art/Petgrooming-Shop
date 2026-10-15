import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bootstrap CSS and JavaScript
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Main App and Global CSS
import App from "./App.jsx";
import "./index.css";

// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Render React App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);