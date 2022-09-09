import React from "react";
// import ReactDOM from "react-dom"
import {createRoot} from "react-dom/client"
import App from "./App";
import "./index.css";

import MainGame  from "./MainGame"

const root = createRoot(document.getElementById("root"))
root.render(<App />)
// const bodyMain = createRoot(document.getElementById("bodyMain"))
// bodyMain.render(<MainGame />)
// const About = createRoot(document.getElementById("About"))
// About.render(<About />)