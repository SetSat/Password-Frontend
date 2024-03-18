import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://password-backend-f69z.onrender.com/api/users/newuser",
        { email, password }
      );
      setMessage(response.data.message);
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      {message && <div className="mt-3">{message}</div>}
      <Link to={"/forgotpassword"}>Forgot Password</Link>
    </div>
  );
};

export default SignupForm;
