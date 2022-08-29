import { Routes, Route, Link } from "react-router-dom";
export default function Homepage() {
    return (
<div>
    <header>
    <div class="header">
  <a href="#default" class="logo">Employee Payroll</a>
  <div class="header-right">
    <a class="active"><Link to="/">Home</Link></a>
    <a><Link to="/">Contact</Link></a>
    <a><Link to="/">LogOut</Link></a>
  </div>
  </div>
    </header>
<div class="sidenav">
  <a><Link to="/Viewemployee">View Employees</Link></a>
  <a><Link to="/CreatePayroll">Create Payroll</Link></a>
  <a><Link to="/ViewPayroll">View Payroll</Link></a>
  
</div>
</div>
    )
  }