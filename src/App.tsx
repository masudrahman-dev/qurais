import React from "react";
import CreateAccount from "./components/templates/create-account/CreateAccount";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav className="absolute z-50 space-x-6">
        <a href="/account/register">create account</a>
        <a href="/account/signin">Sign in</a>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
