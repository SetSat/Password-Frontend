import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import SignupForm from "./components/SingupForm";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<SignupForm></SignupForm>}></Route>
          <Route
            path="/reset-password/:token"
            element={<ResetPassword></ResetPassword>}
          />
          <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
