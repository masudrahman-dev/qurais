import React from "react";
import OnboardingLeftSide from "../../organisms/onboarding-left-side/OnboardingLeftSide";
import { Outlet } from "react-router-dom";

import bamboo from "../../../assets/patterns/bamboo/bamboo.svg";

const Onboarding = () => {
  return (
    <div>
      <div className="w-1/4 h-4 bg-secondary-200 absolute top-0    "></div>
      <div className="grid grid-cols-2 ">
        <div
          className={` flex justify-center border h-screen flex-col items-center `}
        >
          <div className={`   relative `}>
            <div className="w-[540px] rounded-t-full h-[721px] bg-secondary-200 rotate-[15deg]  "></div>
            <div className="w-[540px] rounded-t-full h-[721px] bg-secondary-200 bg-[url('https://picsum.photos/540/710')] bg-cover absolute top-7 right-7 bg-no-repeat bg-to"></div>
          </div>
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Onboarding;
