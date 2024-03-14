import React from "react";
import clx from "../../../../utils/clx";

const OnboardingStepImage = ({ className }: { className: string }) => {
  return (
    <div
      className={clx(
        `w-[540px] rounded-t-full h-[721px]   bg-cover absolute top-7 right-7 bg-no-repeat bg-to`,
        className
      )}
    ></div>
  );
};

export default OnboardingStepImage;
