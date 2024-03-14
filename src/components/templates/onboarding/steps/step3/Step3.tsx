import React from "react";

import * as RadioGroup from "@radix-ui/react-radio-group";

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="flex   gap-base"
      defaultValue="buyingPrice1"
      aria-label="View density"
    >
      <div className="flex items-start">
        <label
          htmlFor="buyingPrice1"
          className="block w-full text-start
  "
        >
          <RadioGroup.Item
            className="data-[state=checked]:bg-secondary text-start data-[state=unchecked]:border rounded-lg w-full py-base px-6   outline-none cursor-default"
            value="buyingPrice1"
            id="buyingPrice1"
          >
            <span className="text-nowrap ">Yes, I’m UAE resident</span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </label>
      </div>

      <div className="flex items-start">
        <label
          htmlFor="buyingPrice2"
          className="block w-full text-start
 "
        >
          <RadioGroup.Item
            className="data-[state=checked]:bg-secondary text-start data-[state=unchecked]:border rounded-lg w-full py-base px-6   outline-none cursor-default"
            value="buyingPrice2"
            id="buyingPrice2"
          >
            <span className="text-nowrap ">I’m not a resident</span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

const Step3 = () => {
  return (
    <div>
      <h3 className="text-subtitle pt-6 pb-base">
        Are you a resident of the UAE?
      </h3>
      <p className="pb-8">
        Both residents and non-residents are to able to buy property in the UAE,
        but the type of loan, rates, and conditions depend on your UAE residency
        status
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

export default Step3;
