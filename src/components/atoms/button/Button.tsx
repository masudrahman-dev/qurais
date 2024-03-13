import React, { ReactNode, forwardRef } from "react";
import clx from "../../../utils/clx";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: "submit" | "button";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = "button" }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clx(
          "hover:scale-105 block transition-transform duration-200 p-base w-full rounded-lg bg-black text-white text-[18px] font-semibold  ",
          className
        )}
      >
        {children ? children : "button"}
      </button>
    );
  }
);

export default Button;
