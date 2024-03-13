import React from "react";
import clx from "../../utils/clx";
import IconWrapper from "./IconWrapper";
const ArrowRightIcon = ({
  className,
  iconWrapperStyle,
}: {
  className?: string;
  iconWrapperStyle?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clx("h-4 w-4", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export default ArrowRightIcon;
