import React from "react";
import { createRoot } from "react-dom/client";
import "../css/tailwind.css";

import Popup from "../components/popup";

// document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector("#popup");
if (container) {
  const root = createRoot(container);
  root.render(<Popup />);
}
// make background red
// });

console.log("Popup component loaded successfully");
