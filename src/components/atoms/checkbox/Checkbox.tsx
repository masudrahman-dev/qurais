import clsx from "clsx";
import React, { ReactNode, useImperativeHandle, useState } from "react";
import clx from "../../../utils/clx";
import { CheckIcon } from "@radix-ui/react-icons";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  isChecked?: boolean;

};

const Checkbox = React.forwardRef(
  (
    { value, className, id, isChecked = false, ...rest }: CheckboxProps,
    ref
  ) => {
    const checkboxRef = React.useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => checkboxRef.current);

    const [isCheck, setIsCheck] = useState(isChecked);

    useImperativeHandle(ref, () => checkboxRef.current);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsCheck(e.target.checked);
    };

    return (
      <div className={clx("relative ", className)}>
        <input
          className="w-4 h-4 border rounded     appearance-none   "
          type="checkbox"
          {...rest}
          ref={checkboxRef}
          value={value}
          onChange={handleCheckboxChange}
          id={id}
          {...rest}
        />

        {isCheck && (
          <CheckIcon className="absolute  w-4 h-4  bg-black rounded text-white pointer-events-none  top-0 left-0 " />
        )}
      </div>
    );
  }
);

export default Checkbox;
