import * as ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { initializeApp } from "firebase/app";

const rootElement = document.getElementById("root");

const firebaseConfig = {
  apiKey: "AIzaSyCV0-V-dGPeqOlrJmfdCjivp6k-pWsB24Y",
  authDomain: "arteluces-58b7c.firebaseapp.com",
  projectId: "arteluces-58b7c",
  storageBucket: "arteluces-58b7c.appspot.com",
  messagingSenderId: "554200012252",
  appId: "1:554200012252:web:bff63ca7a013624b9f2b19",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
