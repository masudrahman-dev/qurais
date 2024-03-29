import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Button from "../../atoms/button/Button";
import BackButton from "../../atoms/back-button/BackButton";
import Step2 from "./steps/step2/Step2";
import Step1 from "./steps/step1/Step1";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";
import { useOnboardingProvider } from "../../../hooks/use-onboarding-provider/useOnboardingProvider";
import Stepper from "./stepper/Stepper";

import OnboardingStepImage from "./onboarding-step-image/OnboardingStepImage";
import clx from "../../../utils/clx";

const Onboarding = () => {
  const { context } = useOnboardingProvider();
  const { handleIncrement, handleDecrement, current } = context;
  return (
    <div>
      <div
        className={clx(
          `h-4 bg-secondary-200 absolute top-0 w-1/4 transition-all duration-500 ease-in-out`,
          {
            "w-2/4": current === 2,
            "w-3/4": current === 3,
            "w-full": current === 4,
          }
        )}
      ></div>
      <div className="grid xl:grid-cols-2 grid-cols-1  ">
        <div
          className={clx(
            `flex justify-center  h-screen flex-col items-center bg-no-repeat bg-center`,
            {
              "bg-[url('/home/masud/moveOn/quarantine/qurais/src/assets/patterns/pattern-step-1.svg')]":
                current === 1,
              "bg-[url('/home/masud/moveOn/quarantine/qurais/src/assets/patterns/pattern-step-2.svg')]":
                current === 2,
              "bg-[url('/home/masud/moveOn/quarantine/qurais/src/assets/patterns/pattern-step-3.svg')]":
                current === 3,
              "bg-[url('/home/masud/moveOn/quarantine/qurais/src/assets/patterns/pattern-step-4.svg')]":
                current === 4,
            }
          )}
        >
          <div className={`   relative `}>
            <div className="w-[540px] rounded-t-full h-[721px] bg-secondary-200 rotate-[15deg] "></div>
            {current === 1 && (
              <OnboardingStepImage
                className={`bg-[url('/home/masud/moveOn/quarantine/qurais/src/assets/step1.jpeg')] bg-left-top`}
              />
            )}
            {current === 2 && (
              <OnboardingStepImage
                className={`bg-[url('/home/masud/moveOn/quarantine/qurais/src/assets/step2.jpeg')] bg-center`}
              />
            )}
            {current === 3 && (
              <OnboardingStepImage
                className={`bg-[url('/home/masud/moveOn/quarantine/qurais/src/assets/step3.jpeg')] bg-center`}
              />
            )}
            {current === 4 && (
              <OnboardingStepImage
                className={`bg-[url('/home/masud/moveOn/quarantine/qurais/src/assets/step4.jpeg')] bg-center `}
              />
            )}
          </div>
        </div>
        <div
          className={` flex justify-center  h-screen flex-col items-center `}
        >
          <div className="w-[720px] rounded-2xl bg-white  p-base">
            <BackButton onClick={handleDecrement} />
            <div className="bg-primary flex items-center h-20 w-full mt-base ">
              <div className="flex gap-2 px-2 justify-between flex-1">
                <Stepper current={current} />
              </div>
            </div>

            {current === 1 && <Step1 />}
            {current === 2 && <Step2 />}
            {current === 3 && <Step3 />}
            {current === 4 && <Step4 />}

            <div className="h-[2px] rounded-full bg-gray-400 w-full mb-base mt-8"></div>
            <Button onClick={handleIncrement}>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
