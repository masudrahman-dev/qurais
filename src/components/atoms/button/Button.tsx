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
      <button ref={ref} type={type} className={clx("", className)}>
        {children ? children : "button"}
      </button>
    );
  }
);

export default Button;
