import React from "react";
import "./Logo.scss";

interface ILogoProps {
  title: string;
}

const Logo: React.FC<ILogoProps> = ({ title }) => {
  return <span className="logo">{title}</span>;
};

export default Logo;
