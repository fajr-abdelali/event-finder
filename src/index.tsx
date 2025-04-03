import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "maplibre-gl/dist/maplibre-gl.css";
import "./styles/app.less";
import "antd/dist/reset.css";
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
