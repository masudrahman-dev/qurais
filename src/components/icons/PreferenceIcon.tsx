import React from "react";
import clx from "../../utils/clx";
import IconWrapper from "./IconWrapper";
const PreferenceIcon = ({
  className,
  iconWrapperStyle,
}: {
  className?: string;
  iconWrapperStyle?: string;
}) => {
  return (
    <IconWrapper iconWrapperStyle={iconWrapperStyle}>
      <svg
        className={clx("h-4 w-4", className)}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.667 4.99935V6.491C16.4587 6.466 16.217 6.44934 15.9587 6.44934H12.392C10.6087 6.44934 10.017 7.04104 10.017 8.82437V13.0827H5.00033C2.33366 13.0827 1.66699 12.416 1.66699 9.74936V4.99935C1.66699 2.33268 2.33366 1.66602 5.00033 1.66602H13.3337C16.0003 1.66602 16.667 2.33268 16.667 4.99935Z"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 13.084V16.6673"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66699 9.91602H10.0003"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.95801 16.666H9.99966"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6666 6.49088C16.4583 6.46588 16.2166 6.44922 15.9583 6.44922H12.3916C10.6083 6.44922 10.0166 7.04092 10.0166 8.82425V15.9576C10.0166 17.7409 10.6083 18.3326 12.3916 18.3326H15.9583C17.7416 18.3326 18.3333 17.7409 18.3333 15.9576V8.82425C18.3333 7.29925 17.8999 6.64921 16.6666 6.49088ZM14.175 8.82425C14.6666 8.82425 15.0666 9.2242 15.0666 9.71587C15.0666 10.2075 14.6666 10.6075 14.175 10.6075C13.6833 10.6075 13.2833 10.2075 13.2833 9.71587C13.2833 9.2242 13.6833 8.82425 14.175 8.82425ZM14.175 15.9576C13.1916 15.9576 12.3916 15.1576 12.3916 14.1742C12.3916 13.7659 12.5333 13.3826 12.7666 13.0826C13.0916 12.6659 13.6 12.3909 14.175 12.3909C14.625 12.3909 15.0333 12.5576 15.3416 12.8242C15.7166 13.1576 15.9583 13.6409 15.9583 14.1742C15.9583 15.1576 15.1583 15.9576 14.175 15.9576Z"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.9583 14.174C15.9583 15.1573 15.1583 15.9573 14.1749 15.9573C13.1916 15.9573 12.3916 15.1573 12.3916 14.174C12.3916 13.7656 12.5333 13.3823 12.7666 13.0823C13.0916 12.6656 13.5999 12.3906 14.1749 12.3906C14.6249 12.3906 15.0333 12.5573 15.3416 12.824C15.7166 13.1573 15.9583 13.6406 15.9583 14.174Z"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1749 10.6075C14.6673 10.6075 15.0665 10.2083 15.0665 9.71584C15.0665 9.22339 14.6673 8.82422 14.1749 8.82422C13.6824 8.82422 13.2832 9.22339 13.2832 9.71584C13.2832 10.2083 13.6824 10.6075 14.1749 10.6075Z"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};

export default PreferenceIcon;
