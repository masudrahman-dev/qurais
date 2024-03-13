import React from "react";
import logoImg from "../../../assets/logo.svg";
import clx from "../../../utils/clx";
const Logo = ({ className }: { className?: string }) => {
  return <img className={clx(className)} src={logoImg} alt="logo" />;
};

export default Logo;
