import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import Add from "./routes/Add";
import Homepage from "./routes/Homepage";
import CreatePayroll from "./routes/CreatePayroll";
import ViewPayroll from "./routes/ViewPayroll";
import Viewemp from "./routes/Viewemployee";
import Viewemployee from "./routes/Viewemployee";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Payroll Portal</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Add" element={<Add />} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="CreatePayroll" element={<CreatePayroll />} />
        <Route path="ViewPayroll" element={<ViewPayroll />} />
        <Route path="Viewemployee" element={<Viewemployee />} />
      </Routes>
    </div>
  );
}