/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */

import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Components
 */
import App from "./App.jsx";

/**
 * Css Link
 */
import './index.css'
import 'lenis/dist/lenis.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render( 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Không tìm thấy phần tử #root trong DOM!");
}
