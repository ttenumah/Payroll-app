import { Routes, Route, Link } from "react-router-dom";
export default function Add() {
    return (
      <div className="text-center m-5-auto">
      <h2>Create Account</h2>
 <form>
<label for="name">Name</label>
  <input type="text" id="name" placeholder="First Name"/>
<label for="Email">Email Address</label>
  <input type="text" id="Email" placeholder="Email Address"/>
<label for="choose">Select</label>
      <select id="choose">
      <option disabled selected>Please select</option>
      <option value="option-1">Option 1</option>
     <option value="option-2">Option 2</option>
     </select>
<label for="comments">Additional Comments</label>
     <textarea id="comments"></textarea>
<button id="create" type="submit">Submit</button>
 </form>
 </div>
    )
  }