import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Completely block MetaMask and crypto wallet interference
window.addEventListener('unhandledrejection', (event) => {
  event.preventDefault();
});

window.addEventListener('error', (event) => {
  if (event.filename && (
    event.filename.includes('chrome-extension://') || 
    event.filename.includes('moz-extension://') ||
    event.filename.includes('MetaMask') ||
    event.filename.includes('wallet') ||
    event.filename.includes('ethereum')
  )) {
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
  }
});

// Prevent MetaMask from injecting
(function() {
  'use strict';
  
  const originalDefineProperty = Object.defineProperty;
  Object.defineProperty = function(obj, prop, descriptor) {
    if (prop === 'ethereum' && obj === window) {
      return;
    }
    return originalDefineProperty.call(this, obj, prop, descriptor);
  };
})();

createRoot(document.getElementById("root")!).render(<App />);
