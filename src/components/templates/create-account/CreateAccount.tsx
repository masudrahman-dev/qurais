import React, { useRef } from "react";

import CreateAccountLeftSide from "../../organisms/create-account-left-side/CreateAccountLeftSide";

import { Outlet } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <CreateAccountLeftSide />

        <div className="flex flex-col justify-center h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
