import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { initializeApp } from "firebase/app";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVtzyvdASVt-kbQNtraSnaWtvUkybk0_w",
    authDomain: "project-comision-51100.firebaseapp.com",
    projectId: "project-comision-51100",
    storageBucket: "project-comision-51100.appspot.com",
    messagingSenderId: "466772520582",
    appId: "1:466772520582:web:a9857f3bd00f84a0456b07"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

