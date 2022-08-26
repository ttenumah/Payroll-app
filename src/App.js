import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import Add from "./routes/Add";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Payroll Portal</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Add" element={<Add />} />
      </Routes>
    </div>
  );
}