import React from "react";
import "./login.css"; // Assuming you have additional custom styles

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic
  };

  return (
    <div className="container">
      <div className="row mt-2 justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control my-2"
                  name="username"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control my-2"
                  name="password"
                  required
                />
              </form>
            </div>
            <div className="card-footer text-center">
              <button type="submit" form="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
