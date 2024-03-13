import React, { useRef } from "react";

import CreateAccountLeftSide from "../../organisms/create-account-left-side/CreateAccountLeftSide";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

import { CheckIcon } from "@radix-ui/react-icons";
import Checkbox from "../../atoms/checkbox/Checkbox";
import { Outlet } from "react-router-dom";

const CreateAccount = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2">
        <CreateAccountLeftSide />
        <Outlet />
      </div>
    </div>
  );
};

export default CreateAccount;
