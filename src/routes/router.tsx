import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateAccount from "../components/templates/create-account/CreateAccount";
import CreateAccountForm from "../components/organisms/create-ccount-form/CreateAccountForm";
import SignInForm from "../components/organisms/signin-form/SignInForm";
import VerifyForm from "../components/organisms/verify-form/VerifyForm";
import Onboarding from "../components/templates/onboarding/Onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error occur</h1>,
    children: [
      {
        path: "account/*",
        element: <CreateAccount />,
        children: [
          {
            path: "register",
            element: <CreateAccountForm />,
          },
          {
            path: "signin",
            element: <SignInForm />,
          },
        ],
      },
      {
        path: "account/verify",
        element: <VerifyForm />,
      },
      {
        path: "onboarding",
        element: <Onboarding />,
      },
    ],
  },
]);
export default router;
