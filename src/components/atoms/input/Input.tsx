import React, { forwardRef, ReactNode } from "react";
import clx from "../../../utils/clx";

interface InputProps {
  fieldProps?: string;
  className?: string;
  type?: "text" | "email" | "password" | "tel" | "number";
  id?: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      placeholder = "placeholder",
      id,
      ...fieldProps
    },
    ref
  ) => {
    return (
      <input
        className={clx(
          " border focus:outline-none placeholder:text-base w-full  rounded font-normal px-4 py-3",
          className
        )}
        type={type}
        placeholder={placeholder}
        id={id}
        {...fieldProps}
        ref={ref}
      />
    );
  }
);

export default Input;
