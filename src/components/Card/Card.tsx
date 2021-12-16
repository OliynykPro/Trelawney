import React from "react";
import "./Card.scss";

const Card: React.FC = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
