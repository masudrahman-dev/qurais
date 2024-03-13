import React, { useRef } from "react";

import CreateAccountLeftSide from "../../organisms/create-account-left-side/CreateAccountLeftSide";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

import { CheckIcon } from "@radix-ui/react-icons";
import Checkbox from "../../atoms/checkbox/Checkbox";

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
              <p className="text-base pt-4 pb-8 text-dark">
                Get advice and offers tailored to your unique needs, and manage
                your mortgage application in one place.
              </p>

              <div className="space-y-base">
                <div>
                  <label className="block " htmlFor="email">
                    <p className="pb-2 text-base">Email</p>
                    <Input type={"email"} placeholder="Email" />
                  </label>
                </div>

                <div>
                  <label className="block  " htmlFor="username">
                    <p className="pb-2 text-base">Phone Number</p>
                    <Input type={"tel"} placeholder="Phone Number" />
                  </label>
                </div>

                <div className="flex gap-4">
                  <label className="block " htmlFor="username">
                    <p className="pb-2 text-base">First Name</p>
                    <Input type={"text"} placeholder="First Name" />
                  </label>

                  <label className="block " htmlFor="username">
                    <p className="pb-2 text-base">Last Name</p>
                    <Input type={"text"} placeholder="Last Name" />
                  </label>
                </div>

                <div>
                  <label className="block space-x-[10px] " htmlFor="username">
                    <input type="checkbox" />
                    <span>I’d like to receive communication via Whatsapp</span>
                  </label>
                </div>
                <div className="flex items-baseline gap-[10px]">
                  <Checkbox isChecked={true} />

                  <p>
                    By using Qurais you agree to
                    <span>ourTerms of Service</span> and that you have read and
                    understood our <span>Privacy Policy</span>.
                  </p>
                </div>

                <Button>Continue</Button>

                <div className="relative">
                  <div className="h-[2px] rounded-full bg-gray-400 w-full"></div>
                  <span className="absolute px-4 py-2 rounded-lg  bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Or use gmail
                  </span>
                </div>
                <div>
                  <p>
                    <span>Already have an account?</span>

                    <span>Login</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
