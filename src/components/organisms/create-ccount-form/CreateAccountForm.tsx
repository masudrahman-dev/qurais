import React from "react";
import Button from "../../atoms/button/Button";
import Checkbox from "../../atoms/checkbox/Checkbox";
import Input from "../../atoms/input/Input";
import FormHeader from "../../molecules/form-header/FormHeader";

const CreateAccountForm = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[608px] mx-auto pt-[85px]">
        <form className="p-6">
          <FormHeader />

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

            <div className="flex items-baseline gap-[10px]">
              <Checkbox />
              <span>I’d like to receive communication via Whatsapp</span>
            </div>
            <div className="flex items-baseline gap-[10px]">
              <Checkbox isChecked={true} />
              <p>
                By using Qurais you agree to our
                <span className="underline px-1">Terms of Service</span>
                and that you have read and understood our
                <span className="underline px-1">Privacy Policy</span>.
              </p>
            </div>

            <Button>Continue</Button>

            <div className="relative py-4">
              <div className="h-[2px] rounded-full bg-gray-400 w-full"></div>
              <span className="absolute px-4  rounded-lg  bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Or use gmail
              </span>
            </div>
            <Button className="bg-transparent border text-nowrap text-black">
              Continue with Google
            </Button>

            <div>
              <p>
                <span>Already have an account?</span>
                <span className="underline pl-1 font-semibold">Login</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
