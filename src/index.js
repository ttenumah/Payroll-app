
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import './bootstrap4.css';
import './formdesign.css';
import './sidebar.css';
import './primitive.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);