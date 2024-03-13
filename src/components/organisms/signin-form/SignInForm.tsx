import React, { useEffect, useState } from "react";
import FormHeader from "../../molecules/form-header/FormHeader";
import * as Tabs from "@radix-ui/react-tabs";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const TabsDemo = () => {
  return (
    <Tabs.Root className="flex flex-col  " defaultValue="tab1">
      <Tabs.List
        className="shrink-0 flex gap-3 bg-silver p-2 rounded-lg "
        aria-label="Manage your account"
      >
        <Tabs.Trigger
          className="bg-white text-base shadow  font-semibold py-3 w-full flex-1 flex items-center justify-center  rounded leading-none  select-none text-black data-[state=active]:bg-secondary  outline-none cursor-default"
          value="tab1"
        >
          Email
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-white text-base  shadow font-semibold py-3 w-full flex-1 flex items-center justify-center  rounded leading-none  select-none text-black data-[state=active]:bg-secondary  outline-none cursor-default"
          value="tab2"
        >
          Phone
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow mt-6  rounded-b-md outline-none "
        value="tab1"
      >
        <fieldset>
          <div>
            <label className="block " htmlFor="email">
              <p className="pb-2 text-base">Email</p>
              <Input type={"email"} placeholder="Email" />
            </label>
          </div>
        </fieldset>
      </Tabs.Content>
      <Tabs.Content
        className="grow  bg-white rounded-b-md outline-none mt-6 "
        value="tab2"
      >
        <fieldset>
          <div>
            <label className="block  " htmlFor="username">
              <p className="pb-2   text-base">Phone Number</p>
              <PhoneInput
                country={"bd"}
                value={"8801704445245"}
                containerClass=" flex !bg-white items-center h-14 border focus:outline-none !placeholder:text-base w-full  rounded "
                inputClass=" !w-full !border-none !border"
                buttonClass=" !border-none !bg-white "
                dropdownClass="!border-none !bg-white !hover:bg-white    "
                onChange={(phone) => {
                  // console.log("phone :>> ", phone);
                }}
              />
            </label>
          </div>
        </fieldset>
      </Tabs.Content>
      <Button type="submit" className="mt-6 mb-4">
        Sign in
      </Button>
      <div>
        <p>
          <span>Already have an account?</span>
          <span className="underline pl-1 font-semibold">Sign Up</span>
        </p>
      </div>
    </Tabs.Root>
  );
};

const SignInForm = () => {
  return (
    <div className="">
      <div className="max-w-[608px] ms-[120px] pt-[85px]">
        <form>
          <FormHeader
            title="Welcome Back!"
            text="  Get advice and offers tailored to your unique needs, and manage your
        mortgage application in one place."
          />

          <TabsDemo />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
