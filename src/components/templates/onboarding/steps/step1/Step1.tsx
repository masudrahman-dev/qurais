import React from "react";

import * as Form from "@radix-ui/react-form";

const FormDemo = () => (
  <Form.Root className="w-[260px]">
    <Form.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Email
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="valueMissing"
        >
          Please enter your email
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="typeMismatch"
        >
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>

    <Form.Submit asChild>
      <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        Post question
      </button>
    </Form.Submit>
  </Form.Root>
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

      <form>
        <label htmlFor="price">
          <p className="text-label  pb-base">
            Select the option that best describes you
          </p>
        </label>
      </form>
    </div>
  );
};

export default Step1;
