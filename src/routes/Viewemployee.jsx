import { Routes, Route, Link } from "react-router-dom";
export default function Viewemployee() {
    return (
<div class="contain-table">
    <h2>List Of Employees</h2>
    <table class="striped-table">
      <thead>
       <tr>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Department</th>
       </tr>
      </thead>
      
      <tbody>
       <tr>
         <td>Shadows</td>
         <td>Implas</td>
         <td>IT</td>
       </tr>
       <tr>
         <td>Mr</td>
         <td>T</td>
         <td>IT</td>
       </tr>
       <tr>
         <td>La</td>
         <td>Homie</td>
         <td>Python</td>
       </tr>
       <tr>
         <td>Nips</td>
         <td>SmartGuy</td>
         <td>Coder</td>
       </tr>
      </tbody>
    </table>
 </div>
    )
  }