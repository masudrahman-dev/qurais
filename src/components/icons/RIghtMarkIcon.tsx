import React from "react";
import clx from "../../utils/clx";
import IconWrapper from "./IconWrapper";
const RightMarkIcon = ({
  className,
  iconWrapperStyle,
}: {
  className?: string;
  iconWrapperStyle?: string;
}) => {
  return (
    <IconWrapper iconWrapperStyle={iconWrapperStyle}>
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clx("h-4 w-4", className)}
      >
        <path
          d="M10.4508 0.671849C9.61281 -0.0351476 8.38719 -0.0351474 7.54916 0.671849L0.799155 6.36639C0.292405 6.7939 0 7.42315 0 8.08614V17.3913C0 18.3578 0.783502 19.1413 1.75 19.1413H16.25C17.2165 19.1413 18 18.3578 18 17.3913V8.08614C18 7.42315 17.7076 6.7939 17.2008 6.36639L10.4508 0.671849ZM12.7837 9.419L8.28034 13.9224C8.13968 14.0631 7.94892 14.1421 7.75 14.1421C7.55109 14.1421 7.36032 14.0631 7.21967 13.9225L5.21967 11.9225C4.92678 11.6296 4.92678 11.1547 5.21967 10.8618C5.51256 10.5689 5.98744 10.5689 6.28033 10.8618L7.74999 12.3315L11.723 8.35835C12.0159 8.06545 12.4908 8.06545 12.7837 8.35834C13.0766 8.65123 13.0766 9.1261 12.7837 9.419Z"
          fill="#212121"
        />
      </svg>
    </IconWrapper>
  );
};

export default RightMarkIcon;




