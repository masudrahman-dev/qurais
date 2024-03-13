import React from "react";
import FormHeader from "../../molecules/form-header/FormHeader";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

const VerifyForm = () => {
  return (
    <div className="max-w-[656px] max-h-[656px] bg-white p-12 rounded-lg absolute top-1/2 left-1/2  shadow -translate-x-1/2 -translate-y-1/2">
      <form>
        <FormHeader />
        <div>
          <label className="block  " htmlFor="username">
            <p className="pb-2 text-base">Enter the code from email</p>

            <div className="flex gap-4">
              {[...Array(6)].map((_, i) => {
                return <Input key={i} type={"text"} placeholder=" " />;
              })}
            </div>
          </label>
        </div>
        <p className="pt-8 pb-2">Code hasn't arrived yet?</p>
        <button type="submit" className="text-base font-semibold block">
          Resend code
        </button>
        <p className="pt-8 pb-12">
          Check your Inbox and SPAM folder, you can resend the code in 0
          seconds...
        </p>

        <Button>Verify</Button>
      </form>
    </div>
  );
};

export default VerifyForm;
