import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route
            path="/reset-password/:token"
            element={<ResetPassword></ResetPassword>}
          />
          <Route path="/" element={<ForgotPassword></ForgotPassword>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
