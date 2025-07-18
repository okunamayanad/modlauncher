import React from "react";
import { createRoot } from "react-dom/client";
import "../css/tailwind.css";

import NavButton from "../components/navbar-button";
import { waitForElement } from "./lib/wait-for-element";
(async () => {
  console.log("Popup component activated successfully");

  const navbar = await waitForElement(
    "#__nuxt > div.layout > header.experimental-styles-within.desktop-only.relative.z-\\[5\\].mx-auto.grid.max-w-\\[1280px\\].grid-cols-\\[1fr_auto\\].items-center.gap-2.px-6.py-4.lg\\:grid-cols-\\[auto_1fr_auto\\] > div.col-span-2.row-start-2.flex.flex-wrap.justify-center.gap-4.lg\\:col-span-1.lg\\:row-start-auto"
  );

  if (!navbar) {
    console.error("Navbar not found");
    return;
  }

  const container = document.createElement("div");
  navbar.appendChild(container);

  const root = createRoot(container);
  root.render(<NavButton />);
})();
