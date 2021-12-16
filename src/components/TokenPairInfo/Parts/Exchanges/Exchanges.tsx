import React from "react";

import Circle from "../../../Circle/Circle";
import { exchanges } from "../../../../recourses/exchanges";

import "./Exchanges.scss";

const Exchanges: React.FC = () => {
  return (
    <div className="exchanges">
      {exchanges.map((exchange) => {
        return <Circle image={exchange.name} color={exchange.color} />;
      })}
    </div>
  );
};

export default Exchanges;
