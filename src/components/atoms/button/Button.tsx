import React, { ReactNode, forwardRef } from "react";
import clx from "../../../utils/clx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  type?: "submit" | "button";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = "button", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        {...rest}
        className={clx(
          "block transition-transform duration-200 p-base w-full rounded-lg bg-black text-white text-[18px] font-semibold",
          className
        )}
      >
        {children ? children : "button"}
      </button>
    );
  }
);

export default Button;
