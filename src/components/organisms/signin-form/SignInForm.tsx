import React from "react";
import FormHeader from "../../molecules/form-header/FormHeader";
import * as Tabs from "@radix-ui/react-tabs";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

const TabsDemo = () => (
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
      className="grow mt-6 bg-white rounded-b-md outline-none "
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
            <p className="pb-2 text-base">Phone Number</p>
            <Input type={"tel"} placeholder="Phone Number" />
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

const SignInForm = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[608px] mx-auto pt-[85px]">
        <form>
          <FormHeader />

          <TabsDemo />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
