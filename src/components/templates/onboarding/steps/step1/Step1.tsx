import React from "react";

import * as RadioGroup from "@radix-ui/react-radio-group";

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="grid grid-cols-2  gap-base"
      defaultValue="bestOption1"
      aria-label="View density"
    >
      <div className="flex items-start">
        <label
          htmlFor="bestOption1"
          className="block w-full text-start
  "
        >
          <RadioGroup.Item
            className="data-[state=checked]:bg-secondary text-start data-[state=unchecked]:border rounded-lg w-full py-base px-6   outline-none cursor-default"
            value="bestOption1"
            id="bestOption1"
          >
            <span className="text-nowrap ">
              Yes, I’m ready to get a mortgage
            </span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </label>
      </div>

      <div className="flex items-start">
        <label
          htmlFor="bestOption2"
          className="block w-full text-start
 "
        >
          <RadioGroup.Item
            className="data-[state=checked]:bg-secondary text-start data-[state=unchecked]:border rounded-lg w-full py-base px-6   outline-none cursor-default"
            value="bestOption2"
            id="bestOption2"
          >
            <span className="text-nowrap ">No, Just started my research</span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </label>
      </div>

      <div className="flex items-start">
        <label
          htmlFor="bestOption3"
          className="block w-full text-start
 "
        >
          <RadioGroup.Item
            className="data-[state=checked]:bg-secondary data-[state=unchecked]:border rounded-lg w-full py-base px-6   outline-none cursor-default"
            value="bestOption3"
            id="bestOption3"
          >
            <span className="text-nowrap">
              Not yet, I’m checking out my options
            </span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

const Step1 = () => {
  return (
    <div>
      <h3 className="text-subtitle pt-6 pb-base">
        Hi, tell us where you are in your home buying journey
      </h3>
      <p className="pb-8">
        Every mortgage application is unique, but all of them require the same
        basic info to get started
      </p>

      <div>
        <p className="text-label  pb-base">
          Select the option that best describes you
        </p>
        <RadioGroupDemo />
      </div>
    </div>
  );
};

export default Step1;
