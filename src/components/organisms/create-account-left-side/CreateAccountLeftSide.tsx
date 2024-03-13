import React from "react";
import Logo from "../../atoms/logo/Logo";
import RightMarkIcon from "../../icons/RIghtMarkIcon";
import ChatIcon from "../../icons/ChatIcon";

const CreateAccountLeftSide = () => {
  return (
    <div className="bg-primary   h-screen">
      <div className=" max-w-[624px] mx-auto pt-[85px] ">
        <Logo />
        <h1 className="text-heading py-12">
          Dream Home with Hassle-Free Mortgage
        </h1>

        <div className="space-y-9">
          <p className="flex items-baseline gap-4">
            <RightMarkIcon />
            <span>
              Free, no commitment consultation with one of our experts to
              understand your needs
            </span>
          </p>
          <p className="flex items-baseline gap-4">
            <RightMarkIcon />
            <span>
              Access to exclusive offers and fee breakdown without setting foot
              in a bank
            </span>
          </p>
          <p className="flex items-baseline gap-4">
            <RightMarkIcon />
            <span>
              Quick, efficient, and paperless mortgage application process when
              you’re ready
            </span>
          </p>
          <p className="flex items-baseline gap-4">
            <RightMarkIcon />
            <span>
              A handy homebuyer’s checklist to guide you every step of the way
            </span>
          </p>
        </div>

        <div className="mt-[98.89px]">
          <ChatIcon  />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountLeftSide;
