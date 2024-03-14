import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav className="absolute z-50 space-x-6 top-10 left-10 opacity-50">
        <Link to="/account/register">create account</Link>
        <Link to="/account/signin">Sign in</Link>
        <Link to="/account/verify">verify sign in</Link>
        <Link to="/onboarding">onboarding</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
