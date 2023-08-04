import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './custom.scss';

const rootElement =document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error("Element with id 'root' not found.");
  }
