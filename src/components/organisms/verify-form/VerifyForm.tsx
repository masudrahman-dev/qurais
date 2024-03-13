import React from "react";
import FormHeader from "../../molecules/form-header/FormHeader";
import Button from "../../atoms/button/Button";
import { useState } from "react";
import OtpInput from "react-otp-input";

const VerifyForm = () => {
  const [otp, setOtp] = useState("123456");
  return (
    <div className="max-w-[656px] max-h-[656px] bg-white p-12 rounded-lg absolute top-1/2 left-1/2  shadow -translate-x-1/2 -translate-y-1/2">
      <form>
        <FormHeader
          title="Verify to sign in"
          text="  Get advice and offers tailored to your unique needs, and manage your
        mortgage application in one place."
        />
        <div>
          <label className="block  " htmlFor="username">
            <p className="pb-2 text-base">Enter the code from email</p>
            <div>
              <OtpInput
                skipDefaultStyles={true}
                containerStyle={"gap-4  flex items-center justify-between "}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => {
                  return (
                    <input
                      {...props}
                      className="border w-[66px] h-[66px] rounded-lg  text-center"
                    />
                  );
                }}
              />
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
