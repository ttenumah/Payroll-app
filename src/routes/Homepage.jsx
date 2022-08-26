import { Routes, Route, Link } from "react-router-dom";
export default function Homepage() {
    return (
<div className="text-center m-5-auto">
      <h2>DashBoard</h2>
  <form2>
  <p><Link to="/Viewemployee">View and Edit Employees</Link></p>
  </form2>
  
  <form2>
  <p><Link to="/CreatePayroll">Create Payroll</Link></p>
  </form2>

  <form2>
  <p><Link to="/ViewPayroll">View Payroll</Link></p>
  </form2>
  
 
 </div>
    )
  }