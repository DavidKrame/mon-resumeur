import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component"; // Pour les notifications

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactNotifications />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
