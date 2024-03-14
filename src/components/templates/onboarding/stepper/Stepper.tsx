import React from "react";
import CheckSolidIcon from "../../../icons/CheckSolidIcon";
const stepsLen = [...Array(4)].map((_, index) => index + 1);

interface StepperProps {
  current: number;
}

const Stepper: React.FC<StepperProps> = ({ current }) => {
  return (
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
                ..................
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
                ..................
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
  );
};

export default Stepper;
