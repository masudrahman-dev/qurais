import React, { forwardRef, ReactNode } from "react";
import clx from "../../../utils/clx";

interface InputProps {
  fieldProps?: string;
  className?: string;
  type?: "text" | "email" | "password" | "tel";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...fieldProps }, ref) => {
    console.log("fieldProps :>> ", fieldProps);
    return (
      <input
        className={clx(" border ", className)}
        type={type}
        {...fieldProps}
        ref={ref}
      />
    );
  }
);

export default Input;
