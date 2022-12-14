import { Routes, Route, Link } from "react-router-dom";
export default function Login() {
    return (
      <div className="text-center m-5-auto">
      <h2>Sign in</h2>
      <form action="/Homepage">
          <p>
              <label>Username</label><br/>
              <input type="text" name="first_name" required />
          </p>
          <p>
              <label>Password</label>
              <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
              <br/>
              <input type="password" name="password" required />
          </p>
          <p>
              <button id="sub_btn" type="submit">Login</button>
          </p>
      </form>
      <footer>
          <p>First time? <Link to="/Add">Create an account</Link>.</p>
          <p><Link to="/">Back to Homepage</Link>.</p>
      </footer>
  </div>
    );
    }  