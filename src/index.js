import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Get the root element
const rootElement = document.getElementById("root");

// Check if the app is being hydrated (pre-rendered by react-snap) or rendered fresh
if (rootElement.hasChildNodes()) {
  // Hydrate pre-rendered content from react-snap
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Create React root and render the main App (for development)
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Optional: Measure performance (only if needed)
reportWebVitals();