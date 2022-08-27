import { Routes, Route, Link } from "react-router-dom";
export default function Add() {
    return (
<div className="text-center m-5-auto">
      <h2>Create Account</h2>
  <form>
   <label for="First name">First Name</label>
     <input type="text" name="First name" required placeholder="First Name"/>
   <label for="Last name">Last Name</label>
     <input type="text" name="Last name" required placeholder="Last Name"/>
   <label for="Email">Email Address</label>
     <input type="text" name="Email" required placeholder="Email Address"/>
   <label for="Password">Password</label>
     <input type="password" name="password" required placeholder="Password"/>
   <label for="birthday">Birthday:</label>
     <input type="date" id="birthday" name="birthday" required ></input>
   <label for="choose">Department</label>
     <select id="choose">
      <option disabled selected>Please select</option>
      <option value="option-1">Accounting</option>
      <option value="option-2">IT</option>
      <option value="option-2">Human Resources</option>
     </select>
     <br/>
   <button id="sub_btn" type="submit">Submit</button>
  </form>
  <footer>
          <p><Link to="/">Back</Link></p>
  </footer>
 </div>
    )
  }