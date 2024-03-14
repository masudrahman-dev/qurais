import React from "react";
import OnboardingLeftSide from "../../organisms/onboarding-left-side/OnboardingLeftSide";
import { Outlet } from "react-router-dom";

import Button from "../../atoms/button/Button";
import BackButton from "../../atoms/back-button/BackButton";
import Step2 from "./steps/step2/Step2";
import * as Progress from "@radix-ui/react-progress";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Step1 from "./steps/step1/Step1";
import Step3 from "./steps/step3/Step3";

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className="  bg-blackA6 h-[2px] w-full "
      style={{
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="bg-rose-500  h-full transition-transform duration-300 ease-in-out"
        style={{
          width: `${100 - progress}%`,
        }}
      />
    </Progress.Root>
  );
};

const Onboarding = () => {
  return (
    <div>
      {/* <div className="w-1/4 h-4 bg-secondary-200 absolute top-0    "></div> */}
      <div className="grid grid-cols-2  ">
        <div
          className={` flex justify-center border h-screen flex-col items-center `}
        >
          {/* FIXME: use bg pattern and bottom radius*/}
          <div className={`   relative `}>
            <div className="w-[540px] rounded-t-full h-[721px] bg-secondary-200 rotate-[15deg]  "></div>
            <div className="w-[540px] rounded-t-full h-[721px] bg-secondary-200 bg-[url('https://picsum.photos/540/710')] bg-cover absolute top-7 right-7 bg-no-repeat bg-to"></div>
          </div>
        </div>

        <div
          className={` flex justify-center border h-screen flex-col items-center `}
        >
          <div className="w-[720px] rounded-2xl bg-white  p-base">
            <BackButton />

            <div className="bg-primary h-20 w-full mt-base ">
              <ProgressDemo />
            </div>

            {/* <Step1 /> */}
            {/* <Step2 />  */}
            <Step3 />

            <div className="h-[2px] rounded-full bg-gray-400 w-full mb-base mt-8"></div>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
