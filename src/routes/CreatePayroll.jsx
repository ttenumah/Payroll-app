import { Routes, Route, Link } from "react-router-dom";
export default function CreatePayroll() {
    return (
      <div className="text-center m-5-auto">
      <h2>Sign in</h2>
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="Employeeid">Employee Id</label>
      <input type="id" class="form-control" id="employeeid"/>
    </div>
    <div class="form-group col-md-6">
      <label for="Employeename">Employee Name</label>
      <input type="name" class="form-control" id="employeename" />
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-3">
    <label for="paymethod">Pay Method</label>
    <input type="text" class="form-control" id="paymethod"/>
  </div>
  <div class="form-group col-md-3">
    <label for="noofdays">No of Days</label>
    <input type="text" class="form-control" id="noofdays" placeholder="0"/>
  </div>
  <div class="form-group col-md-3">
    <label for="rateperday">Rate Per Day</label>
    <input type="text" class="form-control" id="rateperday" placeholder="0"/>
  </div>
  <div class="form-group col-md-3">
    <label for="ratewage">Rate Wage</label>
    <input type="text" class="form-control" id="ratewage" placeholder="0"/>
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-2">
      <label for="overtimehr">Overtime Hr</label>
      <input type="text" class="form-control" id="overtimehr"/>
    </div>
    <div class="form-group col-md-2">
      <label for="holidaypaydays">Holiday pay[days]</label>
      <input type="text" class="form-control" id="holidaypaydays"/>
    </div>
    <div class="form-group col-md-2">
      <label for="regularovertime">Regular Overtime</label>
      <input type="text" class="form-control" id="regularovertime" placeholder="0"/>
    </div>
    <div class="form-group col-md-2">
      <label for="holidaypay">Holiday Pay</label>
      <input type="text" class="form-control" id="holidaypay" placeholder="0"/>
    </div>
    <div class="form-group col-md-2">
      <label for="grossincome">Gross Income</label>
      <input type="text" class="form-control" id="grossincome" placeholder="0"/>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="netincome">Net Income</label>
      <input type="id" class="form-control" id="netincome" placeholder="0"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Save</button>
</form>
<footer>
          <p><Link to="/Homepage">HomePage</Link></p>
  </footer>
</div>
    )
  }