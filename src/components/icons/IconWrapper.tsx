import React, { ReactNode } from "react";
import clx from "../../utils/clx";

const IconWrapper = ({
  children,
  iconWrapperStyle,
}: {
  children: ReactNode;
  iconWrapperStyle?: string;
}) => {
  return (
    <span
      className={clx(
        "flex  items-center justify-center rounded-full w-[60px] p-[17.5px] h-[60px] bg-black",
        iconWrapperStyle
      )}
    >
      {children}
    </span>
  );
};

export default IconWrapper;
