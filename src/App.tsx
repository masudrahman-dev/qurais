import React from "react";
import CreateAccount from "./components/templates/create-account/CreateAccount";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav className="absolute z-50 space-x-6">
        <Link to="/account/register">create account</Link>
        <Link to="/account/signin">Sign in</Link>
        <Link to="/account/verify">verify sign in</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
