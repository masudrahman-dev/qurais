import React, { useRef } from "react";

import CreateAccountLeftSide from "../../organisms/create-account-left-side/CreateAccountLeftSide";
import Input from "../../atoms/input/Input";

const CreateAccount = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2">
        <CreateAccountLeftSide />
        <div className="bg-white">
          <div className="max-w-[608px] mx-auto pt-[85px]">
            <form className="p-6">
              <h2 className="text-title">Explore your options</h2>
              <p className="text-base">
                Get advice and offers tailored to your unique needs, and manage
                your mortgage application in one place.
              </p>

              <div>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                  <label
                    className="text-[13px] leading-none mb-2.5 text-violet12 block"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="username"
                    defaultValue="@peduarte"
                  />
                </fieldset>
              </div>

              <Input ref={ref} type={"password"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
