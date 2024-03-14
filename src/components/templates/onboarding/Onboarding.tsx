import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Button from "../../atoms/button/Button";
import BackButton from "../../atoms/back-button/BackButton";
import Step2 from "./steps/step2/Step2";
import * as Progress from "@radix-ui/react-progress";

import Step1 from "./steps/step1/Step1";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";
import { useOnboardingProvider } from "../../../hooks/use-onboarding-provider/useOnboardingProvider";
import { CheckCircledIcon, CheckboxIcon } from "@radix-ui/react-icons";
import CheckSolidIcon from "../../icons/CheckSolidIcon";

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

const stepsLen = [...Array(4)].map((_, index) => index + 1);
const Onboarding = () => {
  const { context } = useOnboardingProvider();

  const [current, setCurrent] = useState(1);

  const handleIncrement = () => {
    console.log("current :>> ", current);

    if (current < 4) {
      setCurrent((c) => c + 1);
    }
  };
  const handleDecrement = () => {
    console.log("current :>> ", current);

    if (current > 1) {
      setCurrent((c) => c - 1);
    }
  };

  return (
    <div>
      <div className="w-1/4 h-4 bg-secondary-200 absolute top-0    "></div>
      <div className="grid grid-cols-2  ">
        {/* FIXME: use bg pattern and bottom radius*/}
        <div
          className={` flex justify-center border h-screen flex-col items-center `}
        >
          <div className={`   relative `}>
            <div className="w-[540px] rounded-t-full h-[721px] bg-secondary-200 rotate-[15deg]  "></div>
            <div className="w-[540px] rounded-t-full h-[721px] bg-secondary-200 bg-[url('https://picsum.photos/540/710')] bg-cover absolute top-7 right-7 bg-no-repeat bg-to"></div>
          </div>
        </div>
        <div
          className={` flex justify-center border h-screen flex-col items-center `}
        >
          <div className="w-[720px] rounded-2xl bg-white  p-base">
            <BackButton onClick={handleDecrement} />

            {current}
            <div className="bg-primary flex items-center h-20 w-full mt-base ">
              <div className="flex gap-2 px-2 justify-between flex-1">
                {stepsLen?.map((number, index) => {
                  if (number === 1) {
                    return (
                      <div
                        key={index + "stepper"}
                        className="relative flex items-center justify-center  text-secondary"
                      >
                        <CheckSolidIcon />
                        <p className="absolute  -top-3 left-10 text-3xl ">
                          ................
                        </p>
                      </div>
                    );
                  }

                  if (index < current && index !== 3) {
                    return (
                      <div
                        key={index + "stepper"}
                        className="relative flex items-center justify-center  text-secondary"
                      >
                        <CheckSolidIcon />
                        <p className="absolute  -top-3 left-10 text-3xl ">
                          ................
                        </p>
                      </div>
                    );
                  }
                  if (current === 4) {
                    return (
                      <div
                        key={index + "stepper"}
                        className="relative flex items-center justify-center  text-secondary"
                      >
                        <CheckSolidIcon />
                      </div>
                    );
                  }

                  return (
                    <div
                      key={index + "stepper"}
                      className="border w-8 h-8 bg-silver rounded-full"
                    ></div>
                  );
                })}
              </div>
            </div>

            {/* <Step1 /> */}
            {/* <Step2 />  */}
            {/* <Step3 /> */}
            <Step4 />

            <div className="h-[2px] rounded-full bg-gray-400 w-full mb-base mt-8"></div>
            <Button onClick={handleIncrement}>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
