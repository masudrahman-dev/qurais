import React from "react";

import * as RadioGroup from "@radix-ui/react-radio-group";
import CurrencyInput from "react-currency-input-field";

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
            <span className="text-nowrap ">I’m an employee at a company</span>
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
            <span className="text-nowrap ">I’m self-employed</span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

const Step4 = () => {
  return (
    <div>
      <h3 className="text-subtitle pt-6 pb-base">
        How do you earn your income?
      </h3>
      <p className="pb-8">
        Your employee and income is one of the biggest factors that influence
        your loan type and loan amount.
      </p>
      <div>
        <p className="text-label  pb-base">
          What is the price of your property you’re buying?
        </p>
        <RadioGroupDemo />
      </div>

      <form className="pt-base">
        <label htmlFor="price">
          <p className="text-label  pb-base">
            What is the price of your property you’re buying?
          </p>
          <CurrencyInput
            className="focus:outline-none border p-base rounded-lg max-w-[460px] w-full"
            id="price"
            name="price"
            placeholder="Eg 2,000,000"
            decimalsLimit={2}
            onValueChange={(value, name, values) =>
              console.log(value, name, values)
            }
          />
        </label>
      </form>
    </div>
  );
};

export default Step4;
