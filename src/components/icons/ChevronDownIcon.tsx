import React from "react";
import clx from "../../utils/clx";
import IconWrapper from "./IconWrapper";
const ChevronDownIcon = ({
  className,
  iconWrapperStyle,
}: {
  className?: string;
  iconWrapperStyle?: string;
}) => {
  return (
    <IconWrapper iconWrapperStyle={iconWrapperStyle}>
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
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </IconWrapper>
  );
};

export default ChevronDownIcon;
